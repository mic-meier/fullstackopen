import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "666-66-66" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const contacts = () =>
    persons.map(person => (
      <div key={person.name}>
        {person.name} {person.phoneNumber}
      </div>
    ));

  const addContact = event => {
    event.preventDefault();

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to the phone book`);
    } else {
      setPersons(persons.concat({ name: newName, phoneNumber: newNumber }));
      setNewName("");
      setNewNumber("")
    }
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
