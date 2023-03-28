function daysToMillis(days){
    return days * 24 * 60 * 60 * 1000;
}
console.log(daysToMillis(4));
//oblicza dni na milisekundy.
console.log("Kolejna");
function triangleArea(a, b)
{
    return a * b / 2;
}
console.log(triangleArea(5, 8));
//wzor pola trojkata prostokatnego
console.log("kolejna")

function theBiggestNumber(a, b, c){
    if(a >= b && a >= c){
        return a;
    } else if (b >= c){
        return b;

    } else{
        return c;
    }
}
console.log(theBiggestNumber(5, 8, 10));
//wypisuje najwieksza liczbe

console.log(Math.pow(4, 2) * Math.PI);
console.log(Math.log10(20 * 30 + 40));
console.log(Math.log2(10 ** -5));
console.log(Math.abs(Math.pow(-3, 7)));

function speak(before, after){
    if(before && typeof before === "function"){
        before();

    }
    console.log("Mowa...");
    if(after && typeof after == "function"){
        after();
    }
}

function cheerKids(){
    console.log("Hej dzieci!");
}
function cheerAll(){
    cheerKids();
    console.log("Witam rodziców");

}
function bless(){
    console.log("Zdrowia");

}
speak();
speak(cheerKids);
speak(cheerAll);
speak(cheerAll, bless);
speak(bless);
speak(undefined, bless);