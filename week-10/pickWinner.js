function pickingAWinner(){
    let winner = prompt('Enter winner');
    const winnerArray = [];
    while(winner !== ''){
        winnerArray.push(winner)
          winner = prompt('Enter winner');
    };
    const randIdx = Math.floor(Math.random()*winnerArray.length);
    return winnerArray[randIdx];
};
pickingAWinner();