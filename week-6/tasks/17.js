function checkUserAges(userAges){
    return userAges.every((element)=> element.age >= 18)
};
console.log(checkUserAges([4,7,17,20]))