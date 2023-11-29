import { ReacttionItemType } from "../components/reactions/ReactionWrapper";

export enum Reactions {
    LIKE = 1,
    LOVE = 2,
    HAHA = 3,
    WOW = 4,
    SAD = 5,
    ANGRY = 6,
}

export const reactions: ReacttionItemType[] = [
    {
        label: "Thích",
        name: "Like",
        image: "/like.png",
        value: Reactions.LIKE,
    },
    {
        label: "Yêu thích",
        name: "Love",
        image: "/heart.png",
        value: Reactions.LOVE,
    },
    {
        label: "Haha",
        name: "Haha",
        image: "/laugh.png",
        value: Reactions.HAHA,
    },
    {
        label: "Wow",
        name: "Wow",
        image: "/wow.png",
        value: Reactions.WOW,
    },
    {
        label: "Buồn",
        name: "Sad",
        image: "/sad.png",
        value: Reactions.SAD,
    },
    {
        label: "Phẫn nộ",
        name: "Angry",
        image: "/angry.png",
        value: Reactions.ANGRY,
    },
];
