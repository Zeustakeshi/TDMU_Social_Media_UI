import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useDebounce from "../../hooks/useDebounce";
import { GlobalSearchResultType } from "../../common/types/search.type";
import SearchResult from "./SearchResult";
import useClickOutSide from "../../hooks/useClickOutSide";
type Props = {};

const Search: React.FC<Props> = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [searching, setSearching] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<
        GlobalSearchResultType[]
    >([]);
    const [showResult, setShowResult] = useState<boolean>(false);

    const debounceSearchValue = useDebounce<string>(searchText);

    const { nodeRef } = useClickOutSide<HTMLDivElement>(() => {
        setShowResult(false);
    });

    const handleSearch = async (searchValue: string) => {
        await new Promise((reslove) => {
            setTimeout(() => {
                reslove([{ id: 1 }]);
            }, 2000);
        }).then((data) => {
            setSearchResults(data as GlobalSearchResultType[]);
        });
    };

    useEffect(() => {
        if (!debounceSearchValue.trim()) return;
        (async () => {
            setSearching(true);
            await handleSearch(debounceSearchValue);
            setSearching(false);
            setShowResult(true);
        })();
    }, [debounceSearchValue]);

    return (
        <div className="relative">
            <div className="  focus-within:bg-white focus-within:border  flex justify-start items-center border border-slate-200 hover:border-primary transition-all focus-within:border-primary px-3 rounded-lg  md:min-w-[600px]">
                <span className="focus-within:text-primary p-2 px-2 text-slate-500 ">
                    <BsSearch></BsSearch>
                </span>
                <span className="flex-1 rounded-[inherit] text-slate-900">
                    <input
                        value={searchText}
                        className="bg-transparent focus:bg-white px-3 w-full h-full border-none outline-none py-3 rounded-[inherit]"
                        type="text"
                        placeholder="Tìm kiếm"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </span>
                {searching && (
                    <span className="animate-spin text-primary font-medium">
                        @
                    </span>
                )}
            </div>
            {showResult && <SearchResult ref={nodeRef}></SearchResult>}
        </div>
    );
};

export default Search;
