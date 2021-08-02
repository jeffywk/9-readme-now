// TODO: Include packages needed for this application
// const { writeToFile, generateMarkdown } = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown')

// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What sort of license would you like for your project?',
            choices: ['GNU GPLv3', 'MIT', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Unlicense', 'No license']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information:'
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Provide contribution guidelines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide testing instructions:'
        }
    ])
    .then(projectData => {
        readmeData.projects.push(projectData);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function generateMarkdown() {}

// Function call to initialize app
questions()
    .then(generateMarkdown);

fs.writeToFile('README.md', generateMarkdown(name, github), err => {
    if (err) throw err;
    
    console.log('README complete! Check out README.md to see the output!');
    });