import React from "react";
import { Navbar, BlogContent } from "../components";

const BlogContentPage = ({blogs}) => {
  
  return (
    <div>
      <Navbar />
      <BlogContent blogs={blogs?blogs:""} />
    </div>
  );
};

export default BlogContentPage;
