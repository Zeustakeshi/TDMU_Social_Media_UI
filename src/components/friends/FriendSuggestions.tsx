import React from "react";
import { SocialMediaType } from "../../common/types/global.type";
import FriendCard from "../cards/FriendCard";

type Props = {};

type FriendSuggestionType = {
    id: string;
    username: string;
    avatar: string;
    sociaMedia: { type: SocialMediaType; to: string }[];
    description: string;
};

const data: FriendSuggestionType[] = [
    {
        id: "1",
        username: "Minh Hieu",
        description: "hello world",
        avatar: "/avatar.png",
        sociaMedia: [
            {
                type: "facebook",
                to: "/",
            },
            {
                type: "instagram",
                to: "/",
            },
            {
                type: "twitter",
                to: "/",
            },
        ],
    },
    {
        id: "2",
        username: "Minh Hieu",
        description: "hello world",
        avatar: "/avatar.png",
        sociaMedia: [
            {
                type: "facebook",
                to: "/",
            },
            {
                type: "instagram",
                to: "/",
            },
            {
                type: "twitter",
                to: "/",
            },
        ],
    },
    {
        id: "3",
        username: "Minh Hieu",
        description: "hello world",
        avatar: "/avatar.png",
        sociaMedia: [
            {
                type: "facebook",
                to: "/",
            },
            {
                type: "instagram",
                to: "/",
            },
            {
                type: "twitter",
                to: "/",
            },
        ],
    },
    {
        id: "4",
        username: "Minh Hieu",
        description: "hello world",
        avatar: "/avatar.png",
        sociaMedia: [
            {
                type: "facebook",
                to: "/",
            },
            {
                type: "instagram",
                to: "/",
            },
            {
                type: "twitter",
                to: "/",
            },
        ],
    },
    {
        id: "5",
        username: "Minh Hieu",
        description: "hello world",
        avatar: "/avatar.png",
        sociaMedia: [
            {
                type: "facebook",
                to: "/",
            },
            {
                type: "instagram",
                to: "/",
            },
            {
                type: "twitter",
                to: "/",
            },
        ],
    },
];

const FriendSuggestions: React.FC<Props> = ({}) => {
    return (
        <div className={`friend-suggestion-wrapper gap-5`}>
            {data.map((item) => {
                return (
                    <FriendCard
                        key={item.id}
                        socialMedias={item.sociaMedia}
                    ></FriendCard>
                );
            })}
        </div>
    );
};

export default FriendSuggestions;
