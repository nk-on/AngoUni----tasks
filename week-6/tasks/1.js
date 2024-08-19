function excludeOdd(number){
    return number%2 === 0;
}
let arr = [4,5,9,10,11];
arr = arr.filter(excludeOdd);