import { CommentItemType } from "../../../common/types/comment.type";

export const comments: CommentItemType[] = [
    {
        id: crypto.randomUUID(),
        comment: "hello world",
        owner: {
            userId: "1",
            avatar: "https://images.unsplash.com/photo-1621",
            username: "spiderman",
        },
        childrenCount: 0,
    },
    {
        id: crypto.randomUUID(),
        comment: "hello",
        owner: {
            userId: "1",
            avatar: "https://images.unsplash.com/photo-1621508638997-e30808c10653?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            username: "spiderman",
        },
        childrenCount: 3,
    },
    {
        id: crypto.randomUUID(),
        comment: "world",
        owner: {
            userId: "1",
            avatar: "https://images.unsplash.com/photo-1621508638997-e30808c10653?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            username: "spiderman",
        },
        childrenCount: 2,
    },

    {
        id: crypto.randomUUID(),
        comment: "world",
        owner: {
            userId: "1",
            avatar: "https://images.unsplash.com/photo-1621508638997-e30808c10653?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            username: "spiderman",
        },
        childrenCount: 2,
    },

    {
        id: crypto.randomUUID(),
        comment: "world",
        owner: {
            userId: "1",
            avatar: "https://images.unsplash.com/photo-1621508638997-e30808c10653?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            username: "spiderman",
        },
        childrenCount: 2,
    },

    {
        id: crypto.randomUUID(),
        comment: "world",
        owner: {
            userId: "1",
            avatar: "https://images.unsplash.com/photo-1621508638997-e30808c10653?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            username: "Minh Hiếu",
        },
        childrenCount: 2,
    },
];
