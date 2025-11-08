import { toast } from "sonner";

export const UploadImage = async (file: File) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "Azir-uploads"); //

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dft2gbhxw/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    // 🔹 2. Handle Cloudinary error responses
    const uploaded = await res.json();
    console.log(" resss", res);
    if (!res.ok) {
      console.log(" res hello world");
      const errorMsg =
        uploaded?.error?.message ||
        "Image upload failed. Please try again or use a smaller file.";
      toast.error(errorMsg);
      return;
    } else {
    }
    return uploaded.secure_url;
  } catch (error) {
    console.log(error);
  }
};
