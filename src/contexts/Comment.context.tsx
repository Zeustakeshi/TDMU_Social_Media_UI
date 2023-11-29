import React, {
    Dispatch,
    SetStateAction,
    useContext,
    useRef,
    useState,
} from "react";
import { CommentItemType } from "../common/types/comment.type";

type CommentProviderProps = {
    children: React.ReactNode;
};

type ICommentContext = {
    commentInputRef: React.RefObject<HTMLTextAreaElement>;
    setParentComment: Dispatch<SetStateAction<CommentItemType | null>>;
    parentComment: CommentItemType | null;
};

const CommentContext = React.createContext<ICommentContext | null>(null);

const CommentProvider: React.FC<CommentProviderProps> = ({ children }) => {
    const [parentComment, setParentComment] = useState<CommentItemType | null>(
        null
    );
    const commentInputRef = useRef<HTMLTextAreaElement>(null);

    const values = { commentInputRef, parentComment, setParentComment };
    return (
        <CommentContext.Provider value={values}>
            {children}
        </CommentContext.Provider>
    );
};

const useComment = () => {
    const context = useContext(CommentContext);
    if (typeof context === "undefined" || !context) {
        throw new Error("useComment must be used within CommentProvider");
    }
    return context;
};

export { CommentProvider, useComment };
