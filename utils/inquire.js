const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');

const question = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'main',
            message: 'What is your query?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ])
}