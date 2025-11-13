class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get initials() {
    return `${this.firstName.charAt(0)}.${this.lastName.charAt(0)}.`;
  }
}

class Employee extends Person {
  #salary;
  #employeeId;

  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName);
    this.#employeeId = employeeId;
    this.#salary = 50000;
  }

  get id() {
    return this.#employeeId;
  }

  set salary(newSalary) {
    if (newSalary < this.#salary) {
      console.error("Salary cannot be decreased!");
      return;
    }
    this.#salary = newSalary;
  }

  get annualPay() {
    return this.#salary;
  }
}

class Manager extends Employee {
  #projectsManaged = [];

  constructor(firstName, lastName, employeeId) {
    super(firstName, lastName, employeeId);
  }

  assignProject(projectName) {
    this.#projectsManaged.push(projectName);
  }

  get projectCount() {
    return this.#projectsManaged.length;
  }
}

class ProjectTask {
  #status = "Pending";

  constructor(description, assignedTo) {
    this.description = description;
    this.assignedTo = assignedTo;
  }

  get isDone() {
    return this.#status === "Completed";
  }

  markInProgress() {
    this.#status = "InProgress";
  }

  completeTask() {
    this.#status = "Completed";
  }
}
