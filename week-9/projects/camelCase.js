function checkUpperCase(letter) {
    return letter === letter.toUpperCase();
}
function camelCase() {
    let input = prompt('enter variable name');
    input = input.split('');
    const result = input.reduce( (result, letter) => {
        const letterIsUpperCase = checkUpperCase(letter);
        return letterIsUpperCase ? result+=`_${letter.toLowerCase()}`:result+=letter;
    }
    , '')
    return result;
};
camelCase();