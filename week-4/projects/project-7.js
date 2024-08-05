function makingFaces(){
    const obj = {
        ':)':'🙂',
        ':(':'🙁',
    };
    let str = prompt("Enter Sentence");
    let emoji = '';
    for(let i = 0; i < str.length; i++){
        let sym = str[i];
        if(sym === ':' || sym === ')' || sym === '('){
            emoji +=sym;
        };
        if(obj[emoji] && str.includes(emoji)){
            str = str.replace(emoji,obj[emoji]);
            emoji = '';
        }
    };
    return str;
};
makingFaces();