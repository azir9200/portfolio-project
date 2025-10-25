import { BlogWithAuthor } from "@/type/BlogType";

export const getBlogById = async (blogId: string) => {
  const res = await fetch(
    `https://portfolio-auth-data.vercel.app/api/v1/blog/${blogId}`
  );
  const response = await res.json();
  const blog: BlogWithAuthor = response.data;

  return blog;
};
