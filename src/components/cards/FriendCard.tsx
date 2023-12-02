import React from "react";
import { SocialMediaType } from "../../common/types/global.type";

import { NavLink } from "react-router-dom";
import Card from "./Cards";

import { getSocialMediaIcon } from "../../utils/socialmedia.util";
import Avatar from "../avatar/Avatar";

type Props = {
    socialMedias: { type: SocialMediaType; to: string }[];
    header?: React.ReactNode;
};

const FriendCard: React.FC<Props> = ({ socialMedias, header }) => {
    return (
        <Card className="w-full" header={header}>
            <div className="flex justify-start items-center gap-5">
                <Avatar
                    className="border"
                    size={100}
                    src="/avatar.png"
                ></Avatar>
                <div className="flex flex-col justify-start items-start mb-2">
                    <p>Minh Hieu</p>
                    <p className=" text-xs text-slate-500">
                        Founder & CEO at ABC
                    </p>
                    <ul className="my-3 w-full flex justify-center items-center gap-3">
                        {socialMedias.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        className="inline-block p-2"
                                        to={item.to}
                                    >
                                        {getSocialMediaIcon(item.type)}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="flex justify-center items-center gap-5 text-sm font-semibold">
                <button className="flex-1 px-4 py-2 rounded-md border border-slate-200">
                    Bỏ qua
                </button>
                <button className="flex-1 px-4 py-2 rounded-md bg-primary text-white">
                    Theo dõi
                </button>
            </div>
        </Card>
    );
};

export default FriendCard;
