import React from "react";
import ContactPerson from "./ContactPerson";

const Contacts = ({ persons, searchTerm, handleDelete }) => {
  const contacts = () =>
    persons
      .filter(person =>
        person.name.toUpperCase().includes(searchTerm.toUpperCase())
      )
      .map(person => (
          <ContactPerson 
          key={person.name} 
          name={person.name} 
          number={person.number} 
          id = {person.id}
          handleDelete={handleDelete}/>
      ));

  return contacts();
};

export default Contacts;
