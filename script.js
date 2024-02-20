const API='4b3d0935edace51bdee3d4b3c12b57b5';
const searchTemp=()=>{
    const city=document.getElementById('city').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayTemp(data);
    });
}
const setInnerText=(id,text)=>{
    document.getElementById(id).innerText=text;
}
const displayTemp=temp=>{
    setInnerText('city-name',temp.name);
    setInnerText('temperature',temp.main.temp);
    setInnerText('condition',temp.weather[0].main);

    const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
