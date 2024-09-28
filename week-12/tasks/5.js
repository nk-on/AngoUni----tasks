function sum(arr){
    return arr.reduce((acc,element)=>{
        return acc+=element;
    },0);
};
function findMax(arr){
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        if(element > max){
            max = element;
        };
    };
    return max;
}
function largestSubArray(arr){
    const sumArray = [];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        sumArray.push(sum(element));
    };
    return findMax(sumArray);
};
largestSubArray([[4,3,1],[5,8,3],[4,6,10,3]])