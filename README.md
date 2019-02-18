## Development env instructions
- install node, npm, nginx, mongodb
- clone repository
- cd into node-app
- execute `npm install`
- execute `node ./src/server.js`
- copy file `nginx-default` (root folder) to nginx sites-available folder renaming it to `default`
- reload nginx

# Add data
- open localhost/admin and add 
    - cities
    - organizations
    - events

# Serve admin module pointing to localhost
- `cd angular-admin`
- `ng serve`
- open localhost:4200

# Serve admin module pointing to produdction
- `cd angular-admin`
- `ng serve --prod`
- open localhost:4200

# Serve frontend (watch option)
- `cd node-app`
- `pm2 start pm2config.json` or `pm2 start pm2config.json --watch`
