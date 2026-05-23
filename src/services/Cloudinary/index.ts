const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "dzclkoeez";
const uploadPreset =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "ficha-rpg-upload";
const uploadFolder = import.meta.env.VITE_CLOUDINARY_UPLOAD_FOLDER || "ficha-rpg";

export const cloudinaryService = {
  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", uploadFolder);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error("Nao foi possivel enviar a imagem.");
    }

    const data = (await response.json()) as { secure_url: string };
    return data.secure_url;
  },
};
