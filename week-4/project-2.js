function countCharacters(){
    let str = prompt('Enter strings');
    //Eliminating whitespace from string in order to correctly count characters in Sentences 
    str = str.replace(/\s/g, "");
    const characterCount = str.length;
    return `You entered ${characterCount} characters`;
};
countCharacters();