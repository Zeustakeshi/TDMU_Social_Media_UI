import React from "react";
import { IoSend } from "react-icons/io5";
import Card from "../../cards/Cards";
import { NavLink } from "react-router-dom";
import Avatar from "../../avatar/Avatar";

type Props = {};

const Birthdays: React.FC<Props> = () => {
    return (
        <Card
            className="w-full"
            header={
                <div className="text-sm flex justify-between items-center">
                    <span className="font-semibold">Sinh nhật</span>
                    <NavLink to="/friends" className="text-primary font-medium">
                        Tất cả
                    </NavLink>
                </div>
            }
        >
            <div className="flex justify-start items-center gap-5">
                <Avatar size={50} src="/avatar.png"></Avatar>
                <div className="flex flex-col justify-start items-start">
                    <p>Minh Hieu</p>
                    <p className=" text-xs text-slate-500">
                        Hôm nay là sinh nhật của anh ấy
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-between items-center gap-2 mt-3">
                <input
                    className="flex-1 w-full bg-slate-200 px-3 py-1 rounded-md text-sm outline-primary border border-transparent hover:border-slate-300 "
                    type="text"
                    placeholder="Gửi lời chúc"
                />
                <button className="w-[35px] h-[35px] flex justify-center items-center rounded-lg bg-primary bg-opacity-20 text-primary text-sm">
                    <IoSend></IoSend>
                </button>
            </div>
        </Card>
    );
};

export default Birthdays;
