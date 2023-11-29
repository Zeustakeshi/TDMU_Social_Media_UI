import React from "react";
import PostList from "../posts/postList/PostList";

type Props = {};

const ProfileTimeline = (props: Props) => {
    return (
        <div>
            {" "}
            <PostList></PostList>
        </div>
    );
};

export default ProfileTimeline;
