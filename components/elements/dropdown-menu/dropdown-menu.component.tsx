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
    [active: boolean, setActive: Function, x: number, setX: Function]
>([false, Function, 0, Function]);

export default function DropdownMenu({ children }: IDropdownMenu) {
    const [active, setActive] = useState<boolean>(false);
    const [x, setX] = useState<number>(0);

    return (
        <DropdownContext.Provider value={[active, setActive, x, setX]}>
            {children}
        </DropdownContext.Provider>
    );
}

export function Selector({ children, icon }: ISelector) {
    const selectorRef = useRef<any>(null);
    const [active, setActive, x, setX] = useContext(DropdownContext);

    useEffect(() => {
        const dropdownWidth = 867 / 2;
        const selectorWidth =
            selectorRef.current?.getBoundingClientRect().width / 2;
        const selectorOffset =
            selectorRef.current?.getBoundingClientRect().left - selectorWidth;
        const xPos = selectorOffset - dropdownWidth;

        setX(xPos);
    }, []);

    useEffect(() => {
        const getPosition = () => {
            const dropdownWidth = 867 / 2;
            const selectorWidth =
                selectorRef.current?.getBoundingClientRect().width / 2;
            const selectorOffset =
                selectorRef.current?.getBoundingClientRect().left -
                selectorWidth;
            const xPos = selectorOffset - dropdownWidth;
            setX(xPos);
        };
        window.addEventListener("resize", getPosition);

        return () => window.removeEventListener("resize", getPosition, true);
    }, []);

    const handleActiveState = () => {
        setActive(!active);
    };

    return (
        <s.Selector
            ref={selectorRef}
            onClick={handleActiveState}
            active={active}
        >
            {children} {icon}
        </s.Selector>
    );
}
export function MenuPanel({ as, children }: IMenu) {
    const dropdownRef = useRef<any>(null);
    const [active, setActive, x, setX] = useContext(DropdownContext);

    useClickAway(dropdownRef, (e: any) => {
        setActive(false);
    });

    // useEffect(() => {
    //     const handleCloseOnClickOutside = (e: { target: any }) => {
    //         if (dropdownRef?.current?.contains(e.target)) {
    //             active ? setActive(false) : setActive(true);
    //         } else if (
    //             dropdownRef.current &&
    //             !dropdownRef.current.contains(e.target)
    //         ) {
    //             setActive(false);
    //         }
    //         console.log(dropdownRef.current.contains(e.target));
    //     };

    //     document.addEventListener("click", handleCloseOnClickOutside, true);

    //     return () =>
    //         document.removeEventListener(
    //             "click",
    //             handleCloseOnClickOutside,
    //             true
    //         );
    // }, []);

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
                ref={dropdownRef}
                active={active}
                setActive={setActive}
                xPos={x}
            >
                {children}
            </s.MenuPanel>
        </Portal>
    );
}
