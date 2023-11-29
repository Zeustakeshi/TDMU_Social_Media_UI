import React, { useState } from "react";
import { ButtonNormal } from ".";
import { BsCameraVideo, BsCameraVideoOff } from "react-icons/bs";

type Props = {};

const ButtonToggleCamera: React.FC<Props> = ({}) => {
    const [isOpenCamera, setOpenCamera] = useState<Boolean>(false);

    const handleToggleMic = () => {
        setOpenCamera((prev) => !prev);
    };

    return (
        <ButtonNormal
            className="rounded-md text-xl p-3 bg-slate-200"
            onClick={handleToggleMic}
        >
            {isOpenCamera ? <BsCameraVideo /> : <BsCameraVideoOff />}
        </ButtonNormal>
    );
};

export default ButtonToggleCamera;
