import { useEffect, useState } from "react";
import Link from "next/link";
// [Helpers]
import { getItemByIdFromData } from "@utils/helpers";
// [Components]
import DropdownMenu, {
    MenuPanel,
    Selector,
} from "@components/elements/dropdown-menu/dropdown-menu.component";
import Image from "@components/elements/image/image.component";
import Button from "@components/elements/button/button.component";
// [Icons]
import ChevronIcon from "@components/elements/icons/chevron/chevron.component";
import ArrowIcon from "@components/elements/icons/arrow/arrow.component";
import PlayIcon from "@components/elements/icons/play/play.component";
// [Styles]
import * as s from "@components/layout/header-nav-main/header-nav-main.styled";
// [Types]
import {
    IDropdownPanel,
    IHeaderNavMain,
    IMenuChildren,
    TMenuItems,
} from "@components/layout/header-nav-main/header-nav-main.types";

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
                <s.NavMenuLinks>
                    {item.submenu &&
                        item.submenu?.map(({ path, label }: IMenuChildren) => (
                            <s.NavMenuLinkItem key={path}>
                                <Link href={path}>{label}</Link>
                            </s.NavMenuLinkItem>
                        ))}
                    {item.all && (
                        <>
                            <s.NavMenuLinkDivider />
                            <s.NavMenuAllLink>
                                <Link href={item.all.path}>
                                    {item.all.label} {item.all.icon}
                                </Link>
                            </s.NavMenuAllLink>
                        </>
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
                    </s.NavMenuImageContent>
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
                                <s.NavMenuImagePlayButton>
                                    <Button>
                                        <PlayIcon />
                                    </Button>
                                </s.NavMenuImagePlayButton>
                            )}
                        </>
                    )}
                </s.NavMenuImage>
            </>
        </MenuPanel>
    );
}

export default function HeaderNavMain({}: IHeaderNavMain) {
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
        <s.HeaderNavMain>
            <DropdownMenu>
                <s.HeaderNavItem>
                    <Selector
                        icon={<ChevronIcon />}
                        rotate={true}
                    >
                        {watchMenuData.label}
                    </Selector>
                </s.HeaderNavItem>

                <DropdownPanel
                    id={watchMenuData.id}
                    data={watchMenuData}
                />
            </DropdownMenu>
            <DropdownMenu>
                <s.HeaderNavItem>
                    <Selector
                        icon={<ChevronIcon />}
                        rotate={true}
                    >
                        {resourcesMenuData.label}
                    </Selector>
                </s.HeaderNavItem>
                <DropdownPanel
                    id={resourcesMenuData.id}
                    data={resourcesMenuData}
                />
            </DropdownMenu>

            <s.HeaderNavItem>{classroomMenuData.label}</s.HeaderNavItem>

            <DropdownMenu>
                <s.HeaderNavItem>
                    <Selector
                        icon={<ChevronIcon />}
                        rotate={true}
                    >
                        {aboutMenuData.label}
                    </Selector>
                </s.HeaderNavItem>
                <DropdownPanel
                    id={aboutMenuData.id}
                    data={aboutMenuData}
                />
            </DropdownMenu>

            <s.HeaderNavItem>{giveMenuData.label}</s.HeaderNavItem>
        </s.HeaderNavMain>
    );
}
