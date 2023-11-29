import React, { useState, useEffect } from "react";

type Props = {
    file: string | Blob;
};

const PreviewImage: React.FC<Props> = ({ file }) => {
    const [preview, setPreview] = useState<string | ArrayBuffer | Blob>(
        "/assets/upload_image_error.gif"
    );

    useEffect(() => {
        if (typeof file === "object") {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                if (reader.result) {
                    setPreview(reader.result);
                }
            };
        } else {
            setPreview(file);
        }
    }, [file]);

    return (
        <>
            {preview && (
                <img
                    className="object-contain rounded-[inherit] w-full h-full"
                    src={preview.toString()}
                    alt="preview"
                    onError={() => {
                        setPreview("/assets/upload_image_error.gif");
                    }}
                />
            )}
        </>
    );
};

export default PreviewImage;
