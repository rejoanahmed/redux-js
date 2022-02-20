import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [selectedFile, setSelectedFile] = useState<Blob>();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const dispatch = useDispatch();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(postAdded(title, content, preview));
    setTitle("");
    setContent("");
    setSelectedFile(undefined);
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
          <input type="file" onChange={onSelectFile} />
          {selectedFile && <img src={preview} alt="your" />}
          <button type="button" onClick={onSubmit}>
            Save Post
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddPostForm;
