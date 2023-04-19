import { useRef, useState } from "react";
// [Components]
import Portal from "@hoc/portal/portal.component";
// [Styles]
import * as s from "@components/elements/dropdown-menu/dropdown-menu.styled";
// [Types]
import { IDropdownMenu } from "@components/elements/dropdown-menu/dropdown-menu.types";

export default function DropdownMenu({ as, menu, selector }: IDropdownMenu) {
    const dropdownRef = useRef(null);
    const [active, setActive] = useState<boolean>(false);

    const handleActiveState = () => {
        setActive(!active);
        console.log(active);
    };

    return (
        <>
            <s.Selector as={as} onClick={handleActiveState} active={active}>
                {selector}
            </s.Selector>
            <Portal>
                <s.MenuPanel
                    ref={dropdownRef}
                    active={active ? "cool" : "not-cool"}
                    setActive={setActive}
                >
                    {menu}
                </s.MenuPanel>
            </Portal>
        </>
    );
}
