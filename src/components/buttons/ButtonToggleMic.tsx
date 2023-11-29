import React, { useState } from "react";
import { BsMic, BsMicMute } from "react-icons/bs";
import { ButtonNormal } from ".";

type Props = {};

const ButtonToggleMic: React.FC<Props> = ({}) => {
    const [isOpenMic, setOpenMic] = useState<Boolean>(false);

    const handleToggleMic = () => {
        setOpenMic((prev) => !prev);
    };

    return (
        <ButtonNormal
            className="rounded-md text-xl p-3 bg-slate-200"
            onClick={handleToggleMic}
        >
            {isOpenMic ? <BsMic></BsMic> : <BsMicMute></BsMicMute>}
        </ButtonNormal>
    );
};

export default ButtonToggleMic;
