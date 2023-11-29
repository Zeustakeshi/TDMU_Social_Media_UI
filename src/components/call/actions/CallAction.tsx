import React from "react";
import EndCall from "./EndCall";
import ToggleMic from "./ToggleMic";
import ToggleCamera from "./ToggleCamera";

type Props = {};

const CallAction: React.FC<Props> = ({}) => {
    return (
        <div className="w-full flex justify-center items-center gap-6 p-5">
            <ToggleMic></ToggleMic>
            <EndCall></EndCall>
            <ToggleCamera></ToggleCamera>
        </div>
    );
};

export default CallAction;
