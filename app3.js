const maxNum = prompt("Enter Max. Number");

const generatedNum = Math.floor( Math.random() * maxNum ) + 1 ;

let guessNum = prompt(`Guess generated number from 1 to ${maxNum}`) ;

while(true){
    if ( guessNum == generatedNum ){
        console.log("Your guess was correct.Generated number was",generatedNum);
        break;
    }else if ( guessNum == "Quit"){
        console.log("Better Luck Next Time.");
        console.log(`The number was ${generatedNum}`);
        break;
    }else if(guessNum<generatedNum){
        guessNum = prompt ("Your guess was small.Please try again");
    }else if(guessNum>generatedNum){
        guessNum = prompt ("Your guess was large.Please try again");
    }
}
