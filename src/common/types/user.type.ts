export type UserType = {
    id: string;
    username: string;
    email: string;
    avatar: string;
    backgroundURL?: string;
    birthday?: Date;
    gender: "male" | "female";
    description?: string;
};

export type UserShortInfo = {
    username: string;
    id: string;
    email: string;
    avatar: string;
    social: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
    };
    shortDescription: string;
};
