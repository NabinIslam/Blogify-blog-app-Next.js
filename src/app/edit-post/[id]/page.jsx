import EditPostPage from "@/app/EditPostPage";
import React from "react";

export const metadata = {
  title: "Blogify | Edit post",
};

const EditPost = ({ params }) => {
  const { id } = params;

  return <EditPostPage id={id} />;
};

export default EditPost;
