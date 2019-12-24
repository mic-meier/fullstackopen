import React from "react";

const countryDetails = ({ country, weather }) => {
  let currentWeather;

  if (!country) {
    return null;
  }

  if (weather) {
    currentWeather = weather.current;
  }


  const languages = country.languages.map(language => (
    <li key={language.name}>{language.name}</li>
  ));

  return (
    <div>
      <h1>{country.name}</h1>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h2>Languages</h2>
      <ul>{languages}</ul>
      <img src={country.flag} alt={`Flag of ${country.name}`} width="300" />
      <h2>Weather in {country.capital}</h2>
      <div>
        <strong>Temperature: </strong>
        {currentWeather.temperature} Celsius
      </div>
      <img src={currentWeather.weather_icons[0]} alt="" />
      <div>
        <strong>Wind: </strong>
        {currentWeather.wind_speed} kph direction {currentWeather.wind_dir}
      </div>
    </div>
  );
};

export default countryDetails;
