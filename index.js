// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generatePage = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.createPromptModule([
        {
            type: 'input',
            message:'Title of your project:',
            name:'project_name',
        },
        {
            type: 'input',
            message:'Please give a description of your project:',
            name:'description',
        },
        {
            type: 'input',
            message: 'Table of Contents',
            name: 'table of contents',
        },
        {
            type: 'list',
            message: 'What licenses does your project have?',
            name: 'license',
            choices: ["MIT", "Zlib",],
            default: ["MIT"],
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(
                        "Please choose a license!"
                    );
                    return false;
                }
            },
        },
        {
            type: "input",
            message:
                "What are the steps for the installation of your project?",
            name: "installation",
        },
        {
            type: "input",
            message:
                "How do you use this project?",
            name: "usage",
        },
        {
            type: "input",
            message:
                'What does the user need to know about contributing to the repo? If you do not allow contributions, type "N/A":',
            name: "contributing",
        },
        {
            type: "input",
            message:
                "What is the URL to your Github account?:",
            name: "github_url",
        },
        {
            type: "input",
            message:
                "Please add your email address so people can reach out to you if they have questions about your project:",
            name: "email",
        },
        {
            type: "input",
            message:
                "Enter a copyright year for your project:",
            name: "copyright_year",
        },
        {
            type: "input",
            message:
                "Enter your name for the copyright section of the README:",
            name: "author",
        },
    ]);
};

// TODO: Create a function to write README file

const writeFile = data => {
    fs.writeFile('./instructions/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

questions()
    .then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return writeFile(data);
    });

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();