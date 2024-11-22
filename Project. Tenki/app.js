const apiKey = "dfb7d734a109aa8ae51bf635c25996bd";
const cities = ["Tokyo", "Osaka", "Fukuoka", "Nagoya", "Sapporo", "Okinawa"];
const cityElements = cities.map(city => document.querySelector(`.${city.toLowerCase()}-temp`));

async function fetchTemperature(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    const kelvinTemp = data.main.temp;
    const celsiusTemp = (kelvinTemp - 273.15).toFixed(1);
    return celsiusTemp;
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    return null;
  }
}

async function displayTemperatures() {
  const promises = cities.map(fetchTemperature);
  const temperatures = await Promise.all(promises);

  temperatures.forEach((temp, index) => {
    if (temp !== null) {
      cityElements[index].innerText = `${temp}°C`;
    } else {
      cityElements[index].innerText = "Error";
    }
  });
}

displayTemperatures();