import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPosts } from "./postsSlice";

function PostsList() {
  const posts = useSelector(selectPosts);
  return (
    <section>
      <h2 className="text-teal-400 text-center font-extrabold text-4xl">
        Posts
      </h2>
      <Link to="/">Home</Link>
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex justify-center gap-4 items-center"
        >
          <h1 className="text-indigo-300">{post.title}</h1>
          <p className="text-xs">{post.content.substring(0, 100)}</p>
        </article>
      ))}
    </section>
  );
}

export default PostsList;