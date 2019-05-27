# Create the VM on Google Compute Engine

## Network tag: VPC Network -> Firewall rules
- Name: ingress-mongodb
- Target: Specified target tags
- Target tags: ingress-mongodb
- Source IP ranges: 0.0.0.0/0
- Protocols and ports: tcp:27212


## Virtual Machine: Compute Engine -> VM Instances
- Name: instance-mongodb
- Machine type: f1-micro (1 vCPU, 0.6 GB memory)
- Service account: No service account.
- Security: SSH Keys: Block project-wide SSH keys.
- Networking: Network tags: ingress-mongodb


## External IP address: VPC Network -> External IP address
- Name: instance-mongodb-external-ip
- Attached to: instance-mongodb


## SSH Into the machine
- Update packages and upgrade available: `$ sudo apt update && sudo apt upgrade -y`


## Install MongoDB.
- `$ curl https://www.mongodb.org/static/pgp/server-4.0.asc | sudo apt-key add -`
- `$ echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main" | sudo tee -a /etc/apt/sources.list.d/mongodb-org-4.0.list`
- `$ sudo apt update && sudo apt install -y mongodb-org`
- `$ sudo systemctl enable mongod && sudo systemctl start mongod && sudo systemctl status mongod`


## Allow connections from any IP address
- Edit the mongodb config file `$ sudo vi /etc/mongod.conf`
- net: change **bindIp: 127.0.0.1** to **bindIpAll: true**
- net: port: 27212
- Restart mongod service `$ sudo systemctl restart mongod && sudo systemctl status mongod`


## Create mongobd user and database
- `$ mongo --port 27212`
- `> use spotexdb`
- `> db.createUser({
	    user: "superadmin",
	    pwd: "sofi0d879f9ds7f98s8a7d9s#$@#*dsf*(%4)97dd9s87dlkjadssdyu",
	    roles: [ { role: "root", db: "admin" } ]
    })` 
- `> db.createUser({ user: "gae_api", pwd: "VNUIF3lffE41Cadsdasajdhas7987oKVRKAN30V3k;l;lmc0ysDFdfdDFeGJkie9hE69Fe2HmMLmYSd3", roles:[{role: "readWrite" , db:"spotexdb"}]})`

db.createUser({ user: "api_user", pwd: "9f8lNUIF3lffE41Cadsdasajdhas7987oKVRKAsa80V3k;l;lmc0ysDFdfdDFeGJkie9hE69Fe2HmMLmYSd3", roles:[{role: "readWrite" , db:"melhorescolha"}]})

## GCLOUD Console
- Create the bucket **sulbaguia-stg**
- Set permission **Storage Object Viewer** to **allUsers**

