import React from "react";
import { Navbar, Blogs } from "../components";

const HomePage = (blogs) => {
  console.log("Homepage")
  console.log(blogs)
  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs?blogs:""} />
    </div>
  );
};

export default HomePage;
