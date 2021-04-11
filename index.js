const mysql = require('mysql');
require('dotenv').config();
const inquirer = require('inquirer');
const prompts = require('./assets/prompts');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

const start = () => {
    inquirer.prompt(prompts.startupPrompts)
    .then((answers) => {
        switch(answers.task) {
            case "Add departments, roles, or employees":
                addSelector();
                break;
            case "View departments, roles, or employees":
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
    inquirer.prompt(prompts.addPrompts)
    .then((answers) => {
      switch (answers.task) {
        
      }
      });
  }

function viewSelector() {
    inquirer.prompt(prompts.viewPrompts)
        .then((answers) => {
          switch (answers.task) {
            case "Departments": 
            connection.query("SELECT * FROM department", (err, res) => {
              if (err) throw err;
              console.table(res);
              start();
              });        
                break;
            case "Employees":
              connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res);
                start();
                });
                break;
            case "Roles":
              connection.query("SELECT * FROM role", (err, res) => {
                if (err) throw err;
                console.table(res);
                start();
                });
                break;
            case "Go Back":
                start();
                break;
        };
      });
  };

function updateSelector() {
    inquirer.prompt(prompts.updatePrompts)
        .then((answers) => {
            switch (answers.task) {
                case "Departments":
                    updateDepartment();
                    break;
                case "Employees":
                    updateEmployee();
                    break;
                case "Roles":
                    updateRole();
                    break;
                case "Go Back":
                    start();
                    break
            }
        });
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