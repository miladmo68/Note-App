import React, { useEffect, useState } from "react";

const NoteForm = ({
  onSave,
  updateNote, // New prop for updating an existing note
  editForm,
  onEditForm,
  setEdit,
  onIndex,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // When edit mode is enabled, populate local state from the note to edit.
    if (editForm && onEditForm) {
      setTitle(onEditForm.title);
      setContent(onEditForm.content);
    }
  }, [editForm, onEditForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() !== "" && content.trim() !== "") {
      onSave({ title, content });
      setTitle("");
      setContent("");
    }
  }

  function handleUpdateSubmit() {
    setEdit(false); // Exit edit mode
    updateNote({ title, content }, onIndex); // Update note in place
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form
        className="container bg-gray-50 mb-4 p-4 w-80"
        onSubmit={
          editForm
            ? (e) => {
                e.preventDefault();
                handleUpdateSubmit();
              }
            : handleSubmit
        }
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
            value={title} // Always use local state value so changes are tracked
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
            name="content"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-3"
            value={content} // Always use local state value so changes are tracked
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {editForm ? (
          <button
            type="button" // Prevent default submission behavior
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
            onClick={handleUpdateSubmit}
          >
            Update Note
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          >
            Add Note
          </button>
        )}
      </form>
    </div>
  );
};

export default NoteForm;
