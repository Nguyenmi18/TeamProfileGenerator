const Employee = require('./Employee');

class Manager extends Employee {
	contructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	getOfficeNumber(){
		return this.officeNumber;
	}

	getRole(){
		return 'Manager';
	}
}

module.export = Manager;