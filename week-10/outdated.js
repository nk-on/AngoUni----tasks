function invalidDate(input){
    if(input === 'NaN-NaN-NaN'){
        return true;
    };
}
function outdated(){
    const date = prompt('Enter date');
    const year = new Date(date).getYear() + 1900;
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    const result = `${year}-${month}-${day}`;
    if(invalidDate(result)){
        outdated();
        return;
    }
    return result;
};
outdated();