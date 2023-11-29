import Avatar from "../avatar/Avatar";

const AcceptCall = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
            <Avatar size={150}></Avatar>
            <p className="text-3xl font-semibold">Minh Hieu</p>
        </div>
    );
};

export default AcceptCall;
