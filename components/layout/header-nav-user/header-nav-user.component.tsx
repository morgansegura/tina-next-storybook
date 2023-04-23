import { useEffect, useState } from "react";
import Link from "next/link";
// [Helpers]
import { getItemByIdFromData } from "@utils/helpers";
// [Components]
import Avatar from "@components/elements/avatar/avatar.component";
import Button from "@components/elements/button/button.component";
import DropdownMenu, {
    Selector,
} from "@components/elements/dropdown-menu/dropdown-menu.component";
import { DropdownPanel } from "@components/layout/header-nav-main/header-nav-main.component";
// [Icons]
import HamburgerIcon from "@components/elements/icons/hamburger/hamburger.component";
import LanguageIcon from "@components/elements/icons/language/language.component";
import ReaderIcon from "@components/elements/icons/reader/reader.component";
import SearchIcon from "@components/elements/icons/search/search.component";
import ArrowIcon from "@components/elements/icons/arrow/arrow.component";
// [Styled]
import * as s from "@components/layout/header-nav-user/header-nav-user.styled";
// [Types]
import { IHeaderNavUser } from "@components/layout/header-nav-user/header-nav-user.types";
import { TMenuItems } from "@components/layout/header-nav-main/header-nav-main.types";

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

    useEffect(() => {
        setData(NAV_ITEMS);
    }, [setData]);

    const languageMenuData = getItemByIdFromData("language-menu", data)[0];

    const mobile = false;
    const { authenticated, preferences } = user;

    return (
        <s.UserMenu>
            {mobile ? (
                <>
                    <s.UserMenuNavItem>
                        <HamburgerIcon />
                    </s.UserMenuNavItem>
                </>
            ) : (
                <>
                    <s.UserMenuNavItem>
                        <SearchIcon />
                    </s.UserMenuNavItem>
                    <s.UserMenuNavItem>
                        <ReaderIcon />
                    </s.UserMenuNavItem>
                    <DropdownMenu>
                        <s.UserMenuNavItem>
                            <Selector>
                                <LanguageIcon />
                            </Selector>
                        </s.UserMenuNavItem>

                        <DropdownPanel
                            id={languageMenuData.id}
                            data={languageMenuData}
                            position="right"
                        />
                    </DropdownMenu>
                    <s.UserMenuNavItem selectable={false}>
                        <s.UserMenuLinkDivider />
                    </s.UserMenuNavItem>

                    {!authenticated ? (
                        <>
                            <s.UserMenuNavItem>
                                <Link href="/login">
                                    <Button variant="header-login">
                                        Login
                                    </Button>
                                </Link>
                            </s.UserMenuNavItem>
                        </>
                    ) : (
                        <s.UserMenuNavItem>
                            <Link href="/account">
                                <Avatar
                                    user={preferences}
                                    properties={{ size: 32 }}
                                />
                            </Link>
                        </s.UserMenuNavItem>
                    )}
                </>
            )}
        </s.UserMenu>
    );
}
