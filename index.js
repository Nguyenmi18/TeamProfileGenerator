const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const { start } = require('repl');
const { createInterface } = require('readline');

const OUTPUT = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT, 'index.html');

const teamArray = [];
const idArray = [];

function start() {

	function managerCreate() {
		inquirer.prompt([
			{
				type: "input",
				name: 'managerName',
				message: "What is the name of the teams manager?"
			}, 
			{
				type: 'input',
				name: 'managerid',
				message: "what is the managers id?"
			}, 
			{
				type: "input",
				name: 'managerEmail',
				message: 'What is the managers email'
			},
			{
				type: 'input',
				name: 'managerOfficeNumber',
				message: "What is the Managers Office Number?"
			}
		]).then((data)=>{
			const manager = new Manager(data.managerName, data.managerid, data.managerEmail, data.managerOfficeNumber);
			teamArray.push(manager);
			idArray.push(data.managerid)
			buildTeam()
		})
	}

	function buildTeam(){
		inquirer.prompt([{
			type:'list',
			name:'userChoice',
			message: 'which type of member would you like to add?',
			choices: ['Engineer', 'Intern', "I'm all done."]
		}]).then((data)=>{
			switch(data.userChoice){
				case "Engineer":
				addEngineer();
				break;
				case "Intern":
				addIntern()
				break;
				default:
				createHtml();
			
			}
		})
	}

	function addEngineer(){
		inquirer.prompt([{
			type: 'list',
			name: 'userChoice',
			message: ''
		}])
		
		
	}

	function addIntern(){
	

	function createHtml(){
		                                                                         
	}

	managerCreate()
}

start();