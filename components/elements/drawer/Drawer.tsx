import clsx from "clsx";
import { useClickAway } from "react-use";
import {
    ElementType,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import useLockBodyScroll from "@hooks/useLockBodyScroll";
// [Styles]
// import "./Drawer";
// [Types]
export interface IPanel {
    children: ReactNode;
    className?: string;
    close?: ReactNode;
    direction?: "top" | "right" | "bottom" | "left";
}

export interface IDrawer {
    children: ReactNode;
    className?: string;
}

export interface ISelector {
    component?: ElementType;
    className?: string;
    children: ReactNode;
}

export const DrawerContext = createContext<
    [active: boolean, setActive: Function]
>([false, Function]);

export function DrawerSelector({
    children,
    className,
    component = "button",
}: ISelector) {
    const [active, setActive] = useContext(DrawerContext);

    useLockBodyScroll(active);

    const handleActiveState = () => {
        setActive(!active);
    };

    const Component = component;
    return (
        <Component
            className={clsx(
                "Drawer__selector",
                active ? `Drawer__${active}` : ``,
                className
            )}
            onClick={handleActiveState}
        >
            {children}
        </Component>
    );
}

export function DrawerClose({
    children,
    className,
    component = "div",
}: ISelector) {
    const [active, setActive] = useContext(DrawerContext);

    const handleActiveState = () => {
        setActive(false);
    };

    const Component = component;

    return (
        <Component
            className={clsx(
                "Drawer__close",
                active ? `Drawer__${active}` : ``,
                className
            )}
            onClick={handleActiveState}
        >
            {children}
        </Component>
    );
}

export function DrawerPanel({ children, className, direction }: IPanel) {
    const [active, setActive] = useContext(DrawerContext);
    const panelRef = useRef<any>(null);
    useClickAway(panelRef, (e: any) => {
        setActive(false);
    });

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
    }, []);

    return (
        <div
            className={clsx(
                "Drawer__panel",
                `Drawer__${direction}`,
                active ? `Drawer__${active}` : ``,
                className
            )}
            ref={panelRef}
            active={active}
            direction={direction}
        >
            {children}
        </div>
    );
}

export default function Drawer({ children }: IDrawer) {
    const [active, setActive] = useState<boolean>(false);

    return (
        <DrawerContext.Provider value={[active, setActive]}>
            {children}
        </DrawerContext.Provider>
    );
}
