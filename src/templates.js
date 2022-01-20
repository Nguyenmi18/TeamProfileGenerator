//build functions that dynamically create html for manager, engineer and intern.

const createTeam = (team) => {
  //create manager fucntion that returns html with template literal and make sure to pass in the data for the manager

  const createManager = (manager) => {
    return `
		<div class="card" style="width: 18rem;">
		<div class="card-body">
		  <h5 class="card-title">${manager.getName()}</h5>
		  <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
		  <ul class="list-group">
			  <li class="list-group-item">${manager.getId()}</li>
			  <li class="list-group-item">${manager.getEmail()}</li>
			  <li class="list-group-item">${manager.getOfficeNumber()}</li>
		  </ul>
		</div>
	  </div>
		`;
  };

  //create enginerr function that returns html with template literal and make sure to pass in the data for the engineer
  const createEngineer = (engineer) => {
    return `
		<div class="card" style="width: 18rem;">
		<div class="card-body">
		  <h5 class="card-title">${engineer.getName()}</h5>
		  <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
		  <ul class="list-group">
			  <li class="list-group-item"> ${engineer.getId()}</li>
			  <li class="list-group-item">${engineer.getEmail()}</li>
			  <li class="list-group-item">${engineer.getGithub()}</li>
		  </ul>
		</div>
	  </div>
		`;
  };
  //create intern function that returns html with template literal and make sure to pass in the data for the intern
  const createIntern = (intern) => {
    return `
	<div class="card" style="width: 18rem;">
		<div class="card-body">
		  <h5 class="card-title">${intern.getName()}</h5>
		  <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
		  <ul class="list-group">
			  <li class="list-group-item">${intern.getId()}</li>
			  <li class="list-group-item">${intern.getEmail()}</li>
			  <li class="list-group-item">${intern.getSchool()}</li>
		  </ul>
		</div>
	  </div>
		`;
  };

  const buildHtml = [];

  buildHtml.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );

  buildHtml.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );

  buildHtml.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );
  return buildHtml.join("");
};

module.exports = (data) => {
  return `
	<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Team List</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
	${createTeam(data)}
</body>
</html>

	`;
};
