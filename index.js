const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./src/templates");

const OUTPUT = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT, "index.html");

const teamArray = [];
const idArray = [];

function start() {
  function managerCreate() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the name of the teams manager?",
        },
        {
          type: "input",
          name: "managerid",
          message: "what is the managers id?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the managers email",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the Managers Office Number?",
        },
      ])
      .then((data) => {
        const manager = new Manager(
          data.managerName,
          data.managerid,
          data.managerEmail,
          data.managerOfficeNumber
        );
        teamArray.push(manager);
        idArray.push(data.managerid);
        buildTeam();
      });
  }

  function buildTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "userChoice",
          message: "which type of member would you like to add?",
          choices: ["Engineer", "Intern", "I'm all done."],
        },
      ])
      .then((data) => {
        switch (data.userChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            createHtml();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the Engineers Name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the Engineers Id?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the Engineers Email?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the Engineers Githubpage?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );

        teamArray.push(engineer);
        idArray.push(answers.engineerId);
        buildTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the Engineers Intern Name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the Engineers Intern Id?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the Engineers Intern Email?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the Intern School?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.school
        );

        teamArray.push(intern);
        idArray.push(answers.internId);
        buildTeam();
      });
  }

  function createHtml() {
    if (!fs.existsSync(OUTPUT)) {
      fs.mkdirSync(OUTPUT);
    }
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
  }

  managerCreate();
}

start();
