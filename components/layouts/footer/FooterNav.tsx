import { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
// [Icons]
import AndroidIcon from "@components/elements/icons/brand/android/AndroidIcon";
import AppleIcon from "@components/elements/icons/brand/apple/AppleIcon";
import FacebookIcon from "@components/elements/icons/brand/facebook/FacebookIcon";
import InstagramIcon from "@components/elements/icons/brand/instagram/InstagramIcon";
import PinterestIcon from "@components/elements/icons/brand/pinterest/PinterestIcon";
import SpotifyIcon from "@components/elements/icons/brand/spotify/SpotifyIcon";
import TiktokIcon from "@components/elements/icons/brand/tiktok/TiktokIcon";
import TwitterIcon from "@components/elements/icons/brand/twitter/Twitter";
// [Styles]
// import "./Footer.css";
// [Types]
export interface IFooterNav {}

export type TNavItem = {
    label: string;
    icon?: ReactNode;
    path: string;
    title?: string;
    target?: string;
    width?: number;
    height?: number;
    order?: number;
};

export function FooterMainNav({}: IFooterNav) {
    const mainNav = [
        {
            label: "Get Support",
            title: "Get Support",
            path: "/support",
            order: 1,
        },
        {
            label: "Careers",
            title: "Careers",
            path: "/careers",
            order: 3,
        },
        {
            label: "Privacy Policy",
            title: "Privacy Policy",
            path: "/privacy",
            order: 5,
        },
        {
            label: "Terms of Use",
            title: "Terms of Use",
            path: "/terms",
            order: 2,
        },
        {
            label: "Report a Bug",
            title: "Report a Bug",
            path: "/bugs",
            order: 4,
        },
    ];

    return (
        <nav className="FooterNav">
            {mainNav.map((item: TNavItem) => (
                <div
                    className={clsx("FooterNav__item")}
                    key={item.path}
                    data-title={item?.title}
                    // order={item?.order}
                >
                    <Link
                        href={item.path}
                        target={item?.target}
                    >
                        {item.label}
                    </Link>
                </div>
            ))}
        </nav>
    );
}

export function FooterAppNav({}: IFooterNav) {
    const appNav = [
        {
            label: "Apple Store",
            icon: <AppleIcon />,
            title: "BibleProject in Apple Store",
            path: "https://apps.apple.com/us/app/bibleproject/id1523687027",
            target: "_blank",
        },
        {
            label: "Google Play",
            icon: <AndroidIcon />,
            title: "BibleProject in Google Play",
            path: "https://play.google.com/store/apps/details?id=com.bibleproject",
            target: "_blank",
        },
    ];

    return (
        <div className="SocialNav__wrapper">
            <h4 className="Footer__title">Download the App</h4>
            <div className="SocialNav">
                {appNav.map((item: TNavItem) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        data-title={item?.title}
                        target={item?.target}
                    >
                        <span
                            className="SocialNav__item"
                            properties={{
                                width: item?.width,
                                height: item?.height,
                            }}
                        >
                            {item.icon}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function FooterSocialNav({}: IFooterNav) {
    const socialNav = [
        {
            label: "Facebook",
            icon: <FacebookIcon />,
            path: "https://www.facebook.com/jointhebibleproject/",
            title: "BibleProject on Facebook",
            target: "_blank",
        },
        {
            label: "Twitter",
            icon: <TwitterIcon />,
            title: "BibleProject on Twitter",
            path: "https://twitter.com/bibleproject",
            target: "_blank",
        },
        {
            label: "Instagram",
            icon: <InstagramIcon />,
            title: "BibleProject on Instagram",
            path: "https://www.instagram.com/thebibleproject",
            target: "_blank",
        },
        {
            label: "Pinterest",
            icon: <PinterestIcon />,
            title: "BibleProject on Pinterest",
            path: "https://www.pinterest.com/thebibleproject/",
            target: "_blank",
        },
        {
            label: "Spotify",
            icon: <SpotifyIcon />,
            title: "BibleProject in Spotify",
            path: "https://open.spotify.com/show/6f2oD3RtQY1rOeyfF2OeOa/",
            target: "_blank",
        },
        {
            label: "TikTok",
            icon: <TiktokIcon />,
            title: "BibleProject on TikTok",
            path: "https://www.tiktok.com/@bibleproject/",
            target: "_blank",
        },
    ];

    return (
        <div className="SocialNav__wrapper">
            <h4 className="Footer__section--title">Follow Us</h4>
            <nav className="">
                {socialNav.map((item: TNavItem) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        data-title={item?.title}
                        target={item?.target}
                    >
                        <span
                            className="SocialNav__item"
                            properties={{
                                width: item?.width,
                                height: item?.height,
                            }}
                        >
                            {item.icon}
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default function FooterNav({}: IFooterNav) {
    return (
        <>
            <FooterMainNav />
            <FooterSocialNav />
            <FooterAppNav />
        </>
    );
}
