const mysql = require('mysql');
const inquirer = require('inquirer');
const prompts = require('./assets/prompts')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeeDB',
  });

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    inquirer.prompt(prompts.startupPrompts)
    .then((answers) => console.log(answers));
  });