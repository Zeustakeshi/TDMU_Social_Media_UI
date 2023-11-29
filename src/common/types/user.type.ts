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
