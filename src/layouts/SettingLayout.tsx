import { Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";

const SettingLayout = () => {
    return (
        <MainLayout>
            <Outlet></Outlet>
        </MainLayout>
    );
};

export default SettingLayout;
