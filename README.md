# Portfolio Project 

Fullstack React Blog App with Express and PSQL

## Built with

* React
* PSQL
* Express
* JavaScript
* Node
* VS Code

cd into both Project Directories (client and server) in 2 different terminal windows and then install the dependencies
The "Client" directory contains the React code. The "Server" directory contains the code for the node.js express server. This project requries a PSQL database to run. This project also requires setting up an app on auth0.

1st window
cd Client

2nd window
cd Server

Run both the server and client at the same time
1st window
npm start (runs react at localhost:3000)

2nd window
npm run devstart (devstart runs nodemon at localhost:5000)

1. Set up PSQL
2. Open the PSQL shell and login to PSQL
3. Create a new PSQL database if you have not already done so. Copying the SQL code in the Server/main/schema.sql file and paste it in as commands into the PSQL shell.
4. In the Server/main/db.js file replace the code with the login info for your own PSQL database.
5. After setting up the PSQL database and making the required adjustments in the db.js file, the app will be fully functional.
