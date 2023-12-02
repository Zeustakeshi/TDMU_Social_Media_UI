import { UserShortInfo } from "./user.type";

export type CommentItemType = {
    id: string;
    comment: string;
    owner: UserShortInfo;
    childrenCount: number;
    parentId?: string;
    createtdAt?: string;
    datatedAd?: string;
};
