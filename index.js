const mysql = require('mysql');
const inquirer = require('inquirer');
const prompts = require('./assets/prompts');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeeDB',
});

const start = () => {
    inquirer.prompt(prompts.startupPrompts)
        .then((answers) => {
            switch (answers.task) {
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
    inquirer.prompt(prompts.addPrompts)
        .then((answers) => {
            switch (answers.task) {
                case "Departments":
                    addDepartment();
                    break;
                case "Employees":
                    viewEmployee();
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

function viewSelector() {
    inquirer.prompt(prompts.addPrompts)
        .then((answers) => {
            switch (answers.task) {
                case "Departments":
                    viewDepartment();
                    break;
                case "Employees":
                    viewEmployee();
                    break;
                case "Roles":
                    viewRole();
                    break;
                case "Go Back":
                    start();
                    break
            }
        });
}

function updateSelector() {
    inquirer.prompt(prompts.addPrompts)
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