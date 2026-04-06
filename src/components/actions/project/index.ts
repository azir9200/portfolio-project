"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

function projectApiUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_API?.trim();
  if (!base) return null;
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

// 🟢 Get All
export async function getProjects() {
  const url = projectApiUrl("/project");
  if (!url) {
    return { data: [] };
  }
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

// 🟢 Create

export async function createProject(formData: any) {
  console.log(formData, "formData");

  try {
    const url = projectApiUrl("/project");
    if (!url) {
      throw new Error(
        "NEXT_PUBLIC_BASE_API is not set. Add it to your .env file.",
      );
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `${(await cookies()).get("accessToken")?.value || ""}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      cache: "no-store",
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      console.error(" Project creation failed:", data || res.statusText);
      throw new Error(
        data?.message || `Request failed with status ${res.status}`
      );
    }

    console.log("✅ Project created successfully:", data);
    revalidatePath("/dashboard/projects");
    return data;
  } catch (error) {
    console.error(" createProject error:", error);
    throw error;
  }
}

// 🟢 Update
export async function updateProject(id: string, formData: any) {
  const url = projectApiUrl(`/project/${id}`);
  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_BASE_API is not set. Add it to your .env file.",
    );
  }
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `${(await cookies()).get("accessToken")!.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to update project");
  revalidatePath("/dashboard/projects");
  return res.json();
}

// 🟢 Delete
export async function deleteProject(id: string) {
  const url = projectApiUrl(`/project/${id}`);
  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_BASE_API is not set. Add it to your .env file.",
    );
  }
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `${(await cookies()).get("accessToken")!.value}`,
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to delete project");
  revalidatePath("/dashboard/projects");
  return res.json();
}
