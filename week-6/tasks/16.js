function checkEvery(arr){
    return arr.every((el)=> el > 0);
};
function checkSome(arr){
    return arr.some((el)=> el > 0);
}
checkEvery([4,5,2,3]);
checkSome([-4,-1,3,-6])