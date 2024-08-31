const promise = new Promise(function(resolve,reject){
    const sucsess = Math.random() < 0.5;
    sucsess ? resolve("Resolved") : reject("Rejected");
    
});
promise.then((result)=>{
    return result
}).catch((result)=>{
    return result;
});