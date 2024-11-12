export default class UserLocation {
  constructor() {
    this.baseURL = 'http://ip-api.com/json';
  }

  async getLocation() {
    try {
      const response = await fetch(this.baseURL);

      if (!response.ok) 
        throw new Error('The URL is invalid or incorrect!');

      const data = await response.json();
      return data;
    } catch (error) {
      return error.message;
    }
  }

  async getCity() {
    const data = await this.getLocation();
    return data.city || 'City not found';
  }

  async getLat() {
    const data = await this.getLocation();
    return data.lat || 'Latitude not found';
  }

  async getLon() {
    const data = await this.getLocation();
    return data.lon || 'Longitude not found';
  }
}
