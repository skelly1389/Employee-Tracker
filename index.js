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
                case "Departments":
                    depAdder();
                    break;
                case "Employees":
                    empAdder();
                    break;
                case "Roles":
                    roleAdder();
                    break;
                case "Go Back":
                    start();
                break;       
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

const depAdder = () => {
    inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What is the name of the new department?',
        validate: function (value) {
            var pass = (value !== null && value !== "")
            if (pass) {
              return true;
            }
              return 'Please enter a department name';
          },
      },
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO department SET ?',
        {
          name: answer.name
        },
        (err) => {
          if (err) throw err;
          console.log('Department Added!');
          start();
        }
      );
    });
}

const empAdder = () => {
    inquirer
    .prompt([
      {
        name: 'fname',
        type: 'input',
        message: 'What is the first of the new employee?',
        validate: function (value) {
            var pass = (value !== null && value !== "")
            if (pass) {
              return true;
            }
              return 'Please enter a name';
          },
      },
      {
        name: 'lname',
        type: 'input',
        message: 'What is the last name of the new employee?',
        validate: function (value) {
            var pass = (value !== null && value !== "")
            if (pass) {
              return true;
            }
              return 'Please enter a name';
          },
      },
      {
        name: 'role',
        type: 'number',
        message: 'What is the employee\'s role id?',
      },
      {
        name: 'mang',
        type: 'number',
        message: 'What is the employee\'s manager id?',
      }
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: answer.fname,
          last_name: answer.lname,
          role_id: answer.role,
          manager_id: answer.mang
        },
        (err) => {
          if (err) throw err;
          console.log('Employee Added!');
          start();
        }
      );
    });
}

const roleAdder = () => {
    inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'What is the title of the role?',
        validate: function (value) {
            var pass = (value !== null && value !== "")
            if (pass) {
              return true;
            }
              return 'Please enter a title';
          },
      },
      {
        name: 'salary',
        type: 'number',
        message: 'What is the role\'s salary?',
      },
      {
        name: 'dept',
        type: 'number',
        message: 'What is the role\'s department id?',
      }
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO role SET ?',
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.dept,
        },
        (err) => {
          if (err) throw err;
          console.log('Role Added!');
          start();
        }
      );
    });
}

function updateSelector() {
  connection.query('SELECT * FROM employee', (err, answer) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: 'choice',
          type: 'rawlist',
          choices() {
            const choiceArray = [];
            results.forEach(({ last_name, first_name }) => {
              choiceArray.push(`${last_name}, ${first_name}`);
            });
            return choiceArray;
          },
          message: 'Which employee would you like to update??',
        },
      ])
      .then((answer) => {
        const empname = answer;
        inquirer
          .prompt([
            {
              name: 'choice',
              type: 'list',
              message: "Would you like to update their first name?"
              ['yes', 'no']
            }
          ])
          .then((answer) => {
            if(answer == 'yes') {
              
            }
          });
          
      });
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