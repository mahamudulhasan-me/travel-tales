{
  class BankAccount {
    readonly acNo: number;
    name: string;
    private balance: number;
    constructor(acNo: number, name: string, balance: number) {
      this.acNo = acNo;
      this.name = name;
      this.balance = balance;
    }
    makeDeposit(amount: number) {
      this.balance = this.balance + amount;
    }
    getBalance() {
      console.log(this.balance);
    }
  }

  const myAccount = new BankAccount(4455, "Mahamudul Hasan", 20);
  myAccount.makeDeposit(100);
  myAccount.getBalance();
}
