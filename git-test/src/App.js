import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import classNames from 'classnames';
import Note from "./components/Note/Note";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const result = await response.json();
    setNotes(result);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //1 fst commit

  // 3 third commit

  // 4 fourth commit

  // 6 Six commit 

  // 7 sept commit

  //const filteredNotes = notes
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <aside className="Side">
        <div className="Search-bar">
          <form>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </form>
        </div>
        {filteredNotes &&
          filteredNotes.map((note) => (
            <Link to={`/notes/${note.id}`} className= {classNames('Note-link', {'Note-link-deleted': note.deleted})} key={note.id}>
              {note.title}
            </Link>
          ))}
      </aside>
      <main className="Main">
        <Routes>
          <Route path="/notes/:id" element ={<Note onSubmit={fetchNotes}/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
