import axios from "axios";

export const uploadImage = async (file: string | Blob) => {
    if (!file) return null;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);

    try {
        const response = await axios({
            method: "post",
            url: "https://api.imgbb.com/1/upload",
            params: {
                key: import.meta.env.VITE_IMAGEBB_API_KEY,
            },
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response?.data?.data?.url;
    } catch (error) {
        console.error("fail to upload image");
    }
};
