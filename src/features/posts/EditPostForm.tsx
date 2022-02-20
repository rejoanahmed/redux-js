import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import { postUpdated } from "./postsSlice";

function EditPostForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const post = useSelector((state: RootState) => {
    return state.posts.find((post) => post.id === id);
  });

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  const dispatch = useDispatch();

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const [selectedFile, setSelectedFile] = useState<Blob>();

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const onSavePostClicked = (e: React.MouseEvent) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        postUpdated({
          id: id!,
          title,
          content,
          image: URL.createObjectURL(selectedFile!),
        })
      );
      navigate(`/posts/${id}`);
    }
  };
  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label>
          Title: <input type="text" value={title} onChange={onTitleChanged} />
        </label>
        <label>
          Content: <textarea value={content} onChange={onContentChanged} />
        </label>
        <label>
          Image: <input type="file" onChange={onSelectFile} />
        </label>
        {selectedFile && (
          <img src={URL.createObjectURL(selectedFile)} alt="updated" />
        )}
        <button onClick={onSavePostClicked}>Save</button>
      </form>
    </section>
  );
}

export default EditPostForm;
