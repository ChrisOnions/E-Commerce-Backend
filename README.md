# 13 Object-Relational Mapping (ORM): E-Commerce Back End

![Licence](https://img.shields.io/badge/Licence-MIT-yellow)
![Grade](https://img.shields.io/badge/Grade-A%2B-blue)
![Build](https://img.shields.io/badge/Build-Pass-green)

### Table of contents

- [Links](##Links)
- [Aim](##Aim)
- [Prerequisites](##Prerequisites)
- [Collaborators](##collaborators)
- [Install Guide](##Install)
- [Pictures](##Pictures)

## Links

- [GitHub Repository](https://github.com/jpd61/e-commerce-backend)

<!-- - [Deployed on heroku](https://shielded-escarpment-72538.herokuapp.com/) -->

## Aim

A database is essential to any application that collects data. Larger applications typically collect more data—making data management more complex. For example, we might have to compare data across databases, migrate an app's existing database, or even use various types of databases. Object-relational mapping (ORM) makes these tasks more manageable by helping us to interact with databases using JavaScript.

## Prerequisites

- Javascript
- React
- Express
- Node.js
- NPM
- MySql
- My Sql Workbench

## Collaborators

If you would like to colaborate on this project or would like to know more please see my contacts for information oh how to reach me.

## Install

<span style="color:green">Clone Repository</span> - (From github Repository)

<span style="color:green">NPM i</span> - (To install all required packages from package.json)

<span style="color:green">Create file .env </span> - (From github Repository)

```.env
DB_USER=''
DB_PW=''
DB_NAME='ecommerce_db'

```

<span style="color:green">Create Db</span> - ( Sql database)

```
DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;
```

<span style="color:green">npm run seed</span> - (Seed Sql database)

<span style="color:green">Node Server.js</span> - (Starts program)

<span style="color:green">Visist http://localhost:3001/</span> - (Or change PORT)

<span style="color:green">Use postman/insomnia to test routes</span> - (Useage)

---

## Pictures

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets\express-note-taker.JPG)
![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/express-demo-02.png)
