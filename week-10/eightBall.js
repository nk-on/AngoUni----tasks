function invalidInput(question){
    const regex = /^[^a-zA-Z0-9]+$/;
    if(!isNaN(Number(question))){
        return true;
    }
    if(regex.test(question)){
        return true
    }
    return false
}
function eightBall(){
    const question = prompt('Enter question');
    if(invalidInput(question)){
        alert('invalid input');
        return;
    };
    const possibleOutcomes = ['yes','no','ask again later'];
    const outcomeIndex = Math.floor(Math.random()*(possibleOutcomes.length));
    return possibleOutcomes[outcomeIndex]
};
eightBall();