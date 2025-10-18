import React from "react";
import BlogCard from "./BlogCard";
import { TBlog } from "@/type/BlogType";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blog", {
    next: { tags: ["BLOGS"] },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch blogs:", res.statusText);
    return <p className="text-center text-red-500">Failed to load blogs.</p>;
  }

  const { data: blogs } = await res.json();
  console.log("blogmmmmmm", blogs);
  return (
    <div className="container mx-auto bg-gradient-to-br from-indigo-400 to-purple-400  text-white pt-20 md:px-6 px-2">
      <h2 className="text-center my-5 text-4xl font-bold">Explore all Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto my-5">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
        {/* {blogs?.slice(0, 3)?.map((blog: TBlog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))} */}
      </div>
    </div>
  );
};

export default BlogsPage;
