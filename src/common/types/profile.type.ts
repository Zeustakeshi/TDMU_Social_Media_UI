export type ProfileIntroType = {
    userId: string;
    school: {
        name: string;
        faculty: string | null;
        majors: string | null;
    };
    description?: string;
    gender: string;
    birtday: string;
    socials: {
        facebook: string | null;
        twitter: string | null;
        instagram: string | null;
    };
    following: number;
    follower: number;
};
