const taskArray = ["Employees", "Departments","Roles", "Go Back"]

module.exports = {
    taskArray,

    startupPrompts: [
        {
            type: 'list',
            name: 'task',
            message: 'What do you want to do?',
            choices: [
                "Add departments, roles, or employees",
                "View departments, roles, or employees",
                "Update employee roles",
                "Exit"
            ]
        }
    ],
    
    addPrompts: [
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to add?',
            choices: taskArray
        }
    ],
    
    viewPrompts: [
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to view?',
            choices: taskArray
        }
    ],
    
    updatePrompts: [
        {
            type: 'list',
            name: 'task',
            message: 'What do you want to update?',
            choices: taskArray
        }
    ]
};