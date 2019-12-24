import React from "react";

const ContactPerson = ({ name, number, id, handleDelete }) => (
  <div>
    {name} {number} <button onClick={() => handleDelete(id, name)}>Delete</button>
  </div>
);

export default ContactPerson;
