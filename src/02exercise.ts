class Calculator {
  public static Add(number1: number, number2: number): number {
    return number1 + number2;
  }

  public static Subtract(number1: number, number2: number): number {
    return number1 - number2;
  }

  public static Multiply(number1: number, number2: number): number {
    return number1 * number2;
  }

  public static Divide(number1: number, number2: number): number | string {
    if (number2 !== 0) {
      return number1 / number2;
    } else {
      return "It is not possible to divide by 0";
    }
  }

  public static Power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  public static Factorial(num: number): number {
    if (num < 0) return -1;
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

const addResult = Calculator.Add(5, 3);
const subtractResult = Calculator.Subtract(5, 3);
const multiplyResult = Calculator.Multiply(5, 3);
const divideResult = Calculator.Divide(5, 0);
const powerResult = Calculator.Power(2, 3);
const factorialResult = Calculator.Factorial(5);

export const $02exercise = (): void => {
  const $element = document.getElementById("exercise-2");
  if ($element) {
    $element.innerHTML += `
    <h2>EXERCISE 2: </h2>
    <p>Create a class called Calculator: </p>
    <div class="container-class">
      <p class="separation-margin">Add: 5 + 3 = ${addResult}</p>
      <p class="separation-margin">Subtract: 5 - 3 = ${subtractResult}</p>
      <p class="separation-margin">Multiply: 5 * 3 = ${multiplyResult}</p>
      <p class="separation-margin">Divide: 5 / 3 = ${Calculator.Divide(
        5,
        3
      )}</p>
      <p class="separation-margin">Divide: 5 / 0 = ${divideResult}</p>
      <p class="separation-margin">Power: 2 ^ 3 = ${powerResult}</p>
      <p class="separation-margin">Factorial: 5! = ${factorialResult}</p>
    </div>
    `;
  }
};
