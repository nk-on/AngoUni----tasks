function findMax(arr){
    const result = arr.reduce((max,element)=>{
        if(element > max){
            max = element;
        };
        return max;
    },-Infinity);
    return result;
};
function findMin(arr){
    const result = arr.reduce((min,element)=>{
        if(element < min && element !== 0){
            min = element;
        };
        return min;
    },Infinity);
    return result;
}
function secondMax(arr){
    //finding largest element in array
    const maxElement = findMax(arr);
    const diffs = [];
    //subtracting every element of array to largest element and storing result in diffs array
    arr.forEach((element)=>{
        const diff = maxElement - element;
        diffs.push(diff);
    });
    /*finding index of second Max element by finding smalles element in array except zero
    because index of zero would be index of largest element */
    const secondMaxIdx = diffs.indexOf(findMin(diffs))
    return arr[secondMaxIdx];
};