import { useEffect, useRef } from "react";

export default function useClickOutSide<T extends HTMLElement = HTMLElement>(
    callback?: () => void,
    refControl?: any
) {
    const nodeRef = useRef<T>(null);
    useEffect(() => {
        function handleClickOutSide(this: Document, ev: MouseEvent) {
            if (
                (nodeRef.current &&
                    nodeRef.current.contains(ev.target as Node)) ||
                (refControl && refControl.current?.contains(ev.target as Node))
            ) {
                return;
            }
            callback?.();
            // if (
            //     nodeRef.current &&
            //     !nodeRef.current.contains(ev.target as Node) &&
            //     refControl &&
            //     !refControl.current?.contains(ev.target as Node)
            // ) {
            // }
        }
        document.addEventListener("click", handleClickOutSide);
        return () => {
            document.removeEventListener("click", handleClickOutSide);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        nodeRef,
    };
}
