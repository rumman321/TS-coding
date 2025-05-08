{
    //access modifiers
    class BankAccount{
      public readonly id:number;
        name:string;
    //    private _balance:number
        #balance:number

        constructor(id:number,name:string,balance:number){
            this.id = id,
            this.name = name,
            this.#balance = balance
        }

        // addDeposit(ammount:number){
        //     this._balance += ammount
        // }

        getBalance(){
           return this.#balance
        }
    }

    // class StudentAccount extends BankAccount{
    //     test(){
    //         this.id
    //     }
    // }

    const poorAccount = new BankAccount(56,'rumman',28282828)
    // poorAccount.balance += 2
    console.log(poorAccount);
    // poorAccount.addDeposit(100)
    console.log(poorAccount.getBalance());
    
}