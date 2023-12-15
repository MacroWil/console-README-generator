// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const licenses = ["None", "MIT", "BSD", "GPL", "Apache"];
// an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of the project",
    name: "desc",
  },
  {
    type: "input",
    message: "Write the installation instructions for the project",
    name: "install",
  },
  {
    type: "input",
    message: "Write the people who are contributing to this project",
    name: "contribute",
  },
  {
    type: "input",
    message: "Describe how to use this project",
    name: "usage",
  },
  {
    type: "input",
    message: "Describe how to test this projects functionality",
    name: "test",
  },
  {
    type: "list",
    message: "Enter project licensing",
    name: "license",
    choices: licenses,
  },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your E-mail adress",
    name: "email",
  },
];

//function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile(generateMarkdown(answers)));
}

//function to write README file
function writeToFile(data) {
  const filename = "./generated/README.md";

  fs.writeFile(filename, data, function (err) {
    err ? console.log(err) : console.log(filename + " has been created!");
  });
}

// Function call to initialize app
init();
