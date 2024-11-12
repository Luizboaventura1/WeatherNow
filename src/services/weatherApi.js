import UserLocation from "./getUserLocation.js";

class weatherApi {
  constructor() {
    this.baseUrl = "";
    this.apiKey = "272ccf34287b43d1a29173227241211"
  }

  async getLocation() {
    const userLocation = new UserLocation();

    const lon = await userLocation.getLon();
    const lat = await userLocation.getLat();

    this.baseUrl = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}`;

    return this.baseUrl;
  }

  async getWeather() {
    try {
/*       const getBaseUrl = await this.getLocation()
      const response = await fetch(getBaseUrl);

      if (!response.ok) throw new Error("The URL is invalid or incorrect!"); */

      //return await response.json();

      return {
        "location": {
            "name": "Joao Pessoa",
            "region": "Paraiba",
            "country": "Brazil",
            "lat": -7.117,
            "lon": -34.867,
            "tz_id": "America/Fortaleza",
            "localtime_epoch": 1731433770,
            "localtime": "2024-11-12 14:49"
        },
        "current": {
            "last_updated_epoch": 1731433500,
            "last_updated": "2024-11-12 14:45",
            "temp_c": 30.3,
            "temp_f": 86.5,
            "is_day": 1,
            "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
            },
            "wind_mph": 12.1,
            "wind_kph": 19.4,
            "wind_degree": 110,
            "wind_dir": "ESE",
            "pressure_mb": 1010.0,
            "pressure_in": 29.83,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 62,
            "cloud": 75,
            "feelslike_c": 32.6,
            "feelslike_f": 90.8,
            "windchill_c": 28.8,
            "windchill_f": 83.8,
            "heatindex_c": 30.2,
            "heatindex_f": 86.3,
            "dewpoint_c": 18.6,
            "dewpoint_f": 65.5,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "uv": 6.9,
            "gust_mph": 13.9,
            "gust_kph": 22.4
        }
    }
    } catch (error) {
      return error.message;
    }
  }
}

export default new weatherApi()
