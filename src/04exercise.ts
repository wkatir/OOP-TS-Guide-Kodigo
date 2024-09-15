class Account {
  private accountHolderName: string;
  private amount: number;
  private accountType: string;
  private accountNumber: string;

  constructor(
    accountHolderName: string,
    amount: number,
    accountType: string,
    accountNumber: string
  ) {
    this.accountHolderName = accountHolderName;
    this.amount = amount < 0 ? 0 : amount;
    this.accountType = accountType;
    this.accountNumber = accountNumber;
  }

  public Deposit(amount: number) {
    if (amount >= 5) {
      this.amount += amount;
      return `Deposit successful! Your account has been credited with the amount: ${amount}. Current balance: ${this.amount}.`;
    } else {
      return "The minimum amount to deposit is $5.";
    }
  }

  public Withdraw(amount: number) {
    if (amount <= 0) {
      return "Withdrawal amount must be greater than zero.";
    }
    if (this.amount >= amount) {
      if (amount > 5) {
        this.amount -= amount;
        return `Withdrawal successful! Your account has been debited with the amount: ${amount}. Current balance: ${this.amount}.`;
      } else {
        return `The withdrawal amount must be greater than $5.`;
      }
    } else {
      return `Insufficient funds. Your account does not have enough balance to complete the withdrawal.`;
    }
  }

  public infoAccount(): string {
    return ` <p>Account Holder Name: ${this.accountHolderName}</p>
          <p>Account Type: ${this.accountType}</p>
          <p>Account Number: ${this.accountNumber}</p>`;
  }
}

const account = new Account("Wilmer", 1000, "Savings Account", "12345678-0");

export const $04exercise = (): void => {
  const $element = document.getElementById("exercise-4");
  if ($element) {
    $element.innerHTML += `
      <h2>EXERCISE 4.</h2>
      <p>Create a class called Account:</p>
          <div class="container-class">
          <div class="separation-margin">${account.Deposit(1)}</div>
          <div class="separation-margin">${account.Withdraw(5)}</div>
          <div class="separation-margin">${account.Withdraw(-1)}</div>
          <div class="separation-margin">${account.Deposit(10)}</div>
          <div class="separation-margin">${account.Withdraw(10)}</div>
          <div class="separation-margin">${account.infoAccount()}</div>
       </div>
      `;
  }
};
