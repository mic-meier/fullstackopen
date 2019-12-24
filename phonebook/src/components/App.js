import React, { useState, useEffect } from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import contactService from "../services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    contactService
      .getContacts()
      .then(initialContacts => setPersons(initialContacts));
  }, []);

  const addContact = event => {
    event.preventDefault();

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to the phone book`);
    } else {
      const newContact = { name: newName, number: newNumber };

      contactService
        .createContact(newContact)
        .then(returnedContact => setPersons(persons.concat(returnedContact)));
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

  const handleDelete = (id, contactName) => {
    if (window.confirm(contactName)) {
      contactService.deleteContact(id).then(res => console.log("res", res));
      setPersons(persons.filter(person => person.id !== id));
    }
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
      <Contacts
        persons={persons}
        searchTerm={searchTerm}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
