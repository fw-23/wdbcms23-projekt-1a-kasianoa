console.log("weatherAPI.js loaded")
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;



        console.log("weatherAPI.js: GEOLOCATION ON")
        const apiKey = localStorage.getItem('weatherKey');
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


        const temperatureElement = document.getElementById('temp');
        const descriptionElement = document.getElementById('description');
        const iconElement = document.getElementById('icon');

        if (apiKey === "") {
            temperatureElement.innerHTML = "You're missing an API key!"
            iconElement.innerHTML ='<i class="fa-solid fa-face-sad-tear"></i>' 
        } else {
            fetchWeather();
        }

        async function fetchWeather() {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const temp = Math.round(data.main.temp);
                temperatureElement.innerHTML = `IT IS CURRENTLY ${temp}&deg;C IN ${data.name}`;

                switch (data.weather[0].main) {
                    case 'Clear':
                        iconElement.innerHTML = '<i class="fas fa-sun"></i>';
                        descriptionElement.innerHTML = 'It is clear.';
                        break;
                    case 'Clouds':
                        iconElement.innerHTML = '<i class="fas fa-cloud"></i>';
                        descriptionElement.innerHTML = 'It is cloudy.';
                        break;
                    case 'Rain':
                        iconElement.innerHTML = '<i class="fas fa-cloud-rain"></i>';
                        descriptionElement.innerHTML = 'It is raining.';
                        break;
                    case 'Snow':
                        iconElement.innerHTML = '<i class="fas fa-snowflake"></i>';
                        descriptionElement.innerHTML = 'It is snowing.';
                        break;
                    case 'Thunderstorm':
                        iconElement.innerHTML = '<i class="fas fa-bolt"></i>';
                        descriptionElement.innerHTML = 'It is thunderstorming.';
                        break;
                    case 'Drizzle':
                        iconElement.innerHTML = '<i class="fas fa-cloud-showers-heavy"></i>';
                        descriptionElement.innerHTML = 'It is drizzling.';
                        break;
                    case 'Mist':
                        iconElement.innerHTML = '<i class="fas fa-smog"></i>';
                        descriptionElement.innerHTML = 'It is misty.';
                        break;
                    case 'Smoke':
                        iconElement.innerHTML = '<i class="fas fa-smog"></i>';
                        descriptionElement.innerHTML = 'It is smoky.';
                        break;
                    case 'Haze':
                        iconElement.innerHTML = '<i class="fas fa-smog"></i>';
                        descriptionElement.innerHTML = 'It is hazy.';
                        break;
                    case 'Dust':
                        iconElement.innerHTML = '<i class="fas fa-smog"></i>';
                        descriptionElement.innerHTML = 'It is dusty.';
                        break;
                    case 'Fog':
                        iconElement.innerHTML = '<i class="fas fa-smog"></i>';
                        descriptionElement.innerHTML = 'It is foggy.';
                        break;
                }
            } catch (error) {
                temperatureElement.innerHTML = "You're missing an API key!"
                iconElement.innerHTML ='<i class="fa-solid fa-face-sad-tear"></i>' 
            }
        }
        fetchWeather();
    });

} else {
    alert("Geolocation is not supported by this browser.");
}

