# HackJobs

HackJobs is the final project of the HackAcademy Node 1 course. It is an application developed with Node.js and Express that provides a platform to publish and search for job offers.

## Features

- User registration and authentication.
- Job creation, editing and deletion.
- View job offer details.
- Search jobs by title and location.
- Intuitive and easy to use interface.

## Technologies used

- Node.js
- Express
- Sequelize (ORM for the database)
- Multer (for file upload)
- Passport (for user authentication)
- Nunjucks (template engine)
- MySQL (relational database)
- HTML/CSS/JavaScript

## Installation

1. Clone this repository on your local machine.
2. Run `npm install` to install the dependencies.
3. Set the environment variables in the `.env` file.
4. Run `npm run start` to start the application.

### Create the database

Using Beekeeper, create a database with the name `ha_node1_final_project`.

CREATE DATABASE ha_node1_final_project;

Remember that in Supabase the name of the database is `postgres` 😉

### Execute migrations

Once the database is created, run the migrations.

npx sequelize-cli db:migrate

### Load initial data

To load initial data, run the following command:

npx sequelize-cli db:seed:seed:seed:all

Sequelize not only includes migrations, but also has a seeders feature 🌱 to easily manage the initial data.

## Contribute

You are welcome to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
https://opensource.org/licenses/MIT