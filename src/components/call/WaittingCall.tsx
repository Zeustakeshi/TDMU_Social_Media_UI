import Avatar from "../avatar/Avatar";

const WaittingCall = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
            <Avatar size={150}></Avatar>
            <p className="text-3xl font-semibold">Minh Hieu</p>
            <p className="text-slate-600">Đang gọi....</p>
        </div>
    );
};

export default WaittingCall;
