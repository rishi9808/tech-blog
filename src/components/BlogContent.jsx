import React from "react";

const BlogContent = () => {
  return (
    <div className="w-full px-5 py-8 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid gap-8 px-20 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1  sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 gap-6">
            <img
              src="https://images.news18.com/ibnlive/uploads/2022/03/ipl-match-1.jpg"
              className="h-56 w-full object-cover drop-shadow-md rounded-sm "
              alt=""
            />
            <h1 className="font-bold text-2xl my-1 pt-5 text-left">
              Blog Title
            </h1>
            <div className="pt-5">
              <p className="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                reprehenderit consequatur, officiis at, assumenda alias odit quo
                voluptatibus doloribus fugit aperiam obcaecati tenetur
                voluptatum suscipit in reiciendis laudantium minima omnis
                aliquam. Ipsum, voluptates eligendi animi modi ducimus vel qui
                deserunt dolorum debitis id ratione! Est recusandae rem quas
                facere fugiat!
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-lg py-5 max-h-[250px]">
            <div>
              <img
                src="https://imgs.search.brave.com/wV6l9L2lpNZGdFyjcBar0Vs4jcG4vs9cQvfniVPug48/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc"
                className="p-2 w-32 h-32 rounded-full mx-auto"
                alt="profile"
              />
              <h1 className="font-bold text-2xl text-center text-gray-800 pt-3 object-cover">
                Rishi
              </h1>
              <p className=" font-medium text-gray-800">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
