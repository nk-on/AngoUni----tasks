function paintCalculator(){
    const width = Number(prompt('Enter width'));
    const length = Number(prompt('Enter length'));
    const area = width*length;
    const gallon = Math.floor(area/350)+1;
    return gallon
};
paintCalculator();