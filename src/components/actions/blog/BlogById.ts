import { BlogWithAuthor } from "@/type/BlogType";

export const getBlogById = async (blogId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`);
  const response = await res.json();
  const blog: BlogWithAuthor = response.data;

  return blog;
};
