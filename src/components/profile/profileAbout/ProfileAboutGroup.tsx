import { ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
};

const ProfileAboutGroup = ({ title, children }: Props) => {
    return (
        <div className="my-4">
            <h4 className="text-2xl text-slate-700 font-semibold mb-4">
                {title}
            </h4>
            <div className="ml-5">{children}</div>
        </div>
    );
};

export default ProfileAboutGroup;
