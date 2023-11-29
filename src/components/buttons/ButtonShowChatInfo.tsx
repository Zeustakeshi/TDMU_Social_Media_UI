import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Sidebar from "../sidebar/SidebarAbsolute";
import SidebarChatInfo from "../chat/sidebar/SidebarChatInfo";

type Props = {};

const ButtonShowChatInfo: React.FC<Props> = ({}) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <button
                onClick={() => setShow(true)}
                className="p-3 hover:bg-slate-100 rounded-md"
            >
                <AiOutlineInfoCircle></AiOutlineInfoCircle>
            </button>
            {show && (
                <Sidebar onClose={() => setShow(false)} position="right">
                    <SidebarChatInfo></SidebarChatInfo>
                </Sidebar>
            )}
        </>
    );
};

export default ButtonShowChatInfo;
