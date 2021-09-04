const Api = `65d82422c64c4ee593064bc4d4d6441a&units=metric`;
const myFunction = () => {
    const city = document.getElementById('textinput');
    const vcity = city.value;


    // clear data
    city.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${vcity}&appid=${Api}`;



    fetch(url)
        .then(res => res.json())
        .then(data => displayresult(data));

}

const setinnertext = (id, text) => {
    document.getElementById(id).innerText = text;

}

const displayresult = temparature => {

    //   another way
    //     document.getElementById('Rcity').innerText = temparature.name;
    //     document.getElementById('tempa').innerText = temparature.main.temp;


    setinnertext('Rcity', temparature.name);
    setinnertext('tempa', temparature.main.temp);
    setinnertext('tempas', temparature.main.feels_like);
    setinnertext('clouds', temparature.weather[0].main);

    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgicon = document.getElementById('weather-icon');
    imgicon.setAttribute('src', url);






    console.log(temparature);
}