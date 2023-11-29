import React from "react";
import { PiShareFat } from "react-icons/pi";

type Props = {};

const ActionSharePost: React.FC<Props> = ({}) => {
    return (
        <div className="post-action-item">
            <span className="text-xl">
                <PiShareFat></PiShareFat>
            </span>
            <span>Chia sẻ</span>
        </div>
    );
};

export default ActionSharePost;
