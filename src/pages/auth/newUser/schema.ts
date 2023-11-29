export enum NewUserSchemaOption {
    role = "role",
    department = "department",
    purpose = "purpose",
}

export type NewUserInfoOptionField = {
    name: string;
    url?: string;
};

export type SchemaOptionType = {
    opitons: NewUserInfoOptionField[];
    default?: NewUserInfoOptionField;
};

export type SchemaOptions = {
    [NewUserSchemaOption.role]: SchemaOptionType;
    [NewUserSchemaOption.department]: SchemaOptionType;
    [NewUserSchemaOption.purpose]: SchemaOptionType;
};

export const newUserSchemaOptions: SchemaOptions = {
    [NewUserSchemaOption.role]: {
        opitons: [
            {
                name: "Sinh viên",
                url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fsinhvien.png?alt=media",
            },
            {
                name: "Giảng viên",
                url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fgiang_vien.png?alt=media",
            },
            {
                name: "Khác",
            },
        ],
        default: {
            name: "Sinh viên",
            url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fsinhvien.png?alt=media",
        },
    },
    [NewUserSchemaOption.department]: {
        opitons: [
            {
                name: "Viện Kỹ thuật - Công nghệ",
                url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fki_thuat_cong_nghe.png?alt=media",
            },
            {
                name: "Khoa Kinh Tế",
                url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fkinh_tete.png?alt=media",
            },
            {
                name: "Khoa Công Nghệ Thực Phẩm",
                url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fcong_nghe_thuc_phampham.png?alt=media",
            },
            {
                name: "Khoa Ngoại Ngữ",
                url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fkhoa_ngoai_ngu.png?alt=media",
            },
            {
                name: "Khoa Sư Phạm",
                url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fsu_phampham.png?alt=media",
            },
            { name: "Khoa Đào Tạo Kiến Thức Chung" },
            {
                name: "Khoa Kiến Trúc",
                url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fkien_tructruc.png?alt=media",
            },
            { name: "Khoa Khoa Học Quản Lý" },
            { name: "Khoa Công nghiệp Văn hóa" },
            { name: "Khác" },
        ],
        default: {
            name: "Viện Kỹ thuật - Công nghệ",
            url: "https://firebasestorage.googleapis.com/v0/b/tdmu-social-media.appspot.com/o/public-assets%2Fki_thuat_cong_nghe.png?alt=media",
        },
    },
    [NewUserSchemaOption.purpose]: {
        opitons: [
            { name: "Giao lưu kết bạn" },
            { name: "Học tập" },
            { name: "Tìm kiếm thông tin" },
            { name: "Trò chuyện cùng bạn bè" },
            { name: "Tìm bạn" },
        ],
        default: { name: "Giao lưu kết bạn" },
    },
};
