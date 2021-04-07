const startupPrompts = [
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
];

const addPrompts = [
    {
        type: 'list',
        name: 'task',
        message: 'What do you want to do?',
        choices: [
            "Add departments, roles, and/or employees",
            "View departments, roles, employees",
            "Update employee roles",
            "Go Back"
        ]
    }
];

const viewPrompts = [
    {
        type: 'list',
        name: 'task',
        message: 'What do you want to do?',
        choices: [
            "Add departments, roles, and/or employees",
            "View departments, roles, employees",
            "Update employee roles",
            "Go Back"
        ]
    }
];

const editPrompts = [
    {
        type: 'list',
        name: 'task',
        message: 'What do you want to do?',
        choices: [
            "Add departments, roles, and/or employees",
            "View departments, roles, employees",
            "Update employee roles",
            "Go Back"
        ]
    }
];

module.exports = {
    startupPrompts,
};