{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number) {
            this._balance = this.balance + amount
        }
        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }

        // getter use kore
        get balance(){
            return this._balance;
        }

        // public getBalance() {
        //     return this._balance;
        // }
    }


    const goribManushAccount = new BankAccount(111, "Mr. Gorib", 90);
    // goribManushAccount.deposit = 0;
    // goribManushAccount.addDeposit(678); // function call korte hosse
    goribManushAccount.deposit = 60
    // const myBalance = goribManushAccount.getBalance(); // function call korte hosse
    // console.log(myBalance);

    const myBalance = goribManushAccount.balance;  // property er moto kore
    console.log(myBalance);
    


    //
}