import React, { Dispatch, SetStateAction } from "react";
import { BsChatLeftText } from "react-icons/bs";

type Props = { setShowComment: Dispatch<SetStateAction<boolean>> };

const ActionCommentPost: React.FC<Props> = ({ setShowComment }) => {
    const handleClick = () => {
        setShowComment((prev) => !prev);
    };

    return (
        <div onClick={handleClick} className="post-action-item">
            <span className="text-xl">
                <BsChatLeftText></BsChatLeftText>
            </span>

            <span>Bình luận</span>
        </div>
    );
};

export default ActionCommentPost;
