export default class UserLocation {
  async getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(new Error(`Geolocation error: ${error.message}`));
          }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  }

  async getCity() {
    return "City not available with navigator.geolocation";
  }

  async getLat() {
    try {
      const data = await this.getLocation();
      return data.latitude || 'Latitude not found';
    } catch (error) {
      return error.message;
    }
  }

  async getLon() {
    try {
      const data = await this.getLocation();
      return data.longitude || 'Longitude not found';
    } catch (error) {
      return error.message;
    }
  }
}
