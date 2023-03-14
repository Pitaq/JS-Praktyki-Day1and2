console.log("Tak")
let name;
console.log(name !== undefined);
console.log(name === undefined);

name = "Marcin";
console.log(name !== undefined);
console.log(name === undefined);

let firstName
console.log(typeof firstName === "undefined");
console.log(firstName === undefined);

console.log(typeof lastName === "undefined");
//console.log(lastName === undefined);
//Wykaże błąd ponieważ lasname nigdy nie była zdefiniowana

//uzywanie null definiuje zmienną ale nie nadaje jej żadnych wartości
let name1 = null;
console.log(name1);
console.log(name1 === undefined);//False
name1 = "marcin";
console.log(name1 === null); //false


//Warunki IF
if (true){
    console.log("To się wypisze");


}
if(false){
    console.log("a to nie na ten moment")

}
const facebookMember = "Adam";
const facebookMenager = "Janek";
const facebookMaster = "Kacper";

if (facebookMember === "Janek");{
console.log("Babroch"); //nie wypisze sie
}

if(facebookMaster === "Kacper"){
    console.log(facebookMaster);

}

if(facebookMenager === facebookMember){
    console.log(facebookMenager)
} 








const tweetType = "standard";

if (tweetType === "promotional"){
    console.log("promowany")
} else{
    console.log("Zwykły");
    
}