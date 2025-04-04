import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  function handleSaveNote(note) {
    setNotes([note, ...notes]);
  }

  // New function: update the note at the given index
  function handleUpdateNote(updatedNote, index) {
    setNotes(notes.map((note, i) => (i === index ? updatedNote : note)));
  }

  function handleDeleteNote(index) {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  }

  function handleEditNote(index) {
    console.log("Edit " + index);
    setEdit(true);
    setEditNote(notes[index]);
    setEditIndex(index);
  }

  return (
    <div className="min-h-screen flex bg-gray-200 items-center justify-center flex-col m-4 gap-4">
      <h1 className="text-4xl font-bold mb-4">Notes App</h1>
      <NoteForm
        onSave={handleSaveNote}
        updateNote={handleUpdateNote} // Pass updateNote for editing
        editForm={edit}
        onEditForm={editNote}
        setEdit={setEdit}
        onIndex={editIndex} // Provide the index of the note to update
      />
      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />
    </div>
  );
};

export default App;
