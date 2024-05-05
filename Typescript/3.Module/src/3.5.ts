{
  // OOP-access identifier, setter and getter
  class BankAccount {
    readonly acNo: number;
    name: string;
    private _balance: number;
    constructor(acNo: number, name: string, balance: number) {
      this.acNo = acNo;
      this.name = name;
      this._balance = balance;
    }
    // makeDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    // getBalance() {
    //   console.log(this._balance);
    // }
    get balance() {
      return this._balance;
    }
    set makeDeposit(amount: number) {
      this._balance += amount;
    }
  }

  const myAccount = new BankAccount(4455, "Mahamudul Hasan", 20);
  // myAccount.makeDeposit(100);
  // myAccount.getBalance();
  myAccount.makeDeposit = 50;
  const balance = myAccount.balance;
  console.log(balance);
}
