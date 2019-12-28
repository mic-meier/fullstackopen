import React, { useState, useEffect } from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ErrorNotification from "./ErrorNotification";
import Notification from "./Notification";
import contactService from "../services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    contactService
      .getContacts()
      .then(initialContacts => setPersons(initialContacts));
  }, []);

  const addContact = event => {
    event.preventDefault();

    if (persons.map(person => person.name).includes(newName)) {
      if (
        window.confirm(
          `${newName} is already added to the phone book. Replace the phone number?`
        )
      ) {
        const updateContact = { name: newName, number: newNumber };
        const id = persons.filter(person => person.name.includes(newName))[0]
          .id;

        contactService
          .updateContact(id, updateContact)
          .then(returnedContact => {
            setPersons(
              persons.map(person =>
                person.id !== id ? person : returnedContact
              )
            );
            setNotificationMessage(`User ${newName} updated.`);
          })
          .catch(() => {
            setErrorMessage(
              `Contact ${newName} was already deleted on the server.`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 2000);
          });

        setTimeout(() => {
          setNotificationMessage(null);
        }, 2000);
      }
    } else {
      const newContact = { name: newName, number: newNumber };

      contactService
        .createContact(newContact)
        .then(returnedContact => setPersons(persons.concat(returnedContact)));
      setNewName("");
      setNewNumber("");

      setNotificationMessage(`User ${newName} added.`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 2000);
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
    if (window.confirm(`Delete ${contactName} from contacts?`)) {
      contactService.deleteContact(id);
      setPersons(persons.filter(person => person.id !== id));
    }
  };

  return (
    <div>
      <h2>Phone Book</h2>
      <Notification message={notificationMessage} />
      <ErrorNotification errorMessage={errorMessage} />
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
