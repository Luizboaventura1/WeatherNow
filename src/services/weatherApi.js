import UserLocation from "./getUserLocation.js";

class weatherApi {
  #apiKey;

  constructor() {
    this.#apiKey = "272ccf34287b43d1a29173227241211";
  }

  async getLocation() {
    const userLocation = new UserLocation();

    const lon = await userLocation.getLon();
    const lat = await userLocation.getLat();

    return `https://api.weatherapi.com/v1/current.json?key=${
      this.#apiKey
    }&q=${lat},${lon}`;
  }

  async getWeather() {
    try {
      const getBaseUrl = await this.getLocation();
      const response = await fetch(getBaseUrl);

      if (!response.ok) throw new Error("The URL is invalid");

      return await response.json();
    } catch (error) {
      return error.message;
    }
  }
}
export default new weatherApi();
