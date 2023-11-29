// import SearchFriend from "@/components/search/SearchFriend";
import Card from "../cards/Cards";
import SearchFriend from "../searchs/SearchFriend";
import FriendItem, { FriendItemType } from "./FriendItem";

const friends: FriendItemType[] = [
    {
        id: "1",
        avatar: "",
        lastActive: JSON.stringify(new Date()),
        username: "Minh Hieu",
    },
    {
        id: "2",
        avatar: "",
        lastActive: JSON.stringify(new Date()),
        username: "Minh Hieu",
    },
    {
        id: "3",
        avatar: "",
        lastActive: JSON.stringify(new Date()),
        username: "Minh Hieu",
    },
    {
        id: "4",
        avatar: "",
        lastActive: JSON.stringify(new Date()),
        username: "Minh Hieu",
    },
];

const FriendList = () => {
    return (
        <Card className="min-w-[350px] bg-white h-full">
            <SearchFriend></SearchFriend>
            <div className="my-5">
                <p className="text-sm font-semibold text-slate-500 my-2">
                    Bạn bè
                </p>
                {friends.map((friend) => {
                    return (
                        <FriendItem key={friend.id} {...friend}></FriendItem>
                    );
                })}
            </div>
        </Card>
    );
};

export default FriendList;
