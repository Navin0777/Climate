
// Get the current weather data from the OpenWeatherMap API
fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
	.then(response => response.json())
	.then(data => {
		// Get the current temperature, humidity, wind speed, and weather condition
		const temperature = data.main.temp;
		const humidity = data.main.humidity;
		const windSpeed = data.wind.speed;
		const weatherCondition = data.weather[0].description;
		
		// Display the current weather data on the page
		document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
		document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
		document.getElementById('wind-speed').innerText = `Wind Speed: ${windSpeed} km/h`;
		document.getElementById('weather-condition').innerText = `Weather Condition: ${weatherCondition}`;
	})
	.catch(error => console.error(error));
