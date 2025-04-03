import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState([]);

  function handleSaveNote(note) {
    setNotes([note, ...notes]);
  }

  function handleDeleteNote(index) {
    // console.log("Deleted" + index);
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  }
  function handleEditNote(index) {
    console.log("Edit " + index);
    setEdit(true);
    setEditNote(notes[index]);

    // setNotes([editNote, ...notes]);
  }
  console.log(edit, editNote);
  return (
    <div className="min-h-screen flex bg-gray-200 items-center justify-center flex-col m-4 gap-4">
      <h1 className="text-4xl font-bold mb-4">Notes App</h1>
      <NoteForm
        onSave={handleSaveNote}
        editForm={edit}
        onEditForm={editNote}
        setEdit={setEdit}
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
