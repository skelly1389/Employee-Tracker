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
]

module.exports = {
    startupPrompts,
};