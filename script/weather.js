document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'fd32878ab84b04477b285afd47a9d2d6'; // Replace with your OpenWeatherMap API key
    const city = 'TAMILNADU'; // Replace with the desired city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const weatherInfo = document.getElementById('weather-info');
  
    // Fetch weather data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;
  
        // Update the content with weather information
        weatherInfo.innerHTML = `
        <h1>${temperature}°C</h1>
        <p>${description}</p>
        <p><i class='bx bx-water' ></i> ${humidity}%&emsp;&emsp;<i class="ri-windy-line"></i> ${windSpeed} m/s</p>
      `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<h1>Error loading weather data</h1>';
      });
  });
  