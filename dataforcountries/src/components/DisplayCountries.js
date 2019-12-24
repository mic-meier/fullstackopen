import React from "react";

const DisplayCountries = ({ filteredCountries, handleClick }) => {
  if (filteredCountries.length <= 10 && filteredCountries.length !== 1) {
    return filteredCountries.map(country => (
      <div key={country.alpha3Code}>
        {country.name}{" "}
        <button onClick={e => handleClick(e, country)}>show</button>
      </div>
    ));
  } else if (filteredCountries.length > 10) {
    return <div>Too many countries to display</div>;
  } else {
    return null
  }
};

export default DisplayCountries;
