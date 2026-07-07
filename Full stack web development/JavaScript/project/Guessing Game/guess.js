const max = prompt("Enter the maximum number:");
console.log(max);

const random = Math.floor(Math.random()*max)+1;
console.log(random);

let guess = prompt("Enter your guess:");

while(true){
    if(guess == "quit"){
        alert("Game Over! The number was " + random);
        break;
    }
    if(guess == random){
        alert("Congratulations! You guessed the number! random number was :", random);
        break;
    } else if (guess < random){
        alert("Hint : Too low! Try again.");
        guess = prompt("Enter your guess:");
    }
    else if (guess > random){
        alert("Hint : Too high! Try again.");
        guess = prompt("Enter your guess:");
    }
    else{
        alert("Wrong guess! Try again.");
        guess = prompt("Enter your guess:");
    }

}