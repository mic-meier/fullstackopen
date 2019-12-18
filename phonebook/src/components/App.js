import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const contacts = () =>
    persons
      .filter(person =>
        person.name.toUpperCase().includes(searchTerm.toUpperCase())
      )
      .map(person => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ));

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
      <div>
        Filter: <input value={searchTerm} onChange={handleSearch} />
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {contacts()}
    </div>
  );
};

export default App;
