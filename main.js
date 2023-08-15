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