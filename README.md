# CampingProductManagement

This is a project that is currently in process with the goal to build a simple product management Proof of Concept

## To Start
To Run the Project follow the following steps.
* First: Copy and clone the code to the your local machine
* Second: if Postgres is not installed on your machine - install PostgreSQL - then use terminal to creat the database - in the terminal type 'psql' to enter the shell - then type 'CREATE DATABASE campproducts;' to create the database.
* Third: in the root folder of the project run: 'npm install' - using yarn should work as well
* Fourth: create a '.env' folder in the root directory - create 3 variables PG_HOST=(place your host in this variable - "localhost" to run locally) PG_PASSWORD=(if you have a password on your PSQL database place it here or else null) PG_USER=(this should be your username for your PSQL database)
* Fifth: run 'npm run build' - this will build your bundle and place it in your client/dist directory
* Sixth: run 'npm run start' - this will run the server - you should be able to open localhost:3003 in your web browser to see the current version of the app

### Structure

This app is a full stack app. On the backend we are running PostgreSQL with Sequelize as an ORM. The structure and models are built, but it only has partial functionality currently. On the client side, this is a single page web app built with React. The src folder has both a Components directory and a Pages directory. There is currently only one Page - the Main page for the Product Management System. The Components directory utilizes Atomic Design to break the individual components into smaller parts. 

This is currently just a proof of concept. The client has functionality to add and display the products. It shows where functionality for delete will be added, but currently that is not in place. The Brands and Vendors are built on the Server and Database, but not yet incorporated into the client. 
