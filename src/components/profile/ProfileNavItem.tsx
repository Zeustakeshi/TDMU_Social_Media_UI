import { NavLink, NavLinkProps } from "react-router-dom";

type Props = {
    label: string;
} & NavLinkProps;

const ProfileNavItem = (props: Props) => {
    return (
        <NavLink
            className={({ isActive }) => {
                const activeClassName =
                    "text-primary border-b-[2px] border-primary";
                const className =
                    "text-slate-500 hover:bg-slate-200 rounded-md";
                return ` px-5 py-3  font-semibold ${
                    isActive ? activeClassName : className
                }`;
            }}
            {...props}
        >
            {props.label}
        </NavLink>
    );
};

export default ProfileNavItem;
