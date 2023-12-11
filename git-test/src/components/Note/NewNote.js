import React, { useState } from "react";

const NewNote = ({ onNewNote }) => {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewNote(newNote);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="Note-editable Note-title"
        type="text"
        value={newNote.title}
        onChange={(event) => {
          setNewNote({ ...newNote, title: event.target.value });
        }}
      />
      <textarea
        className="Note-editable Note-content"
        value={newNote.content}
        onChange={(event) => {
          setNewNote({ ...newNote, content: event.target.value });
        }}
      />
      <div className="Note-actions">
        <button className="Button" type="submit">
          Enregistrer
        </button>
      </div>
    </form>
  );
};

export default NewNote;
