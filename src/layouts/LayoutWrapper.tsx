import { Outlet } from "react-router-dom";

type Props = {};

const LayoutWrapper = ({}: Props) => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default LayoutWrapper;
