const mysql = require('mysql');
const inquirer = require('inquirer');
const prompts = require('./assets/prompts');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Yeah1337',
    database: 'employeeDB',
  });

  const start = () => {
    inquirer.prompt(prompts.startupPrompts)
    .then((answers) => {
        switch(answers.task) {
            case "Add departments, roles, and/or employees":
                addSelector();
                break;
            case "View departments, roles, employees":
                viewSelector();
                break;
            case "Update employee roles":
                updateSelector();
                break;
            case "Exit":
                exit();
                break
        }
    });
  }

  function addSelector() {
    console.log("Add info selected");
  }

  function viewSelector() {
    console.log("View info selected");
  }

  function updateSelector() {
    console.log("Update info selected");
  }

  function exit() {
      console.log("later nerd");
      connection.end();
  }

  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    start();
  });