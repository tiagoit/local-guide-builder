#!/bin/bash

########
        # Purpose :- To Restore backup of MongoDB Collections from a Google Cloud Storage (GCS) bucket.
        # Requirement :- Make Sure you took backup via backupMongo_bucket.sh 
        # Bug Report to :- jadhav.nitin941@gmail.com
########

PROGNAME=$(basename $0)
RESTORE_DIR="/data/Backup/mongodb/Restore"
DATE=$(date +"%F_%H")
BOX=$(uname -n)
LOGDIR=$(dirname ${RESTORE_DIR})/logs/Restore/
LOGFILE="restore_${DATE}.log"
LOCKFILE="/tmp/${PROGNAME}.lock"
REMOVE_FILE_DAYS=7
MONGORESTORE_PATH="/usr/bin/mongorestore"
EXTRACT_DIR="/data/Backup/mongodb/Dump"
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
                        SEND_MAIL "ERROR ::" "Unable to create lock may lock file not removed"
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
        if [ $1 =~ "ERROR" ];then
                exit 1
        else
                exit 0 
        fi
}


LOCK_FILE "create"
echo "Script started at $(date) "1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE


####### Backup and log Directory checking and creations

for dir in "${RESTORE_DIR}" "${LOGDIR}" "${RESTORE_DIR}/${DATE}"

do
        if [ ! -d "${dir}" ]; then
                mkdir -p ${dir} 1>/dev/null 2>/dev/null
                        if [ $? -ne 0 ]; then
                                SEND_MAIL "ERROR::" "Unable to Create ${dir} Directory :"
                        fi
        fi
done

####### Restore logic started

####### Downloading data from S3
        s3cmd get ${BUCKET} ${RESTORE_DIR} 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
        if [ $? -ne 0 ];then
                SEND_MAIL "ERROR ::" "Unable to download tar file from s3 ${BUCKET}"
        fi


######### Untar Logic started 

        if [ -f ${RESTORE_DIR}/${DATE}.tgz ];then
                tar -zxvf ${RESTORE_DIR}/${DATE}.tgz -C ${RESTORE_DIR}/${DATE} 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                if [ $? -ne 0 ];then
                           SEND_MAIL "ERROR ::" " Unable to untar ${RESTORE_DIR}/${DATE}.tgz " 
                fi
 
                for MONGO_DATABASE in $(dir ${RESTORE_DIR}/${DATE}/${EXTRACT_DIR}/${DATE})
                do
                        for COLLECTION in $(ls ${RESTORE_DIR}/${DATE}/${EXTRACT_DIR}/${DATE}/${MONGO_DATABASE} | grep "bson")
                        do
                        COLLECTION=$(echo $COLLECTION | cut -d"." -f1)
                        ${MONGORESTORE_PATH} --db ${MONGO_DATABASE} --drop --collection ${COLLECTION}  ${RESTORE_DIR}/${DATE}/${EXTRACT_DIR}/${DATE}/${MONGO_DATABASE}/${COLLECTION}.bson 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                        done
                done
                        rm -fr ${RESTORE_DIR}/${DATE} 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                        find ${RESTORE_DIR} -name *.tgz -mtime +${REMOVE_FILE_DAYS} -exec rm {} \; 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                if [ $? -eq 0 ]; then
                        echo "Removed old backup files." 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                fi

                        echo "Script eneded at $(date)" 1>> $LOGDIR/$LOGFILE 2>> $LOGDIR/$LOGFILE
                        SEND_MAIL "Success::" "Restore Script executed successfully."

        else 
                           SEND_MAIL "ERROR ::" "Missing Tar file ${RESTORE_DIR}/${DATE}.tgz " 
        fi