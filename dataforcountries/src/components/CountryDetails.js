import React from "react";

const countryDetails = ({ country }) => {
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

export default countryDetails;
