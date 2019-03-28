#!/bin/bash


########

        # Purpose :- To take a backup of MongoDB Collections and upload to AWS s3
        # Requirement :- Make Sure Collection.config file is present in /data/Backup/mongodb 
        # format for Collection.config is db|collection
        # For example 
        # db1|collections1
        # db2|collection2
        # Bug Report to :- jadhav.nitin941@gmail.com
########

PROGNAME=$(basename $0)
BACKUP_DIR="/data/Backup/mongodb/Dump"
DATE=$(date +"%F_%H")
BOX=$(uname -n)
COLLECTION_FILE=$(dirname ${BACKUP_DIR})/Collection.config
LOGDIR=$(dirname ${BACKUP_DIR})/logs/Dump/
LOGFILE="backup_${DATE}.log"
LOCKFILE="/tmp/${PROGNAME}.lock"
REMOVE_FILE_DAYS=7
MONGODUMP_PATH="/usr/bin/mongodump"
MONGO_HOST="localhost" 
MONGO_PORT="27017"
MONGO_USER=""
MONGO_PASSWORD=""
BUCKET="s3://database-backup/mongo-backup/"
MAILTO="jadhav.nitin941@gmail.com"

LOCK_FILE ()
{
        if [ "$1" = "create" ]; then
                if [ -f $LOCKFILE ]; then
                        SEND_MAIL "ERROR::" "Unable to create lock may lock file not removed"
                        exit 0
                fi
                touch $LOCKFILE
        fi
        if [ "$1" = "remove" ]; then
                rm -fr $LOCKFILE
        fi
}



SEND_MAIL ()
{
        mail -s "${BOX} :: ${PROGNAME} : $1 $2"   -t $MAILTO < $LOGDIR/$LOGFILE
        LOCK_FILE "remove"
        if [ $1 = "ERROR" ];then
                exit 1
        else
                exit 0
        fi

}

LOCK_FILE "create"
echo "Script started at :- $(date)" 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE

####### Backup and log Directory checking and creations



for dir in "${BACKUP_DIR}" "${LOGDIR}"

do
        if [ ! -d "${dir}" ]; then
                mkdir -p ${dir} 1>/dev/null 2>/dev/null
                        if [ $? -ne 0 ]; then
                                SEND_MAIL "ERROR::" "Unable to Create ${dir} Directory :"
                                LOCK_FILE "remove"
                                exit 1
                        fi
        fi
done

####### Collection file  checking

if [ ! -f "${COLLECTION_FILE}" ]; then
        SEND_MAIL "ERROR::" " COLLECTION FILE is not Present :"
else
        if [ ! -s "${COLLECTION_FILE}" ]; then
        SEND_MAIL "ERROR ::" "COLLECTION FILE is ZERO byte"
        fi

####### Dump logic started
        for collection_files in $(cat ${COLLECTION_FILE})
        do
                MONGO_DATABASE=$(echo ${collection_files} | cut -d"|" -f1)
                COLLECTION=$(echo ${collection_files} | cut -d"|" -f2)

                ${MONGODUMP_PATH} --db ${MONGO_DATABASE} --collection ${COLLECTION} --host ${MONGO_HOST} --port ${MONGO_PORT}  --out ${BACKUP_DIR}/${DATE}  1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                        if [ $? -ne 0 ]; then
                                SEND_MAIL "ERROR ::" " Unable to take dump for collection ${COLLECTION}" 
                        fi
        done

###### Dump Logic ended

###### Compression Logic started
        tar -zvcf ${BACKUP_DIR}/${DATE}.tgz ${BACKUP_DIR}/${DATE} 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
        if [ $? -ne 0 ]; then
                SEND_MAIL "ERROR ::" " Unable to compress ${BACKUP_DIR}/${MONGO_DATABASE}_${DATE} directory"

        else 
                rm -fr ${BACKUP_DIR}/${DATE}
                find ${BACKUP_DIR} -name *.tgz -mtime +${REMOVE_FILE_DAYS} -exec rm {} \; 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                if [ $? -eq 0 ]; then
                        echo "Removed old backup files." 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                fi
        fi

######################### Pushing data to S3 bucket

        s3cmd put ${BACKUP_DIR}/${DATE}.tgz ${BUCKET} 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
        if [ $? -ne 0 ];then
        SEND_MAIL "ERROR ::" " Unable to send data to S3 Bucket"
        fi

        LOCK_FILE "remove"
        if [ $? -eq 0 ]; then
                echo "Removed lock file file." 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                SEND_MAIL "Success::" "Backup Script executed successfully." 
        fi
fi
echo "Script Ended at $(date)" 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
exit 0
#### END OF LOGIC