// https://api.openweathermap.org/data/2.5/weather?q=%7Bcity%20&appid=fae8ba44c6d3d2a25af773342eb681ef


// let heute = new Date();
// let monat = heute.getMonth();
// console.log(monat + 1);   // liefert 0 - 11
// let jahr = heute.getFullYear();
// console.log(jahr);// YYYY (startet nicht bei 0)
// let datum = heute.getDate();
// console.log(datum);     // liefert 1 - 31
// let stu = heute.getHours();
// let min = heute.getMinutes();

// let sec = heute.getSeconds();
// console.log(sec);
// let uhr = stu + ':' + min + ',' + sec;
// console.log(uhr);
// let zeit = new Date(Date.UTC(jahr, monat, datum, stu, min, sec));
// // console.log(zeit.toLocaleTimeString('US', {

// // }));
// console.log(zeit.toLocaleTimeString('en-GB'));
let newdate1;
let newdate2;
let stadt;
let w;
let out;
let temp;
let time;
let wind;
let cloud;
let press;
let hum;
let sunR;
let sunS;
let geo;
let NewTemp;
let NewTempp;

function as(event) {
    console.log(1);
    if (event.type == "keydown") {
console.log(2);
        if (event.keyCode == 13) {
            console.log(3);
            event.preventDefault();
            asdf(event);
        }
    }

}



function asdf(event) {
    event.preventDefault();
    oke()
    stadt = document.getElementById('txt').value;


    out = document.getElementById('out');
    w = document.getElementById('w');
    temp = document.getElementById('temp');
    time = document.getElementById('time');
    wind = document.getElementById('wind');
    cloud = document.getElementById('cloud');
    press = document.getElementById('press');
    hum = document.getElementById('hum');
    sunR = document.getElementById('sunR');
    sunS = document.getElementById('sunS');
    geo = document.getElementById('geo');


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${stadt}&appid=fae8ba44c6d3d2a25af773342eb681ef`)
        .then((response) => response.json())
        .then((data) => {
            let sinRise = data.sys.sunrise;
            let sunSet = data.sys.sunset;


            let newDate = new Date(
                sinRise * 1000);
            let newDatee = new Date(
                sunSet * 1000);
            let localeTime = new Date().getTime();
            let date = new Date(localeTime - 3600 * 1000 + data.timezone * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();
            let seconds = "0" + date.getSeconds();
            let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            console.log(data);
            newdate1 = newDate.toLocaleTimeString(data.timezone);
            newdate2 = newDatee.toLocaleTimeString(data.timezone);
            console.log(newdate1);
            console.log(newdate2);
            //  out.innerHTML= data.weather.icon
            //-274.15
            NewTemp = data.main.temp - 274.15;
            NewTempp = NewTemp.toFixed(1);
            out.innerHTML = data.name + '<br>' + data.sys.country;
            w.innerHTML = data.weather[0].description;
            temp.innerHTML = NewTempp + 'C°';
            time.innerHTML = formattedTime;
            wind.innerHTML = data.wind.speed + 'm/s' + '--' + data.wind.deg+'deg??';
            cloud.innerHTML = data.clouds.all + '%';
            press.innerHTML = data.main.pressure + 'hpa';
            hum.innerHTML = data.main.humidity + '%';
            sunR.innerHTML = newdate1;
            sunS.innerHTML = newdate2;
            geo.innerHTML = '[' + data.coord.lat + '//-' + data.coord.lon + ']';


        
        });

}

function oke(){
    let AaA = document.getElementById('waw')
    AaA.classList.add('z')
    AaA.classList.remove('one')
    let fofo = document.getElementById('fofo')
    fofo.style.display = 'none'
  let dsd = document.getElementById('pp')
  dsd.classList.remove('pp')
dsd.classList.add('jhgf')
}
function back(){
    let AaA = document.getElementById('waw')
    AaA.classList.remove('z')
    AaA.classList.add('one')
    let fofo = document.getElementById('fofo')
    fofo.style.display = 'block'
  let dsd = document.getElementById('pp')
  dsd.classList.add('pp')
dsd.classList.remove('jhgf')
}