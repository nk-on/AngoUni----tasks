async function grabWeather(){
    const key = '34aa6c5bd9d1af420f46e7d09d668950';
    const city = 'London';
    const data = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=1&appid=${key}`);
    const res = await data.json();
    console.log(res);
};
grabWeather();