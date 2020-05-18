## For run client in client directory



### `npm install`

Install packages

### `npm start`

Runs the app in the development mode.<br />
Open http://localhost:3000 to view it in the browser.



## For run server in server directory



### `npm install`

Install packages.

### `nodemon server`

Runs server on 8080 port.<br />


## For installing mongodb



### Install Mongodb 
- `wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -`

- `echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list`


- `sudo apt-get update`

- `sudo apt-get install -y mongodb-org`

### Create db

- `mkdir -p /data/db`