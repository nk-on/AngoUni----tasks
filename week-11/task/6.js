class Temperature{
    #celsius = 0;
    get showTemperature(){
        return this.#celsius;
    };
    set toCelsius(fahrenheit){
        this.#celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
    }
};
const temp = new Temperature();
console.log(temp.showTemperature);
temp.toCelsius = 45;