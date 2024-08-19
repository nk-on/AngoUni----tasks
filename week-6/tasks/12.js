function sortAccordingToLength(users){
    return users.sort((a,b)=>a.length - b.length);
};
console.log(sortAccordingToLength(["Alex",'johnnn',"Bob"]))