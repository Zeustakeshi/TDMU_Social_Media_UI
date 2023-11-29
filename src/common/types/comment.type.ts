export type CommentItemType = {
    id: string;
    comment: string;
    owner: {
        userId: string;
        avatar: string;
        username: string;
    };
    childrenCount: number;
    parentId?: string;
    createtdAt?: string;
    datatedAd?: string;
};
