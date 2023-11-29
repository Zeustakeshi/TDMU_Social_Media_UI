import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Birthdays from "../components/fetures/evens/Birthdays";
import MightYouLike from "../components/fetures/friend/MightYouLike";
import CreatePost from "../components/posts/CreatePost";
import PostList from "../components/posts/postList/PostList";
import { RootState } from "../redux/store";
import { showNavbar } from "../redux/fetures/app.slice";

type Props = {};

const Home: React.FC<Props> = ({}) => {
    const { deviceType } = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showNavbar());
    }, []);

    return (
        <main className="w-full flex justify-start items-start gap-5 ">
            <div className="flex-1 ">
                <CreatePost></CreatePost>
                <PostList></PostList>
            </div>
            {deviceType === "desktop" && (
                <div className=" w-[400px] md:flex hidden flex-col justify-start items-start gap-5 app-body-sticky-body-padding">
                    <MightYouLike></MightYouLike>
                    <Birthdays></Birthdays>
                </div>
            )}
        </main>
    );
};

export default Home;
