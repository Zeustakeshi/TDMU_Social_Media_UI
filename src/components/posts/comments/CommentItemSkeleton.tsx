import { Skeleton } from "@mui/material";

const CommentItemSkeleton = () => {
    return (
        <div className="my-2">
            <div className="flex justify-start items-start gap-4 max-w-max ">
                <div className="w-[30px] h-[30px] mt-2">
                    <Skeleton variant="circular" width={30} height={30} />
                </div>
                <div className="w-full max-w-max  min-w-[320px] ">
                    <div className="bg-slate-100 px-5 py-3 rounded-lg ">
                        <div className="flex w-full justify-between items-center">
                            <Skeleton
                                variant="text"
                                className="text-xl w-[120px]"
                            />
                        </div>
                        <p>
                            <Skeleton variant="text" className="text-xl" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentItemSkeleton;
