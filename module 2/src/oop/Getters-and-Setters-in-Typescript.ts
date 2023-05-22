class BankAccount {
    public id: number;
    public name:string;
    private _balance: number;
    constructor(id:number,name: string,balance: number){
        this.id = id;
        this.name= name;
        this._balance= balance;
    }

    get balance(): number{
        return this._balance
    }
    // getter
    // getBalance(){
    //     return`my current balance is ${this._balance}`
    // }

    // setter
    set deposit(amount: number){
     this._balance = this._balance + amount   
    }
    // addDeposit(amount: number){
    //     this._balance = this._balance + amount
    // }
}

const myAccount =new BankAccount (101 , 'kobir', 10330)
// myAccount.balance = 0
// console.log(myAccount.getBalance())
console.log(myAccount.balance)
myAccount.deposit = 30
console.log(myAccount.balance)
// console.log(myAccount);
