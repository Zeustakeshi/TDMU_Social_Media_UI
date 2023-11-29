import { Outlet } from "react-router-dom";

type Props = {};

const LayoutWrapper = (props: Props) => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default LayoutWrapper;
