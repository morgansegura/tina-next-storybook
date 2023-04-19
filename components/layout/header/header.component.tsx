import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// [Utils]
import { getItemByIdFromData } from "@utils/helpers";
// [Hooks]
import useScrollDirection from "@hooks/useScrollDetection";
//[HOC]
import Portal from "@hoc/portal/portal.component";
//[Components]
import Logo from "@components/elements/logo/logo.component";
import Avatar from "@components/elements/avatar/avatar.component";
import Button from "@components/elements/button/button.component";
import PlayIcon from "@components/elements/icons/play/play.component";
import DropdownMenu from "@components/elements/dropdown-menu/dropdown-menu.component";
// [Icons]
import HamburgerIcon from "@components/elements/icons/hamburger/hamburger.component";
import GlobeIcon from "@components/elements/icons/globe/globe.component";
import SearchIcon from "@components/elements/icons/search/search.component";
import ChevronIcon from "@components/elements/icons/chevron/chevron.component";
import ReaderIcon from "@components/elements/icons/reader/reader.component";
import ArrowIcon from "@components/elements/icons/arrow/arrow.component";
//[Styled]
import * as s from "@components/layout/header/header.styled";
// [Types]
import {
    IDropdownPanel,
    IHeader,
    IMenuChildren,
    IUserMenu,
    TMenuItems,
} from "@components/layout/header/header.types";

const NAV_ITEMS: TMenuItems[] = [
    {
        id: "watch-menu",
        label: "Watch",
        cta: {
            icon: <ArrowIcon direction="right" />,
            image: {
                alt: "Isaiah 61",
                src: "https://ik.imagekit.io/bpweb1/web/media/Isaiah%2061/isaiah-61_rich.jpg?tr=q-65",
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
    {
        id: "resources-menu",
        label: "Resources",
        cta: {
            icon: <ArrowIcon direction="right" />,
            image: {
                alt: "Isaiah 61",
                src: "https://ik.imagekit.io/bpweb1/web/media/Isaiah%2061/isaiah-61_rich.jpg?tr=q-65",
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
    },
    {
        id: "classroom-menu",
        label: "Classroom",
        path: "/classroom/",
    },
    {
        id: "about-menu",
        label: "About",
        cta: {
            icon: <ArrowIcon direction="right" />,
            image: {
                alt: "Isaiah 61",
                src: "https://ik.imagekit.io/bpweb1/web/media/Isaiah%2061/isaiah-61_rich.jpg?tr=q-65",
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
    },
    {
        id: "give-menu",
        label: "Give",
        path: "/give/",
    },
];

function HeaderLogo() {
    return (
        <Link href="/">
            <s.LogoSvg>
                <Logo />
            </s.LogoSvg>
        </Link>
    );
}

export function NavMenu() {
    const [data, setData] = useState<TMenuItems[]>(NAV_ITEMS);

    useEffect(() => {
        setData(NAV_ITEMS);
    }, [setData]);

    const watchMenuData = getItemByIdFromData("watch-menu", data)[0];
    const resourcesMenuData = getItemByIdFromData("resources-menu", data)[0];
    const classroomMenuData = getItemByIdFromData("classroom-menu", data)[0];
    const aboutMenuData = getItemByIdFromData("about-menu", data)[0];
    const giveMenuData = getItemByIdFromData("give-menu", data)[0];

    return (
        <s.NavMenu>
            <s.NavItem>
                <DropdownMenu
                    selector={watchMenuData.label}
                    menu={
                        <DropdownPanel
                            id={watchMenuData.id}
                            data={watchMenuData}
                        />
                    }
                />
                <ChevronIcon />
            </s.NavItem>
            <s.NavItem>
                <DropdownMenu
                    selector={resourcesMenuData.label}
                    menu={
                        <DropdownPanel
                            id={resourcesMenuData.id}
                            data={resourcesMenuData}
                        />
                    }
                />
                <ChevronIcon />
            </s.NavItem>
            <s.NavItem>{classroomMenuData.label}</s.NavItem>
            <s.NavItem>
                <DropdownMenu
                    selector={aboutMenuData.label}
                    menu={
                        <DropdownPanel
                            id={aboutMenuData.id}
                            data={aboutMenuData}
                        />
                    }
                />
                <ChevronIcon />
            </s.NavItem>
            <s.NavItem>{giveMenuData.label}</s.NavItem>
        </s.NavMenu>
    );
}

function DropdownPanel({ id, data }: IDropdownPanel) {
    const item = data;

    return (
        <s.NavMenuPanel>
            <s.NavMenuLinks>
                {item.submenu &&
                    item.submenu?.map(({ path, label }: IMenuChildren) => (
                        <s.NavItem key={path}>
                            <Link href={path}>{label}</Link>
                        </s.NavItem>
                    ))}
                <s.NavMenuLinkDivider />
                {item.all && (
                    <Link href={item.all.path}>
                        <s.NavMenuAllLink>
                            {item.all.label} {item.all.icon}
                        </s.NavMenuAllLink>
                    </Link>
                )}
            </s.NavMenuLinks>
            <s.NavMenuImage>
                <s.NavMenuImageContent>
                    {item.cta?.subtitle && (
                        <s.NavMenuImageSubtitle>
                            {item.cta.subtitle}
                        </s.NavMenuImageSubtitle>
                    )}
                    {item.cta?.title && (
                        <s.NavMenuImageTitle>
                            {item.cta.title}
                        </s.NavMenuImageTitle>
                    )}
                    <s.NavMenuImagePlayButton>
                        <Button>
                            <PlayIcon />
                        </Button>
                    </s.NavMenuImagePlayButton>
                </s.NavMenuImageContent>
                {item.cta?.image && (
                    <Image
                        src={item.cta.image.src}
                        alt={item.cta.image.alt}
                        fill
                    />
                )}
            </s.NavMenuImage>
        </s.NavMenuPanel>
    );
}

function UserMenu({ user }: IUserMenu) {
    return (
        <s.UserMenu>
            <s.NavItem>
                <SearchIcon />
            </s.NavItem>

            <s.NavItem>
                <ReaderIcon />
            </s.NavItem>
            <s.NavItem>
                <GlobeIcon />
            </s.NavItem>
            <s.NavItem selectable={false}>
                <s.UserMenuLinkDivider />
            </s.NavItem>
            <s.NavItem>
                <Avatar user={user} size="32" />
            </s.NavItem>
            <s.NavItem>
                <HamburgerIcon />
            </s.NavItem>
        </s.UserMenu>
    );
}

export default function Header({ user }: IHeader) {
    const { scrollDirection, distance } = useScrollDirection();

    useEffect(() => {}, []);

    let scrolling =
        scrollDirection === "down" && distance > 105
            ? "fade-out"
            : scrollDirection === "up" && distance > 0
            ? "fade-in"
            : ``;

    return (
        <s.Wrapper animateScrollDirection={scrolling}>
            <s.Contain animateScrollDirection={scrolling}>
                <HeaderLogo />
                <NavMenu />
                <UserMenu user={user} />
            </s.Contain>
        </s.Wrapper>
    );
}
