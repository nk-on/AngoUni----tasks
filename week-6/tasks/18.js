function checkEven(arr){
    return arr.some((element)=> element%2 === 1)
};
console.log(checkEven([2,4,5,9]))