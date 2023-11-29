import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainChat from "../components/chat/main/MainChat";
import SidebarChat from "../components/chat/sidebar/SidebarChat";
import { closeNavbar } from "../redux/fetures/app.slice";

type Props = {};

const Chats: React.FC<Props> = ({}) => {
    const dispatch = useDispatch();

    // close navbar
    useEffect(() => {
        dispatch(closeNavbar());
    }, []);

    return (
        <div className="h-full flex justify-start items-start gap-5">
            <SidebarChat></SidebarChat>
            <div className="flex-1 w-full h-full">
                <MainChat></MainChat>
            </div>
        </div>
    );
};

export default Chats;
