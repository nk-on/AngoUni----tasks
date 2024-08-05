function isPalindrome(str){
    let wordArray = str.split('');
    let j = wordArray.length - 1;
    for(let i = 0; i < str.length; i++){
        const sym = str[i];
        if(sym === wordArray[j]){
            wordArray.pop();
        };
        j--
    };
    return !wordArray.length;
};