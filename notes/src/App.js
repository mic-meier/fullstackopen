import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = props => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then(res => {
      console.log("promise fulfilled");
      setNotes(res.data);
    });
  }, []);
  console.log("render", notes.length, "notes")

  const rows = () => notes.map(note => <Note key={note.id} note={note} />);

  const handleNoteChange = event => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
