import {
    PostPrivacy,
    PostResponeType,
    PostType,
} from "../common/types/post.type";
import { ReactionType } from "../common/types/reaction.type";

export const getRandomPost = (): PostType => {
    const usernames = [
        "spiderman",
        "John",
        "Smith",
        "Journey",
        "Cipher Seeker",
    ];

    const imageTopics = [
        "car",
        "supperman",
        "spiderman",
        "cat",
        "code",
        "sky",
        "dog",
        "coffee",
        "tomato",
    ];
    const username = usernames[Math.floor(Math.random() * usernames.length)];
    return {
        id: crypto.randomUUID(),
        actions: {
            commentCount: Math.floor(Math.random() * 10),
            likeCount: Math.floor(Math.random() * 2000),
            reaction: Math.floor(Math.random() * 6) as ReactionType,
            shareCount: Math.floor(Math.random() * 2000),
        },
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleTimeString(),
        owner: {
            id: crypto.randomUUID(),
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ducimus",
            email: `${username}@gmail.com`,
            social: {
                facebook: `https://facebook.com/${username}`,
                instagram: `https://instagram.com/${username}`,
                twitter: `https://twitter.com${username}`,
            },

            avatar: `https://source.unsplash.com/featured/?${
                imageTopics[Math.floor(Math.random() * imageTopics.length)]
            }`,
            username: username,
        },
        privacy: 1,
        imageUrl: `https://source.unsplash.com/featured/?${
            imageTopics[Math.floor(Math.random() * imageTopics.length)]
        }`,
    };
};

export const getPostPrivacy = (privacy: PostPrivacy) => {
    switch (privacy) {
        case 1: {
            return "Công khai";
        }
        case 2: {
            return "Bạn bè";
        }
        case 3: {
            return "Chỉ mình tôi";
        }
    }
};

export const fetchPostMock = async (
    page: number,
    limit: number
): Promise<PostResponeType> => {
    return new Promise<PostResponeType>((resolve) => {
        const totalPost = 20;
        setTimeout(() => {
            const posts = [];
            for (let i = 0; i < limit; ++i) {
                posts.push(getRandomPost());
            }

            resolve({
                currentPage: page,
                posts: posts,
                totalPage: Math.floor(totalPost / limit),
                totalPost: totalPost,
            });
        }, 4000);
    });
};
