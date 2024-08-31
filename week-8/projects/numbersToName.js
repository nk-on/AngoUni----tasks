function numbersToName(){
    const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
    ];
    const number = Number(prompt("Enter number"));
    if(number < 1 || number > 12){
        alert("Enter valid num");
        return;
    };
    return months[number-1];
};
console.log(numbersToName());