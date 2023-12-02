export type GeneralSettingType = {
    system: {
        theme: "DARK" | "LIGHT";
        allowAnalysis: boolean;
    };
    suggestions: {
        friends: boolean;
        campaigns: boolean;
        products: boolean;
    };
    privacy: {
        allowRecommendation: boolean;
        allowFindable: boolean;
        onlineStatus: boolean;
    };
};

export type AccountSettingType = {
    username: string;
    email: string;
};

export type NotificationSettingType = {
    posts: {
        commentNotification: boolean;
        mentionedNotification: boolean;
        friendPostNotification: boolean;
    };
    friends: {
        birthdayNotification: boolean;
        followerNotification: boolean;
        friendPostNotification: boolean;
    };
    events: {
        eventNotification: boolean;
    };
    security: {
        suspiciousAccessNotification: boolean;
    };
};

export type PrivacySetting = {
    personalInfo: {
        birthdayVisibility: boolean;
        genderVisibility: boolean;
        addressVisibility: boolean;
        friendListVisibility: boolean;
        relationshipStatusVisibility: boolean;
        followerCountVisibility: boolean;
    };
    postInfo: {
        newPostNotification: boolean;
        postStatusNotification: boolean;
        postRemovalReasonNotification: boolean;
    };
};
