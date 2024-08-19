function excludeMinors(number){
    return number >= 18;
};
let arr = [43,18,19,25,65,14,98];
arr.filter(excludeMinors);