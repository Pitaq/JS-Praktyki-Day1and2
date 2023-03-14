const hasCompueter = true;
const passedTest = false;
let isGrounded = false;

console.log(hasCompueter && passedTest);
console.log(passedTest || isGrounded);
console.log(hasCompueter && !passedTest);

let canPlayGames = hasCompueter && !isGrounded;
console.log(canPlayGames);

let playGames = hasCompueter && canPlayGames;

if(!passedTest){
    isGrounded = true;
}

console.log(playGames);
console.log(passedTest || !isGrounded);
console.log(!(!hasCompueter || !passedTest));



let toBePrinted = true;
while (toBePrinted){
    console.log("będzie wypisane raz");
    toBePrinted = false;
}

let printedTimes = 0;
while (printedTimes <= 2){
    console.log("Wypisane dla " + printedTimes);
    printedTimes += 1;
    //wypisze sie 3 razy!

}

/*while (true){
    console.log("ezezez");
    //Crash przeglądarki XD
}
*/
let a = 0;

while(a <= 100){
    console.log(a);
    a += 2;
}
console.log("Kolejna");
let b = 0;
while(b <= 100){
    console.log(b);
    b += 7;
}

console.log("Kolejna");
let c = 13;
while (c <= 1000){
    console.log(c);
    c *= 3;
}
console.log("Kolejna");
let d = 0;
while (d * d < 1000){
    console.log(d * d);
    d += 1;
}



