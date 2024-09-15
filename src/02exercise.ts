class Calculator{
    
    public static Add(number1:number, number2:number){
        return number1 + number2;
    }

    public static Subtract(number1:number, number2:number){
        return number1 - number2;
    }

    public static Multiply(number1:number, number2:number){
        return number1 * number2;
    }

    public static Divide(number1:number, number2:number){
        if(number2 !== 0){
            return number1 / number2;
        }else{
            return "It is not possible to divide by 0, please enter a valid number.";
        }
    }



}

export const $02exercise = () => {
    const $element = document.getElementById("exercise-2");
    $element!.innerHTML += `
      <h2>EJERCICIO 2: </h2>
      <p>Crear una clase Calculadora que contendrá los siguientes métodos: </p>
      <ol>
        <li>Sumar</li>
        <li>Restar</li>
        <li>Multiplicar</li>
        <li>Dividir</li>
        <li>Potencia</li>
        <li>Factorial</li>
      </ol>
      `;
  };
  