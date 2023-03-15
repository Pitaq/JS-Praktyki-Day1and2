function firstNumber(){
    console.log("3");
    console.log("4")
}
function secondNumber(){
    console.log("8");
    console.log("9");

}
console.log("1");
console.log("2");
firstNumber();
console.log("5");
console.log("6");
console.log("7");
secondNumber();
console.log("10");

let whoToCheer = "czytelniku";
function cheer(){
    console.log("Witaj " + whoToCheer + "!");

}
cheer();
whoToCheer = "Wszystkim";
cheer();
function cheerTwoTimes(){
    cheer();
    cheer();

}
cheerTwoTimes();

function cheer1(whoToC){
    console.log("siema " + whoToC + "!");
}
cheer1("Czytelniku");
cheer1("Wszystkim");
cheer1(42);

function suma(a, b){
    console.log(a + b);
}
suma(13 , 7);
console.log("Kolejna");

function printNumbers(a, b){
    for(let i = a; i <= b; i++){
        console.log(i);
    }
}
printNumbers(1 ,20);

function printStars(a){
    let stars = "";
    for( let s = 0; s < a; s++ ){
    stars += "*";
    }
    console.log(stars);
}

printStars(8);

function printSquare(size){
    for(let i = 0; i < size; i++);{
        printStars(size);
    }
}
printSquare(6);

function square(x){
    return x * x;

}
console.log(square(2));
console.log(square(4123));

//dla wartosci bezwzglednej
function absolute(x){
    if (x >= 0){
        return x;
    } else{
        return -x;
    }

}
console.log(absolute(-5));
console.log(absolute(5));

function factorial(num){
    if (num <=1){
        return 1;
    }
    let acc = 1;
    for (var i = 2; i <= num; i++){
        acc *= i;
    }
    return acc;
}
console.log(factorial(6));