import React from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
  let id = 10;
  return (
    <div className="w-full  py-[50px]">
      <div className=" max-w-[1240px] mx-auto p-10">
        <div className="grid lg:grid-cols-3 gap-8 px-4 md:grid-cols-2 sm:grid-cols-2">
          <Link to={`/blog/${id}`}>
            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md ">
              <img
                className="h-56 w-full object-cover"
                src="https://blog.indepthresearch.org/wp-content/uploads/2023/10/Figma0.jpg"
              />
              <div className="px-6 py-3 text-left">
                <h3 className=" font-semibold text-2xl my-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident, velit.
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores vel ipsum vero molestias!
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
