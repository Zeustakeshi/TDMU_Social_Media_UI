import PostList from "../posts/postList/PostList";

type Props = {};

const ProfileTimeline = ({}: Props) => {
    return (
        <div className="">
            {" "}
            <PostList></PostList>
        </div>
    );
};

export default ProfileTimeline;
