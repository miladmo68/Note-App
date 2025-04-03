import React, { useEffect, useState } from "react";

const NoteForm = ({ onSave, editForm, onEditForm, setEdit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() !== "" && content.trim() !== "") {
      //   console.log({title, content});
      onSave({ title, content });
      setTitle("");
      setContent("");
    }
  }

  useEffect(() => {
    if (editForm && onEditForm) {
      setTitle(editForm.title);
      setContent(editForm.content);
    }
  }, [editForm, onEditForm]);

  function handleUpdateSubmit() {
    setEdit(false);
    onSave({ title, content });
    setTitle("");
    setContent("");
  }

  // function handleSubmiteValue(e) {
  //   setTitle(e);
  // }
  return (
    <div>
      <form
        className="container bg-gray-50 mb-4 p-4 w-80"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-2"
            value={editForm ? onEditForm.title : title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            type="text"
            name="content"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-3"
            value={editForm ? onEditForm.content : content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {editForm ? (
          <button
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
            onClick={handleUpdateSubmit}
          >
            Update Note
          </button>
        ) : (
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full">
            Add Note
          </button>
        )}
      </form>
    </div>
  );
};

export default NoteForm;
