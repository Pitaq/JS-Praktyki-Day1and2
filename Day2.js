console.log("Tak");
let percent;
percent = 70;

console.log("Czy to jest pewne?");
if (percent >= 95){
    console.log("tak napewno");
}
else if(percent >= 80)
{
    console.log("bardzo mozliwe");
} else if(percent >= 60){
    console.log("raczej tak");

}


const userName = "Prezes Marek";
const userAge = 61;

if (userName === "Prezes Marek"){
    console.log("Witaj Adminie!");
} 
if (userName !== ""){
    console.log("Witaj " + userName);

}
if (userAge < 18){
    console.log("Może Herbaty?")

}
if (userAge >= 18){
    console.log("Jakiejś whiskey?");
}
if (userName === "Prezes Marek"){
    console.log("Witamy Pana Prezesa");

} else {
    console.log("Cześć " + userName);
}

if(userAge < 18){
    console.log("Kawki?")
} else { 
    console.log("whiskey?");

}
if (userName === "Prezes Marek"){
    console.log("Witamy Pana Prezesa");

} else if(userName !== ""){
    console.log("Cześć " + userName);

}
if(userAge <= 10){
    console.log("Dzieci");

}else if(userAge <= 20){
    console.log("Młodzież");

}else if(userAge <= 60){
    console.log("Dorośli");
} else {
    console.log("Starsi");
}
