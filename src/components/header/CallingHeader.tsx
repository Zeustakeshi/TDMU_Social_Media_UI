import React, { useState } from "react";
import { ModalCalling } from "../modals/call";

type Props = {
    className?: string;
};

const CallingHeader: React.FC<Props> = ({ className }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div
                onClick={() => setShowModal((prev) => !prev)}
                className={`sticky z-40 p-2 flex justify-start items-center gap-5 bg-slate-50 border-y-slate-100 border-y backdrop-blur bg-opacity-60 ${className}`}
            >
                <div className="relative rounded-full w-4 h-4 flex justify-center items-center ">
                    <span className=" w-full h-full inline-block rounded-[inherit]  bg-[#ef4444] animate-ping"></span>
                    <span className="w-2 h-2 abs-center   bg-[#ef4444] rounded-[inherit] animate-none"></span>
                </div>
                <p className="text-slate-700 font-medium">Quay lại cuộc gọi</p>
            </div>
            {showModal && (
                <ModalCalling
                    open={showModal}
                    setShowModal={setShowModal}
                    onClose={() => setShowModal(false)}
                ></ModalCalling>
            )}
        </>
    );
};

export default CallingHeader;
