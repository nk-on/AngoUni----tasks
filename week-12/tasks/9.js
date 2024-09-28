function commonElements(...arr){
    const arr1 = arr[0];
    const arr2 = arr[1];
    return arr1.filter((element)=>{
        return arr2.includes(element);
    });
};
console.log(commonElements([3,3,1],[3,3,9]));