const user = {
    name:  "Triss",
    surname: "Merigold",
    useMagic: true,
    address: {
        street: "Demagara 13",
        city: "Agan"
    }
};
console.log(user.surname);
console.log(user.name);
console.log(user);
console.log(user.address.city);


const user1 = {
    name: "Kuba",
    surname: "Wędrowicz",
    address: {
        country: "Polska",
        city: "Stary Majdan",
        postal: "22-210",
        street: null,
        
    }
   



}
console.log(user1);

console.log("kolejna");

const shop = {
    name: "Air Max 720",
    mark: "Nike",
    opis: "Mają największą, jak dotąd, poduszkę gazową Air...",
    URL: "example.png//path/to/airmax.png",
    count: "649.99"
}
const userInJSON = JSON.stringify(shop);
console.log(userInJSON);
const shop2 = JSON.parse(userInJSON);
console.log(shop2);

function BankAccount(){
    this.balance = 0;
    this.deposit = function(amount){
        this.balance += amount;
        return this.balance;
    };
    this.withdraw = function(amount){
    amount = Math.min(amount, this.balance);
    this.balance -= amount;
    return amount;
    };
    this.currentBalance = function(){
    return this.balance;
    };


}
const account = new BankAccount();
console.log(account.currentBalance());

const balance = account.deposit(1000);
console.log(balance);
console.log(account.currentBalance());

const withdrawed1 = account.withdraw(300);
console.log(withdrawed1);
console.log(account.currentBalance());

const withdrawed2 = account.withdraw(1500);
console.log(withdrawed2);
console.log(account.currentBalance());