class BankAccount{
    #balance = 0;
    deposit(amount){
        this.#balance+=amount;
    };
    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance-=amount;
            return;
        };
        console.log('balance is insufficient');
    };
};
const account1 = new BankAccount();
account1.deposit(400);
account1.withdraw(250);
console.log(account1)