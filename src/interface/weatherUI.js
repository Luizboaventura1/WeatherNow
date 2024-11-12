import weatherApi from "../services/weatherApi"
import loader from "../loader"

let currentTemperature = document.getElementById('currentTemperature')
let currentLocation = document.getElementById('currentLocation')
let currentWeatherImage = document.getElementById('currentWeatherImage')
let humidity = document.getElementById('humidity')
let windSpeed = document.getElementById('windSpeed')
let precipitation = document.getElementById('precipitation')

const getTemperature = async () => {
  await weatherApi.getWeather()
  .then((data) => {
    loader.close()
    const temperature = data.current.temp_c
    const city = data.location.name
    const region = data.location.region
    const weatherIcon = data.current.condition.icon

    humidity.innerHTML = `Humidity: ${data.current.humidity}%`
    windSpeed.innerHTML = `Wind: ${parseInt(data.current.wind_kph).toFixed(0)} km/h`
    precipitation.innerHTML = `Rain: ${data.current.precip_mm}mm`

    currentTemperature.innerHTML = parseInt(temperature).toFixed(0)
    currentLocation.innerHTML = `${city} - ${region}`
    currentWeatherImage.src = weatherIcon
  })
}

getTemperature()