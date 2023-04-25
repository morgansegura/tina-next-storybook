import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
// [Components]
import Portal from "@hoc/portal/portal.component";
// [Styles]
import * as s from "@components/elements/dropdown-menu/dropdown-menu.styled";
// [Types]
import {
    IDropdownMenu,
    IMenu,
    ISelector,
} from "@components/elements/dropdown-menu/dropdown-menu.types";

export const DropdownContext = createContext<
    [
        active: boolean,
        setActive: Function,
        x: number,
        setX: Function,
        width: number,
        setWidth: Function
    ]
>([false, Function, 0, Function, 0, Function]);

export default function DropdownMenu({ children }: IDropdownMenu) {
    const [active, setActive] = useState<boolean>(false);
    const [x, setX] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);

    return (
        <DropdownContext.Provider
            value={[active, setActive, x, setX, width, setWidth]}
        >
            {children}
        </DropdownContext.Provider>
    );
}

export function Selector({ children, icon, rotate }: ISelector) {
    const selectorRef = useRef<any>(null);
    const [active, setActive, x, setX, width, setWidth] =
        useContext(DropdownContext);

    useClickAway(selectorRef, (e: any) => {
        setActive(false);
    });

    const getSelectorPosition = () => {
        const selectorWidth =
            selectorRef.current?.getBoundingClientRect().width / 2;
        const selectorOffset =
            selectorRef.current?.getBoundingClientRect().left - selectorWidth;

        setX(selectorOffset);
        setWidth(selectorWidth);
    };

    useEffect(() => {
        getSelectorPosition();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", getSelectorPosition, true);

        return () =>
            window.removeEventListener("resize", getSelectorPosition, true);
    }, []);

    const handleActiveState = () => {
        setActive(!active);
    };

    return (
        <s.Selector
            ref={selectorRef}
            onClick={handleActiveState}
            properties={{ active, rotate }}
        >
            {children} {icon}
        </s.Selector>
    );
}
export function MenuPanel({ as, children, position, forceArrowPosX }: IMenu) {
    const panelRef = useRef<any>(null);
    const [active, setActive, x, setX, width, setWidth] =
        useContext(DropdownContext);

    useEffect(() => {
        const keyPressBlur = () => {
            setActive(false);
        };
        const close = (e: any) => {
            if (e.keyCode === 27) {
                keyPressBlur();
            }
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, [setActive]);

    const handleCloseOnScroll = () => {
        setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleCloseOnScroll);

        return () => window.removeEventListener("scroll", handleCloseOnScroll);
    }, []);

    return (
        <Portal>
            <s.MenuPanel
                as={as}
                ref={panelRef}
                setActive={setActive}
                properties={{
                    active,
                    posX: x,
                    position,
                    width,
                    forceArrowPosX,
                }}
            >
                {children}
            </s.MenuPanel>
        </Portal>
    );
}
