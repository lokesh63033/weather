var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik =  "5a6edc9f15df1ce184fe5b90b428419d0"
function convertion(val)
{
    return ( val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
   fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}' +inputvalue.value+'&appid='+apik) 
   .then(res => res.json())

   .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var wndspeeed = data['wind']['speed']

        city.innerHTML = 'Weather of: <span>${nameval}<span>'
        temp.innerHTML = 'temperature: <span>${ convertion (temperature)}C</span>'
        description.innerHTML =' sky conditions:<span>${descrip}<span>'
        wind.innerHTML = 'wind speed: <span>${windspeed} km/h<span>'
    })

    .catch(err => alert('you entered a wrong city name'))
})