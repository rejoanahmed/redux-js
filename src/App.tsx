import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./app/Navbar";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <div className="w-1/2 mx-auto">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <section>
              <h2>Welcome to the Redux Essentials example app!</h2>
            </section>
          }
        />
        <Route
          path="/posts"
          element={
            <>
              <AddPostForm />
              <PostsList />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
