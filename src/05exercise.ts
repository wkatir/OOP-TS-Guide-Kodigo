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
    const $element = document.getElementById("exercise-4");
    $element!.innerHTML += `
      <h2>EJERCICIO 4.</h2>
      <p>Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color 
      y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda
       y el tercer método que imprima todas las propiedades.</p>
       <p>${employee.checkAge()}</p>
       <p>${employee.printSalary()}</p>
       <p>${employee.displayData()}</p>

      `;
  };
  