import { useEffect, useState } from "react";
import Link from "next/link";
import useWindowSize from "@hooks/useWindowSize";
// [Helpers]
import { getItemByIdFromData } from "@utils/helpers";
// [Components]
import Avatar from "@components/elements/avatar/Avatar";
import Button from "@components/elements/button/Button";
import DropdownMenu, { Selector } from "@components/elements/dropdown/Dropdown";
import {
    DropdownPanel,
    HeaderNavMainMobile,
    TMenuItems,
} from "@components/layouts/header/HeaderNav";
import Drawer, { DrawerSelector } from "@components/elements/drawer/Drawer";
// [Icons]
import HamburgerIcon from "@components/elements/icons/hamburger/HamburgerIcon";
import LanguageIcon from "@components/elements/icons/language/LanguageIcon";
import ReaderIcon from "@components/elements/icons/reader/ReaderIcon";
import SearchIcon from "@components/elements/icons/search/SearchIcon";
import ArrowIcon from "@components/elements/icons/arrow/ArrowIcon";
// [Styled]
// import "./Header.css";
// [Types]
import { IUser } from "types/user.types";

export interface IHeaderNavUser {
    user: IUser;
}

const NAV_ITEMS: TMenuItems[] = [
    {
        id: "language-menu",
        label: "Watch",
        cta: {
            icon: <ArrowIcon direction="right" />,
            image: {
                alt: "Isaiah 61",
                src: "Isaiah%2061/isaiah-61_rich.jpg",
                type: "Video",
            },
            path: "/explore/video/isaiah-61",
            title: "Isaiah 61",
            subtitle: "Watch the Latest Video",
        },
        submenu: [
            {
                label: "How to Read the Bible",
                path: "/explore/how-to-read-the-bible",
            },
            {
                label: "Themes",
                path: "/explore/themes",
            },
            {
                label: "Word Studies",
                path: "/explore/word-studies",
            },
            {
                label: "Old Testament",
                path: "/explore/book-overviews/old-testament",
            },
            {
                label: "New Testament",
                path: "/explore/book-overviews/new-testament",
            },
            {
                label: "Book Collections",
                path: "/explore/book-collections",
            },
        ],
        all: {
            label: "All Videos",
            path: "/explore",
            icon: <ArrowIcon direction="right" />,
        },
    },
];

export default function HeaderNavUser({ user }: IHeaderNavUser) {
    const [data, setData] = useState<TMenuItems[]>(NAV_ITEMS);
    const size = useWindowSize();

    useEffect(() => {
        setData(NAV_ITEMS);
    }, [setData]);

    const languageMenuData = getItemByIdFromData("language-menu", data)[0];

    const mobile = size.width <= 1023;
    const { authenticated, preferences } = user;

    return (
        <div className="UserNav">
            {mobile ? (
                <>
                    <div className="UserNav__item">
                        <SearchIcon />
                    </div>
                    <div className="UserNav__item">
                        <div className="UserNav__divider" />
                    </div>
                    <div className="UserNav__item">
                        <Drawer>
                            <DrawerSelector>
                                <HamburgerIcon />
                            </DrawerSelector>
                            <HeaderNavMainMobile />
                        </Drawer>
                    </div>
                </>
            ) : (
                <>
                    <div className="UserNav__item">
                        <SearchIcon />
                    </div>
                    <div className="UserNav__item">
                        <ReaderIcon />
                    </div>
                    <DropdownMenu>
                        <div className="UserNav__item">
                            <Selector>
                                <LanguageIcon />
                            </Selector>
                        </div>

                        <DropdownPanel
                            id={languageMenuData.id}
                            data={languageMenuData}
                            position="right"
                        />
                    </DropdownMenu>
                    <div className="UserNav__item">
                        <div className="UserNav__divider" />
                    </div>

                    {!authenticated ? (
                        <>
                            <div className="UserNav__item">
                                <Link href="/login">
                                    <Button>Login</Button>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="UserNav__item">
                            <Link href="/account">
                                <Avatar
                                    className="UserNav__avatar"
                                    user={preferences}
                                    size="md"
                                />
                            </Link>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
