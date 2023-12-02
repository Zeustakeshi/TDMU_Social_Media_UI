import { CommentItemType } from "../../../common/types/comment.type";

export const comments: CommentItemType[] = [
    {
        id: crypto.randomUUID(),
        comment: "hello world",
        owner: {
            id: crypto.randomUUID(),
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ducimus",
            email: `spiderman@gmail.com`,
            social: {
                facebook: `https://facebook.com`,
                instagram: `https://instagram.com`,
                twitter: `https://twitter.com`,
            },
            avatar: `https://source.unsplash.com/featured/?spiderman`,
            username: "spiderman",
        },
        childrenCount: 0,
    },
    {
        id: crypto.randomUUID(),
        comment: "hello",
        owner: {
            id: crypto.randomUUID(),
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ducimus",
            email: `spiderman@gmail.com`,
            social: {
                facebook: `https://facebook.com`,
                instagram: `https://instagram.com`,
                twitter: `https://twitter.com`,
            },
            avatar: `https://source.unsplash.com/featured/?spiderman`,
            username: "spiderman",
        },
        childrenCount: 3,
    },
    {
        id: crypto.randomUUID(),
        comment: "world",
        owner: {
            id: crypto.randomUUID(),
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ducimus",
            email: `spiderman@gmail.com`,
            social: {
                facebook: `https://facebook.com`,
                instagram: `https://instagram.com`,
                twitter: `https://twitter.com`,
            },
            avatar: `https://source.unsplash.com/featured/?tomato`,
            username: "spiderman",
        },
        childrenCount: 2,
    },

    {
        id: crypto.randomUUID(),
        comment: "world",
        owner: {
            id: crypto.randomUUID(),
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ducimus",
            email: `spiderman@gmail.com`,
            social: {
                facebook: `https://facebook.com`,
                instagram: `https://instagram.com`,
                twitter: `https://twitter.com`,
            },
            avatar: `https://source.unsplash.com/featured/?sky`,
            username: "spiderman",
        },
        childrenCount: 2,
    },

    {
        id: crypto.randomUUID(),
        comment: "world",
        owner: {
            id: crypto.randomUUID(),
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ducimus",
            email: `spiderman@gmail.com`,
            social: {
                facebook: `https://facebook.com`,
                instagram: `https://instagram.com`,
                twitter: `https://twitter.com`,
            },
            avatar: `https://source.unsplash.com/featured/?code`,
            username: "spiderman",
        },
        childrenCount: 2,
    },

    {
        id: crypto.randomUUID(),
        comment: "world",
        owner: {
            id: crypto.randomUUID(),
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ducimus",
            email: `spiderman@gmail.com`,
            social: {
                facebook: `https://facebook.com`,
                instagram: `https://instagram.com`,
                twitter: `https://twitter.com`,
            },
            avatar: `https://source.unsplash.com/featured/?hacker`,
            username: "spiderman",
        },
        childrenCount: 2,
    },
];
