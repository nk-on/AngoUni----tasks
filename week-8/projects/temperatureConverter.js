function validation(temperature,unit,obj){
    if(isNaN(temperature)){
        alert('Enter valid temperature');
        return true;
    }
    if(!obj[unit]){
        alert('enter valid unit');
        return true;
    };
}
function temperatureConverter(){
    const temperature= Number(prompt("Enter temperature"));
    const unit = prompt("Enter unit").toLowerCase();
    const obj = {
        farenheit:(temperature-32)*5/9,
        celsius:(temperature*(9/5))+32,
    };
    if(validation(temperature,unit,obj)) return;
    return obj[unit].toFixed(2);
};
temperatureConverter();