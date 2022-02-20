// Creating a Single Post Page
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";

const SinglePostPage = () => {
  let { id } = useParams();
  const post = useSelector((state: RootState) =>
    state.posts.find((post) => post.id === id)
  );
  console.log(post?.id);

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  } else {
    return (
      <section>
        <article className="post">
          <h2>{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <img src={post.image} alt="fucking" />
        </article>
      </section>
    );
  }
};

export default SinglePostPage;
