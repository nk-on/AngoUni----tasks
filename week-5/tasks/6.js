function Includes(arr,target){
    let includes = false;
    for(let i = 0 ; i < arr.length ; i++){
        const element = arr[i];
        if(element === target) includes = true;
    };
    return includes;
};