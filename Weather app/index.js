const container = document.querySelector('.container');
const search = document.querySelector('.searchbar button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = docuemnt.querySelector('.not-found');


search.addEventListener('click', () => {
    const APIKey = 'a52569fdf48b832d457cc7fff46fce85';
    const city = document.querySelector('.search-box input').ariaValueMax;

    if (city === '')
            return;

    fetch('api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}')
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove(fadeIn);

            const image = document.querySelector('.weathe-box img');
            const temperature = document.querySelector('weather-box .temperature');
            const description = document.querySelector('weather-box .description');
            const humidity = document.querySelector('weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');


            switch(json.weather[0].main) {
                case 'Clear':
                    image.src = 'assets/clear.png';
                    break;
                
                case 'Rain':
                    image.src = 'assets/rain.png';
                    break;
                
                case 'Snow':
                    image.src = 'assets/snow.png';
                    break;
                
                case 'Haze':
                    image.src = 'assets/mist.png';
                    break;
                
                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';



        });

});