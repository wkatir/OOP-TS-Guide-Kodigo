abstract class Person{
    protected firstName:string;
    protected lastName:string;
    protected address:string;
    protected phoneNumber:string;
    protected age:number;

    constructor(firstName:string, lastName:string, address:string, phoneNumber:string,  age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.age = age;
    }

    public checkAge(){
        return `${this.age >= 18 ? "You are of legal age" : "You are a minor"}`
    }

    public abstract displayData():string;

}

class Employee extends Person{
    private salary:number;

    constructor(firstName:string, lastName:string, address:string, phoneNumber:string,  age:number, salary:number) {
        super(firstName, lastName, address, phoneNumber, age);
        this.salary = salary;
      }
      
      setSalary(salary:number) {
        this.salary = salary;
      }

      public printSalary() {
        return `The salary of ${this.firstName} ${this.lastName} is ${this.salary}.`
      }

      public displayData() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Address: ${this.address}, Phone: ${this.phoneNumber}, Age: ${this.age}`;
      } 
}

const employee = new Employee("Wilmer", "Salazar", "Santa Tecla", "54647890", 19, 620);

export const $05exercise = () => {
    const $element = document.getElementById("exercise-5");
    $element!.innerHTML += `
      <h2>EXERCISE 5.</h2>
      <p>Create an abstract class called Person and Employee: </p>
      <div class="container-class">
        <p>${employee.checkAge()}</p>
        <p>${employee.printSalary()}</p>
        <p>${employee.displayData()}</p>
      </div>
      `;
  };
  