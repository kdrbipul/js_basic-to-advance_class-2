// alert();
let winingNumber = 19;
let usserGuess = prompt("Guess a Number");
// console.log(usserGuess);

if(usserGuess===winingNumber){
    console.log("Your Guess is Write");
}else{
    if(usserGuess<winingNumber){
        console.log("too low");
    }else{
        console.log("too high");
    }
}


let tempInDegree = 14;
if(tempInDegree<0){
    console.log("extremely cold outside");
}else if(tempInDegree<16){
    console.log("it is cold outside");
}else if(tempInDegree<25){
    console.log("weather is okay");
}else if(tempInDegree<35){
    console.log("let's go for swim");
}else if(tempInDegree<45){
    console.log("weather is too hot");
}else{
    console.log("too hot!!");
}

console.log("Hello");