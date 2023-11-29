import React from "react";
import FriendSuggestions from "../components/friends/FriendSuggestions";

type Props = {};

const Friends: React.FC<Props> = ({}) => {
    return (
        <div className="w-full h-full">
            <FriendSuggestions></FriendSuggestions>
        </div>
    );
};

export default Friends;
