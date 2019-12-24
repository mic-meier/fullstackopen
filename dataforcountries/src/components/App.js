import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryDetails from "./CountryDetails";
import DisplayCountries from "./DisplayCountries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [detailedCountry, setDetailedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => setCountries(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${
          process.env.REACT_APP_API_KEY
        }&query=${detailedCountry ? detailedCountry.capital : null}`
      )
      .then(res => setWeather(res.data));
  }, [detailedCountry]);

  const handleSearch = e => {
    const filtered = countries.filter(country =>
      country.name.toUpperCase().includes(e.target.value.toLocaleUpperCase())
    );
    if (filtered.length === 1) {
      setDetailedCountry(filtered[0]);
    } else {
      setDetailedCountry(null);
    }
    setSearchTerm(e.target.value);
  };

  const handleClick = (e, country) => {
    console.log("country", country);
    setDetailedCountry(country);
  };

  const filteredCountries = countries.filter(country =>
    country.name.toUpperCase().includes(searchTerm.toLocaleUpperCase())
  );

  return (
    <div>
      Search countries: <input value={searchTerm} onChange={handleSearch} />
      <div>
        <CountryDetails country={detailedCountry} weather={weather} />
        <DisplayCountries
          filteredCountries={filteredCountries}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default App;
