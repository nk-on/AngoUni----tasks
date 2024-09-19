function isPalindrome(str){
    if(!str.length){
      return false;
    };
    str = str.replace(/[\W_]/g, '').replace(/\s/g, '');
    str = str.toLowerCase();
    const strArray = str.split('');
    for(let i = 0; i < str.length; i++){
        const lastIndex = strArray.length - 1;
        const element = str[i];
        const lastElement = strArray[lastIndex];
        if(lastElement === element){
            strArray.pop();
        };
    };
    return !strArray.length;
};
isPalindrome("racecar")