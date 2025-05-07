{
    //getter setter
    class BankAccount{
        public readonly id:number;
          name:string;
         private _balance:number
  
          constructor(id:number,name:string,_balance:number){
              this.id = id,
              this.name = name,
              this._balance = _balance
          }
  
          //setter
          set deposit(ammount:number){
            this._balance += ammount
          }
        //   addDeposit(ammount:number){
        //       this._balance += ammount
        //   }
          
        //getter
        get Balance(){
            return this._balance
          }
        //   getBalance(){
        //      return this._balance
        //   }
      }
  
      
  
      const poorAccount = new BankAccount(56,'rumman',282828280)

      poorAccount.deposit= 1
      const totalTaka = poorAccount.Balance
      console.log(totalTaka);
    //   poorAccount.addDeposit(100)
    //   console.log(poorAccount.getBalance());
}