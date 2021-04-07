module.exports = {
    startupPrompts: [
        {
            type: 'list',
            name: 'task',
            message: 'What do you want to do?',
            choices: [
                "Add departments, roles, and/or employees",
                "View departments, roles, employees",
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
            choices: [
                "Employees",
                "Departments",
                "Roles",
                "Go Back"
            ]
        }
    ],
    
    viewPrompts: [
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to view?',
            choices: [
                "Employees",
                "Departments",
                "Roles",
                "Go Back"
            ]
        }
    ],
    
    updatePrompts: [
        {
            type: 'list',
            name: 'task',
            message: 'What do you want to update?',
            choices: [
                "Employees",
                "Departments",
                "Roles",
                "Go Back"
            ]
        }
    ]
};