import React, { useState, useEffect } from "react";
import axios from "axios";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(res => setPersons(res.data));
  });

  const addContact = event => {
    event.preventDefault();

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to the phone book`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Phone Book</h2>
      <Filter searchTerm={searchTerm} handleSearch={handleSearch} />
      <h2>Add a new contact</h2>
      <ContactForm
        addContact={addContact}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Contacts persons={persons} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
