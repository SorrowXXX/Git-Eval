import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewNote from "./NewNote";
import "./Note.css";

const Note = ({ onSubmit }) => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [showNewNoteForm, setShowNewNoteForm] = useState(false);

  const fetchNote = useCallback(async () => {
    try {
      const response = await fetch(`/notes/${id}`);
      const result = await response.json();
      setNote(result);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch note");
    }
  }, [id]);

  useEffect(() => {
    fetchNote();
  }, [fetchNote]);

  const handleDelete = async () => {
    try {
      const updatedNote = { ...note, deleted: true };
      const response = await fetch(`/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNote),
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete note");
      }
  
      alert("Note deleted successfully!");
      onSubmit();
      fetchNote();
    } catch (error) {
      console.error(error);
      alert("Failed to delete note");
    }
  };
  
  const handleDeletePermanently = async () => {
    try {
      const response = await fetch(`/notes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete note permanently");
      }

      alert("Note deleted permanently!");
      onSubmit();
      fetchNote();
    } catch (error) {
      console.error(error);
      alert("Failed to delete note permanently");
    }
  };

  const handleRestore = async () => {
    try {
      const response = await fetch(`/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...note, deleted: false }),
      });

      if (!response.ok) {
        throw new Error("Failed to restore note");
      }

      alert("Note restored successfully!");
      onSubmit();
      fetchNote();
    } catch (error) {
      console.error(error);
      alert("Failed to restore note");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (!response.ok) {
        throw new Error("Failed to save note");
      }

      alert("Note saved successfully!");
      onSubmit();
      fetchNote();
    } catch (error) {
      console.error(error);
      alert("Failed to save note");
    }
  };

  const handleNewNote = async (newNote) => {
    setShowNewNoteForm(false);

    try {
      const response = await fetch("/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) {
        throw new Error("Failed to create note");
      }

      const result = await response.json();
      setNote(result);
      alert("New note created successfully!");
      onSubmit();
      fetchNote();
    } catch (error) {
      console.error(error);
      alert("Failed to create note");
    }
  };

  if (note && note.deleted) {
    return (
      <div className="Note-deleted">
        <p>This note has been deleted.</p>
        <button className="Button" type="button" onClick={handleRestore}>
          Restore
        </button>
        <button className="Button
            " type="button" onClick={handleDeletePermanently}>
            Delete Permanently
        </button>
      </div>
          );
        }

  if (showNewNoteForm) {
    return <NewNote onNewNote={handleNewNote} />;
  }
  return (
  <div>
    <button className="Button" type="button" onClick={() => setShowNewNoteForm(true)}>
    Ajouter une note
    </button>
  {note && (
    <form className="Form" onSubmit={handleSubmit}>
    <input
      className="Note-editable Note-title"
      type="text"
      value={note ? note.title : ""}
      onChange={(event) => {
        setNote({ ...note, title: event.target.value });
    }}
    />
    <textarea
      className="Note-editable Note-content"
      value={note ? note.content : ""}
      onChange={(event) => {
        setNote({ ...note, content: event.target.value });
      }}
    />
    <div className="Note-actions">
      <button className="Button" type="submit">
        Enregistrer
      </button>
      <button className="Button" type="button" onClick={handleDelete}>
        Supprimer
      </button>
    </div>
    </form>
  )}
  </div>
  );
};

export default Note;