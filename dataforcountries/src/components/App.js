import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryDetails from "./CountryDetails";
import DisplayCountries from "./DisplayCountries";

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

  const handleClick = (e, country) => {
    console.log("country", country);
    // return countryDetails(country);
  };

  const filteredCountries = countries.filter(country =>
    country.name.toUpperCase().includes(searchTerm.toLocaleUpperCase())
  );

  if (filteredCountries.length === 1) {
    return (
      <div>
        Search countries: <input value={searchTerm} onChange={handleSearch} />
        <CountryDetails country={filteredCountries[0]} />
      </div>
    );
  } else {
    return (
      <div>
        Search countries: <input value={searchTerm} onChange={handleSearch} />
        <DisplayCountries
          filteredCountries={filteredCountries}
          handleClick={handleClick}
        />
      </div>
    );
  }
};

export default App;
