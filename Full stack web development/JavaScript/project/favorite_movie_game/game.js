let favoriteMovie = "taqdeer"
let guess =  prompt("Guess my Favorite Movie !");
while((guess != favoriteMovie) && (guess != "quit") ){
    guess = prompt("wrong guess...Please try again!!");
}
if(guess == favoriteMovie){
    alert("Congratulation!!!! your guess is right...");
} else{
    alert("You quit the game....Try again later");
}