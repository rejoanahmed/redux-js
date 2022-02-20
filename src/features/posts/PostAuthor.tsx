import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface Props {
  userId: string;
}

const PostAuthor = ({ userId }: Props) => {
  const author = useSelector((state: RootState) =>
    state.users.find((user) => user.id === userId)
  );

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
