import UserLocation from "../services/getUserLocation.js";

let errorModal = document.getElementById("errorModal");

const timeout = setInterval(async () => {
  const userLocation = new UserLocation();

  const lon = await userLocation.getLon();
  const lat = await userLocation.getLat();

  if (typeof lon === "number" && typeof lat === "number") {
    errorModal.style.display = "none";
    clearInterval(timeout)
  } else {
    errorModal.style.display = "flex";
  }
}, 1000);
