import React, { useEffect } from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onEdit }) => {
  // useEffect(() => {}, [onDelete]);

  return (
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {notes && notes.length > 0 ? (
        notes.map((noteItem, index) => (
          <NoteItem
            key={noteItem.index}
            index={index}
            noteItem={noteItem}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <div className="col-span-3 flex justify-center items-center">
          No notes available. Add a note to get started!
        </div>
      )}
    </div>
  );
};

export default NoteList;
