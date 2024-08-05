function countBs(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        const sym = str[i];
        if(sym === 'B'){
            count++;
        };
    };
    return count;
};