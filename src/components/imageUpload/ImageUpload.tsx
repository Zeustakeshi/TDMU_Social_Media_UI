import React, { ChangeEvent } from "react";

type Props = {
    size?: {
        width?: number;
        height?: number;
    };
    className?: string;
    file: string | Blob | null;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
};

const ImageUpload: React.FC<Props> = ({
    className = "",
    children,
    handleChange = () => {},
}) => {
    return (
        <label className={`${className}`}>
            {children}
            <input hidden type="file" onChange={handleChange} />
        </label>
    );
};

export default ImageUpload;
