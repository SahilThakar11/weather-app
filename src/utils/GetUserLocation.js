export const getUserLocation = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const cityName = await fetchCityName(latitude, longitude);
          resolve(cityName);
        },
        (error) => {
          reject("Permission denied or location unavailable.");
        }
      );
    } else {
      reject("Geolocation is not supported by your browser.");
    }
  });
};

const fetchCityName = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
  );
  const data = await response.json();
  return data.city;
};
