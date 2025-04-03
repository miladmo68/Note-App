import React from "react";

const NoteItem = ({ noteItem, onDelete, index, onEdit }) => {
  // console.log(noteItem);
  return (
    <div className="flex flex-col bg-gray-50 p-4 mb-10 w-50 h-full">
      {/* Title */}
      <div className="font-bold text-lg pb-1">{noteItem.title}</div>

      {/* Content */}
      <div className="flex-grow pb-4">{noteItem.content}</div>

      {/* Buttons Section */}
      <div className="flex flex-col items-end border-t-2 border-gray-300 pt-4">
        <div className="flex flex-row-reverse space-x-4 text-xs rounded gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            onClick={() => onEdit(index)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
