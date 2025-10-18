"use client";

import { BlogWithAuthor } from "@/type/BlogType";
import Image from "next/image";
import { Calendar, User, Tag } from "lucide-react";

const BlogDetailsCard = ({ blog }: { blog: BlogWithAuthor }) => {
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500 dark:text-gray-400">
        Blog not found.
      </div>
    );
  }

  console.log("blog details page", blog);

  return (
    <main className="max-w-4xl mx-auto py-20 px-4">
      {/* Blog Title */}
      <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        {blog.title}
      </h1>

      {/* Author Info */}
      <div className="flex items-center gap-4 mb-8">
        {/* Author Avatar */}
        <Image
          src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
          alt={blog.author?.name || "Author"}
          width={48}
          height={48}
          className="rounded-full border border-gray-300 dark:border-gray-700"
        />
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <User size={16} /> {blog.author?.name || "Unknown Author"}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Calendar size={14} />
            {/* {new Date(blog.createdAt).toLocaleDateString()} */}
          </p>
        </div>
      </div>

      {/* Blog Thumbnail */}
      {blog.thumbnail && (
        <div className="relative h-80 w-full mb-10 overflow-hidden rounded-xl">
          <Image
            src={
              // ✅ Use direct image link from i.ibb.co instead of ibb.co
              blog.thumbnail.replace("https://ibb.co/", "https://i.ibb.co/")
            }
            alt={blog.title}
            fill
            className="object-cover shadow-md"
          />
        </div>
      )}

      {/* Blog Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <p>{blog.content}</p>
      </article>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 flex items-center gap-1"
            >
              <Tag size={14} /> {tag}
            </span>
          ))}
        </div>
      )}
    </main>
  );
};

export default BlogDetailsCard;
