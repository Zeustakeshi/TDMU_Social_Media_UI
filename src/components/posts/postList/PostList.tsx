import React, { useEffect, useState } from "react";
import { PostType } from "../../../common/types/post.type";
import { fetchPostMock } from "../../../utils/post.util";
import PostItem from "./PostItem";
import PostItemSkeleton from "./PostItemSkeleton";

type Props = {};

const PostList: React.FC<Props> = ({}) => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [isEndedPost, setIsEndedPost] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            await fetchPost();
        })();
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            loading
        ) {
            return;
        }
        await fetchPost();
    };

    const fetchPost = async () => {
        if (isEndedPost) return;
        setLoading(true);
        const postResponse = await fetchPostMock(pageIndex + 1, 5);
        setPosts((prev) => [...prev, ...postResponse.posts]);
        setPageIndex(postResponse.currentPage);
        setLoading(false);

        if (postResponse.currentPage > postResponse.totalPage) {
            setIsEndedPost(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

    return (
        <div className="my-5 ">
            {posts.map((post, index) => {
                return <PostItem key={index} {...post} />;
            })}

            {loading &&
                new Array(5)
                    .fill(0)
                    .map((_, index) => <PostItemSkeleton key={index} />)}
        </div>
    );
};

export default PostList;
