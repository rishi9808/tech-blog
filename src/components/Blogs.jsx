import React from "react";
import { Link } from "react-router-dom";
const Blogs = ({blogs}) => {
  console.log("Blogpage")
  console.log(blogs.blogs.data[0].attributes)
  let id = 10;
  return (
    <div className="w-full  py-[50px]">
      <div className=" max-w-[1240px] mx-auto p-10">
        <div className="grid lg:grid-cols-3 gap-8 px-4 md:grid-cols-2 sm:grid-cols-2">
          {blogs.blogs.data.map((blog)=>
          <Link to={`/blog/${blog.id}`}>
            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md ">
              <img
                className="h-56 w-full object-cover"
                src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.formats.small.url}`}
              />
              <div className="px-6 py-3 text-left">
                <h3 className=" font-semibold text-2xl my-1">
                  {blog.attributes.blogTitle}
                </h3>
                <p className="text-gray-600 text-sm">
                  {blog.attributes.blogDesc}
                </p>
              </div>
            </div>
          </Link>
        )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
