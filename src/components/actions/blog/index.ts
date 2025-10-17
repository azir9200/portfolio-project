"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

//  get all posts
export const getAllBlog = async () => {
  try {
    const res = await fetch(
    
      `$http://localhost:5000/api/v1/blog`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
          "Content-Type": "application/json",
        },
        next: {
          tags: ["blog"],
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getAllPostForGest = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/gest`, {
      next: {
        revalidate: 60, // Revalidates after 60 seconds
        tags: ["post"], // Optional: for on-demand revalidation
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getAllPostForAdmin = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/post/all-retreive-admin`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
          "Content-Type": "application/json",
        },
        next: {
          tags: ["post"], // Optional Next.js cache control
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// create post
export const createPost = async (
  postData: Record<string, any>
): Promise<any> => {
  const token = (await cookies()).get("accessToken")!.value;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const result = await res.json();
    revalidateTag("post");
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
};
