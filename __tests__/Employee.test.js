const Employee = require("../lib/Employee");

test("Can this create a new class object", () => {
  expect(typeof new Employee()).toBe("object");
});
test("Can this set a name via the constructor", () => {
  const name = "Dave";
  const emp = new Employee(name);
  expect(emp.name).toBe("Dave");
});
test("can you set and ID", () => {
  const id = 100;
  const emp = new Employee("test", id);
  expect(emp.id).toBe(100);
});
