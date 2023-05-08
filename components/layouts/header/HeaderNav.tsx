import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Portal from "@hoc/portal/Portal";
// [Helpers]
import { getItemByIdFromData } from "@utils/helpers";
// [Components]
import DropdownMenu, {
    MenuPanel,
    Selector,
} from "@components/elements/dropdown/Dropdown";
import { DrawerPanel, DrawerClose } from "@components/elements/drawer/Drawer";
import Image from "@components/elements/imagekit/Imagekit";
import Button from "@components/elements/button/Button";
// [Icons]
import ChevronIcon from "@components/elements/icons/chevron/ChevronIcon";
import ArrowIcon from "@components/elements/icons/arrow/ArrowIcon";
import PlayIcon from "@components/elements/icons/play/PlayIcon";
import GlobeIcon from "@components/elements/icons/globe/Globe";
import Logo from "@components/elements/logo/Logo";
import CloseIcon from "@components/elements/icons/close/CloseIcon";
import ReaderIcon from "@components/elements/icons/reader/ReaderIcon";
// [Styles]
// import "./Header.css";
// [Types]
export interface IHeaderNavMain {}

export interface IMenuChildren {
    label?: string;
    path: string;
    target?: string;
    icon?: ReactNode;
}

export interface IMenuCta {
    icon?: ReactNode;
    image?: {
        alt: string;
        src: string;
        type?: string;
    };
    path?: string;
    title?: string;
    subtitle?: string;
}

export type TMenuItems = {
    id: string | number;
    label?: string;
    path?: string;
    cta?: IMenuCta;
    submenu?: IMenuChildren[];
    all?: IMenuChildren;
};

export interface IDropdownPanel {
    id: string | number;
    data: TMenuItems;
    forceArrowPosX?: number;
    position?: "center" | "right" | "left";
}

const NAV_ITEMS: TMenuItems[] = [
    {
        id: "watch-menu",
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
    {
        id: "resources-menu",
        label: "Resources",
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
    },
    {
        id: "give-menu",
        label: "Give",
        path: "/give/",
    },
];

export function DropdownPanel({ id, data, position }: IDropdownPanel) {
    const item = data;

    return (
        <MenuPanel position={position}>
            <>
                <nav className="NavMenu__links">
                    {item.submenu &&
                        item.submenu?.map(({ path, label }: IMenuChildren) => (
                            <div
                                className="NavMenu__item"
                                key={path}
                            >
                                <Link href={path}>{label}</Link>
                            </div>
                        ))}
                    {item.all && (
                        <>
                            <div className="NavMenu__divider" />
                            <div className="NavMenu__all">
                                <Link href={item.all.path}>
                                    {item.all.label} {item.all.icon}
                                </Link>
                            </div>
                        </>
                    )}
                </nav>
                <div className="NavMenu__image">
                    <div className="NavMenu__content">
                        {item.cta?.subtitle && (
                            <div className="NavMenu__subtitle">
                                {item.cta.subtitle}
                            </div>
                        )}
                        {item.cta?.title && (
                            <div className="NavMenu__title">
                                {item.cta.title}
                            </div>
                        )}
                    </div>
                    {item.cta?.image && (
                        <>
                            <Image
                                fill={true}
                                quality={65}
                                sizes="(max-width: 420px) 100vw"
                                src={item.cta.image.src}
                                alt={item.cta.image.alt}
                            />
                            {item.cta?.image.type && (
                                <div className="NavMenu__play">
                                    <Button>
                                        <PlayIcon />
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </>
        </MenuPanel>
    );
}

export function HeaderNavMainMobile({}: IHeaderNavMain) {
    return (
        <Portal>
            <DrawerPanel direction="right">
                <div className="MobileNav">
                    <div className="Toolbar">
                        <div className="MobileNav__logo">
                            <Logo />
                        </div>
                        <nav className="Toolbar__nav">
                            <div className="MobileNav__item">
                                <ReaderIcon />
                            </div>
                            <div className="MobileNav__item">
                                <GlobeIcon />
                            </div>
                            <div
                                className="MobileNav__item"
                                selectable={false}
                            >
                                <div className="MobileNav__divider" />
                            </div>
                            <div className="MobileNav__item">
                                <DrawerClose>
                                    <CloseIcon />
                                </DrawerClose>
                            </div>
                        </nav>
                    </div>
                </div>
            </DrawerPanel>
        </Portal>
    );
}

export default function HeaderNavMain({ user }: IHeaderNavMain) {
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
        <nav className="MainNav">
            <DropdownMenu>
                <div className="MainNav__item">
                    <Selector
                        className="MainNav__selector"
                        icon={<ChevronIcon />}
                        rotate={true}
                    >
                        {watchMenuData.label}
                    </Selector>
                </div>

                <DropdownPanel
                    id={watchMenuData.id}
                    data={watchMenuData}
                />
            </DropdownMenu>
            <DropdownMenu>
                <div className="MainNav__item">
                    <Selector
                        className="MainNav__selector"
                        icon={<ChevronIcon />}
                        rotate={true}
                    >
                        {resourcesMenuData.label}
                    </Selector>
                </div>
                <DropdownPanel
                    id={resourcesMenuData.id}
                    data={resourcesMenuData}
                />
            </DropdownMenu>

            <div className="NavMenu__divider" />

            <DropdownMenu>
                <div className="MainNav__item">
                    <Selector
                        className="MainNav__selector"
                        icon={<ChevronIcon />}
                        rotate={true}
                    >
                        {aboutMenuData.label}
                    </Selector>
                </div>
                <DropdownPanel
                    id={aboutMenuData.id}
                    data={aboutMenuData}
                />
            </DropdownMenu>

            <div className="MainNav__item">{giveMenuData.label}</div>
        </nav>
    );
}
