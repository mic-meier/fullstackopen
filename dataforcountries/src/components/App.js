import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => setCountries(res.data));
  }, []);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.toUpperCase().includes(searchTerm.toLocaleUpperCase())
  );

  const countryDetails = () => {
    const country = filteredCountries[0];

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
      </div>
    );
  };

  const displayCountries = () => {
    if (filteredCountries.length === 1) {
      return countryDetails();
    } else if (filteredCountries.length <= 10) {
      return filteredCountries.map(country => (
        <div key={country.alpha3Code}>{country.name}</div>
      ));
    } else {
      return <div>Too many countries to display</div>;
    }
  };

  return (
    <div>
      Search countries: <input value={searchTerm} onChange={handleSearch} />
      {displayCountries()}
    </div>
  );
};

export default App;
