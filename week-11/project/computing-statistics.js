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
function findMin(arr){
    let min = Infinity;
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        if(element < min){
            min = element;
        };
    };
    return min;
};
function calculateAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        sum+=element;
    };
    return  Number((sum/arr.length).toFixed(3));
}
function calculateStandardDeviation(arr){
    const average = calculateAverage(arr);
    const numberMinusAverage = [];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        numberMinusAverage.push((average-element)**2);
    };
    averageStandart = calculateAverage(numberMinusAverage);
    return Math.sqrt(averageStandart);
}
function computingStatistics(){
    let input = prompt("Enter response time in milisecond");
    const responseTimes = [];
    while(input !== 'done'){
        input = prompt("Enter response time in milisecond");
        if(input !== 'done'){
            responseTimes.push(Number(input));
        };
    };
    const max = findMax(responseTimes);
    const min  = findMin(responseTimes);
    const avarage = calculateAverage(responseTimes);
    const standardDeviationArr = calculateStandardDeviation(responseTimes)
    return {max,min,avarage,standardDeviationArr}
};
computingStatistics();