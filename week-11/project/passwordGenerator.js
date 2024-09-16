function invalidValue(num){
    if(num <= 0 || isNaN(num)){
        return true;
    };
};
 function setInput(messege){
     let input = Number(prompt(messege));
     while(invalidValue(input)){
         input =  Number(prompt('Enter valid num'));
     };
     return input;
}
function generateRandom(number,arr){
    const resultArr = [];
    for(let i = 0; i < number; i++){
        const randomNum = Math.floor(Math.random()*arr.length);
        const randomChar = arr[randomNum];
        resultArr.push(randomChar)
    };
    return resultArr;
};
function genereteRandomLetter(number){
    const resultArr = [];
    for(let i = 0; i < number; i++){
        const randomLetter = String.fromCharCode(0|Math.random()*26+97)
        resultArr.push(randomLetter);
    }
    return resultArr;
}
function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function passwordGenerator(){
    const passwordLength = setInput("Enter password length");
    const specialCharacters = setInput("How many characters ?");
    const numbers = setInput("How many numbers ?");
    //sum of special characters and numbers should not exceed to password length
    //if charachters+numbers > password length call function again 
    if(specialCharacters+numbers >= passwordLength){
        return passwordGenerator();
    }
    const specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '<', '>', ',', '.', '?', '/', '|', '\\', '~'];
    const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const randomCharacters = generateRandom(specialCharacters,specialCharactersArray);
    const randomNumbers = generateRandom(numbers,numbersArray); 
    const randomLetters = genereteRandomLetter(passwordLength-(specialCharacters+numbers));
    return shuffle([...randomNumbers,...randomLetters,...randomCharacters]).join('');
};
passwordGenerator();