import React from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const SearchFriend: React.FC<Props> = ({}) => {
    return (
        <div className="flex justify-start items-center border border-slate-200 transition-all focus-within:border-primary rounded-lg max-w-[300px]">
            <span className="p-3 text-slate-300 ">
                <BsSearch></BsSearch>
            </span>
            <span className="flex-1 rounded-[inherit] text-sm text-slate-900">
                <input
                    className="px-3 pl-0 w-full h-full border-none outline-none py-2 rounded-[inherit]"
                    type="text"
                    placeholder="Tìm kiếm bạn bè"
                />
            </span>
        </div>
    );
};

export default SearchFriend;
