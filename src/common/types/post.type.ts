import { ReactionType } from "./reaction.type";
import { UserShortInfo } from "./user.type";

export type PostPrivacy = 1 | 2 | 3;

export type PostType = {
    id: string;
    imageUrl: string;
    privacy: PostPrivacy;
    owner: UserShortInfo;
    actions: {
        likeCount: number;
        commentCount: number;
        shareCount: number;
        reaction: ReactionType;
    };
    createdAt: string;
    updatedAt: string;
};

export type PostResponeType = {
    currentPage: number;
    totalPage: number;
    totalPost: number;
    posts: PostType[];
};

export type PostReactionType = ({} & ReactionType) | null;
