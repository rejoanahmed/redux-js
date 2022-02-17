import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(postAdded({ title, content, id: nanoid() }));
    setTitle("");
    setContent("");
  };

  return (
    <section>
      <h2 className="text-teal-400 text-center font-extrabold text-4xl">
        Add Post
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onTitleChange}
          />
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onContentChange}
            value={content}
          />
          <button type="button" onClick={onSubmit}>
            Save Post
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddPostForm;
