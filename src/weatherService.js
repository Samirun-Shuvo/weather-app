  // api=https://api.openweathermap.org/data/2.5/weather?q=paris&appid=dfdb1dcc8650a84dffa9797d5d3ecb6b

const API_KEY = "dfdb1dcc8650a84dffa9797d5d3ecb6b";

const makeIconURL=(iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormettedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { spped },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];

  return {
    description,
    iconURL:makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    spped,
    country,
    name,
  };
};
export { getFormettedWeatherData };
