class Account{
    private accountHolderName: string;
    private amount: number;
    private accountType: string;
    private accountNumber: string;

    constructor(accountHolderName: string, amount: number, accountType: string, accountNumber: string){
        this.accountHolderName = accountHolderName;
        this.amount = amount;
        this.accountType = accountType;
        this.accountNumber = accountNumber;
    }

    public Deposit(amount:number){
        if(amount > 5){
            this.amount += amount;
            return `Deposit successful! Your account has been credited with the amount: ${amount}.`;
        }else{
            return "The minimum amount to deposit is $5.";
        }
    }

    public Withdraw(amount:number){
        if(this.amount > 0){
            if( this.amount > 5){
                this.amount -= amount;
                return `Withdrawal successful! Your account has been debited with the amount: ${amount}. Current balance: ${this.amount}.`;
            }else{
                return `The withdrawal amount must be greater than $5.`;
            }
        }else{
            return `Insufficient funds. Your account does not have enough balance to complete the withdrawal.`;
        }
    }

    public infoAccount(): string {
        return `Account Holder Name: ${this.accountHolderName}, Account Type: ${this.accountType}, Account Number: ${this.accountNumber}`;
    }
}

const account = new Account("Wilmer", 1000, "Savings Account", "12345678-0");



export const $04exercise = () => {
    const $element = document.getElementById("exercise-4");
    $element!.innerHTML += `
      <h2>EJERCICIO 4.</h2>
      <p>Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color 
      y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda
       y el tercer método que imprima todas las propiedades.</p>
       <p>${account.infoAccount()}</p>
       <p>${account.Deposit(10)}</p>
       <p>${account.Withdraw(10)}</p>

      `;
  };
  