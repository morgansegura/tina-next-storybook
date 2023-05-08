import { useState, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
// [Types]
export type TPortal = {
    children: ReactNode;
};

export default function Portal({ children }: TPortal) {
    const [mounted, setMouounted] = useState<boolean>(false);

    useEffect(() => {
        setMouounted(true);

        return () => setMouounted(false);
    }, []);

    return mounted
        ? createPortal(children, document.querySelector("#root") as Element)
        : null;
}
