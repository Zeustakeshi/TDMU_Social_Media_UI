import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { BiHappy, BiImage } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Card from "../cards/Cards";
import ModelCreatePost from "../modals/ModalCreatePost";
import ModalNoAuth from "../modals/ModalNoAuth";

const CreatePost = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalNoAuth, setShowModalNoAuth] = useState<boolean>(false);
    const { info: user } = useSelector((state: RootState) => state.user);

    const handleCreatePost = () => {
        // if (!user?.id) setShowModalNoAuth(true);
        setShowModalCreate(true);
    };

    return (
        <>
            <Card onClick={handleCreatePost}>
                <div className="flex justify-start items-center gap-4">
                    <Avatar
                        sx={{ width: 50, height: 50 }}
                        src="/avatar.png"
                    ></Avatar>
                    <div className="text-slate-600 px-5 py-2 flex-1 bg-slate-100 rounded-md outline-primary border border-transparent ">
                        Bạn đang nghĩ gì?
                    </div>
                </div>
                <div className="flex justify-between items-center pt-4 w-full">
                    <AddPostAction></AddPostAction>

                    <button className="px-4 py-2 rounded-md bg-primary text-white font-semibold">
                        Đăng
                    </button>
                </div>
            </Card>
            {showModalCreate && (
                <ModelCreatePost
                    open={showModalCreate}
                    setShowModal={setShowModalCreate}
                    onClose={() => setShowModalCreate(false)}
                />
            )}

            {showModalNoAuth && (
                <ModalNoAuth
                    open={showModalNoAuth}
                    setShowModal={setShowModalNoAuth}
                    onClose={() => setShowModalNoAuth(false)}
                />
            )}
        </>
    );
};

const AddPostAction = () => {
    return (
        <ul className="flex justify-start items-center gap-3">
            <AddPostActionItem icon={<FiVideo></FiVideo>} label="Live Video" />
            <AddPostActionItem icon={<BiImage></BiImage>} label="Photo/Video" />
            <AddPostActionItem icon={<BiHappy></BiHappy>} label="Feeling" />
        </ul>
    );
};

type AddPostActionItemType = {
    label: string;
    icon: React.ReactNode;
};

const AddPostActionItem: React.FC<AddPostActionItemType> = ({
    label,
    icon,
}) => {
    return (
        <li className="flex justify-center items-center gap-2 text-slate-600 cursor-pointer">
            <span>{icon}</span>
            <span>{label}</span>
        </li>
    );
};

export default CreatePost;
