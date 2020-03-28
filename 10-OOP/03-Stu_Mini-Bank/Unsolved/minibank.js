function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  };
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.statement = [
    balance
  ];
  this.setBalance = function(value){
    this.balance = value;
  };
  this.updateStatement = function(num){
    this.statement.push(num);
  };
  this.getStatement = function(){
    return this.statement.slice(0);
  };
  this.printStatement = function(){
    this.statement.forEach(function(value){
      console.log(value);
    });
  };
  this.deposit = function(value){
    var newBalance = this.getBalance() + value;
    this.updateStatement(newBalance);
    this.setBalance(newBalance);
  };
  this.withdraw = function(value){
    var newBalance = this.getBalance() - value;
    this.updateStatement(newBalance);
    this.setBalance(-value);
  };
}

const bank = new MiniBank(0);

bank.printBalance();
bank.deposit(10);
bank.printBalance();
bank.withdraw(-5);
bank.printBalance();
bank.printStatement();
