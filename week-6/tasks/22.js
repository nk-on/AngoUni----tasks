function isPangram(string){
    const letters = new Set();
    string = string.replace(/\s/g, "").split('');
    const result = string.reduce((res,el)=>{
        if(!letters.has(el)){
            letters.add(el);
        };
        if(letters.size >= 26){
            res = true;
        };
        return res;
    },false);
    return result;
};