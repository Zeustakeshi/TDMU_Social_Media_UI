import { ReactionType } from "./reaction.type";

export type SidebarChatItemType = {
    id: string;
    atavar: string;
    username: string;
    status: "offline" | "online";
    updateAt?: Date;
    lastMessage?: string;
};

export type MessageType = {
    id: string;
    content: string;
    type: "text" | "image" | "file";
    parentId: string | null;
    user: {
        id: string;
        username: string;
        avatar: string;
    };
    createdAt: Date;
    updatedAt: Date;
};

export type MessageReactionType = ({} & ReactionType) | null;
