// https://api.openweathermap.org/data/2.5/weather?q=%7Bcity%20&appid=fae8ba44c6d3d2a25af773342eb681ef

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
function asdf(event) {
    event.preventDefault();
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
            let newDate = new Date(
                1669012152 * 1000);
            let newDatee = new Date(
                669044611 * 1000);
            let newdate2;
            let A
            let timezone = new Date()
            let newdate1;
            console.log(data);
            newdate1 = newDate.toLocaleTimeString(data.timezone);
             newdate2 = newDatee.toLocaleTimeString(data.timezone);
            console.log(newdate1);
            //  out.innerHTML= data.weather.icon
            //-274.15
            console.log(
          );
    A = data.sys.country
    console.log(A);
            NewTemp = data.main.temp - 273.15;
            NewTempp = NewTemp.toFixed(1);
            out.innerHTML = data.name + '<br>' + data.sys.country;
            w.innerHTML = data.weather[0].description;
            temp.innerHTML = NewTempp + 'C°';
            time.innerHTML = timezone.toLocaleString(`${A}`, {
      
            });
            wind.innerHTML = data.wind.speed+'m/s' + '/' + data.wind.deg;
            cloud.innerHTML = data.clouds.all + '%';
            press.innerHTML = data.main.pressure + 'hpa';
            hum.innerHTML = data.main.humidity + '%';
            sunR.innerHTML = newdate1;
            sunS.innerHTML = newdate2;
            geo.innerHTML = '[' + data.coord.lat + '//' + data.coord.lon + ']';
        });

}
