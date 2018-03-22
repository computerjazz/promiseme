const axios = require('axios');

async function consoleCityCoordinates(url) {
  try {
    const geoCodingResponse = await axios.get(url);
    console.log(
      `City: ${geoCodingResponse.data.results[0].formatted_address} -`,
      `Latitude: ${geoCodingResponse.data.results[0].geometry.location.lat} -`,
      `Longitude: ${geoCodingResponse.data.results[0].geometry.location.lng}`,
    );
  } catch (error) {
    console.log(error);
  }
}

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=Florence';
consoleCityCoordinates(url);
