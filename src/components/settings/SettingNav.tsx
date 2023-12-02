import SettingInputGroupItem from "./SettingNavItem";

export type SettingRoute = {
    label: string;
    to: string;
};

type Props = {
    routes: SettingRoute[];
};

const SettingNav = ({ routes }: Props) => {
    return (
        <div className="min-w-[300px] max-w-[300px] min-h-[750px] border-r border-slate-300  p-2 flex justify-start flex-col items-center gap-1">
            {routes.map((route, index) => {
                return (
                    <SettingInputGroupItem key={index} to={route.to}>
                        {route.label}
                    </SettingInputGroupItem>
                );
            })}
        </div>
    );
};

export default SettingNav;
