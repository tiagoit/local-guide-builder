# Create the VM on Google Compute Engine

## Network tag: VPC Network -> Firewall rules
- Name: ingress-mongodb
- Target: Specified target tags
- Target tags: ingress-mongodb
- Protocols and ports: tcp:27017


## External IP address: VPC Network -> External IP address
- Name: mongodb-stg-ip
- Network service tier: premium
- IP version: IPV6
- Type: Global
- 2600:1901:0:c744::


## Virtual Machine: Compute Engine -> VM Instances
- Name: instance-mongodb-stg
- Machine type: f1-micro (1 vCPU, 0.6 GB memory)
- Service account: No service account.
- Security: SSH Keys: Block project-wide SSH keys.
- Networking: Network tags: ingress-mongodb
- Networking: Hostname: instance-mongodb-stg.sulbaguia-stg.internal
- Networking: Interfaces: External IP: Primary Internal IP: Reserve Static Name: mongodb-stg-ip


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
- Restart mongod service `$ sudo systemctl restart mongod && sudo systemctl status mongod`


## Create mongobd user and database
- `$ mongod`
- `> use sulbaguia-stg-db`
- `> db.createUser({ user: "sulbaguia-stg-user-gae", pwd: "VNUIF3lffE41CjBuwxLg8CwuWATx6fEFVekVoKVRKAN30V3kXDysDFdfdDFeGJkie9hE69Fe2HmMLmYSd3", roles:[{role: "readWrite" , db:"sulbaguia-stg-db"}]})`

## GCLOUD Console
- Create the bucket **sulbaguia-stg**
- Set permission **Storage Object Viewer** to **allUsers**

