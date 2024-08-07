function selectingRange(){
    let level = Number(prompt('Enter difficulty level'));
    let range;
    switch(level){
        case 1:
            range = [1,10];
            break;
        case 2:
            range = [1,100];
            break;
        case 3:
            range = [1,1000];
            break;
        default:
            alert('Enter valid number');
            return undefined;
    };
    return range;
};
function guessingGame(){
    const range = selectingRange();
    if(range === undefined) return;
    const [min,max] = [range[0],range[1]];
    const randomNumber = Math.floor(Math.random()*(max-min)+min);
    let guessedNum = Number(prompt('Enter random number'));
    while(true){
        if (guessedNum > randomNumber) {
            alert('Too large');
        } else if (guessedNum < randomNumber) {
            alert('Too small');
        } else if (guessedNum === randomNumber) {
            alert('Just right');
            return;
        } else {
            alert('Enter a valid number');
            return;
        }
        guessedNum = Number(prompt('Enter guessed number'));
    }
};
guessingGame();