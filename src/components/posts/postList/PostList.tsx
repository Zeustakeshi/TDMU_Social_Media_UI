import React from "react";
import PostItem from "./PostItem";

type Props = {};

const PostList: React.FC<Props> = ({}) => {
    return (
        <div className="my-5 ">
            {new Array(10).fill(0).map((_, index) => {
                return <PostItem key={index} />;
            })}
        </div>
    );
};

export default PostList;
