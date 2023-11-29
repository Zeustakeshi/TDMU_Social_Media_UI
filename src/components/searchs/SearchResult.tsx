import { forwardRef } from "react";
import Card from "../cards/Cards";

type Props = {};

const SearchResult = forwardRef<HTMLDivElement, Props>(({}, ref) => {
    return (
        <Card
            ref={ref}
            className=" absolute z-50 bg-white rounded-md w-full min-w-[700px]  shadow-lg  top-[120%] left-[50%] -translate-x-[50%]"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            asperiores illum consequuntur aperiam illo temporibus ad eum
            reiciendis impedit exercitationem nostrum nihil minima provident
            ipsum enim atque, natus voluptas? Totam!
        </Card>
    );
});

export default SearchResult;
