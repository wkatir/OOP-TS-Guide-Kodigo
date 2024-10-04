abstract class Person {
  protected firstName: string;
  protected lastName: string;
  protected address: string;
  protected phoneNumber: string;
  protected age: number;

  constructor(
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    age: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.age = age;
  }

  public checkAge(): string {
    return this.age >= 18 ? "You are of legal age" : "You are a minor";
  }

  public abstract displayData(): string;
}

class Employee extends Person {
  private salary: number;

  constructor(
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    age: number,
    salary: number
  ) {
    super(firstName, lastName, address, phoneNumber, age);
    this.salary = salary;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  public printSalary(): string {
    return `<p>The salary of ${this.firstName} ${this.lastName} is $${this.salary}.</p>`;
  }

  public displayData(): string {
    return `
        <p>First Name: ${this.firstName}</p>
        <p>Last Name: ${this.lastName}</p>
        <p>Address: ${this.address}</p>
        <p>Phone: ${this.phoneNumber}</p>
        <p>Age: ${this.age}</p>`;
  }
}

const employee = new Employee(
  "Wilmer",
  "Salazar",
  "Santa Tecla",
  "6452 5903",
  19,
  620
);

export const $05exercise = (): void => {
  const $element = document.getElementById("exercise-5");
  if ($element) {
    $element.innerHTML += `
        <h2>EXERCISE 5.</h2>
        <p>Create an abstract class called Person and Employee: </p>
        <div class="container-class">
          <div class="separation-margin">${employee.checkAge()}</div>
          <div class="separation-margin">${employee.printSalary()}</div>
          <div class="separation-margin">${employee.displayData()}</div>
        </div>`;
  }
};
