// [Icons]
import AndroidIcon from "@components/elements/icons/social/android/android.component";
import AppleIcon from "@components/elements/icons/social/apple/apple.component";
import FacebookIcon from "@components/elements/icons/social/facebook/facebook.component";
import InstagramIcon from "@components/elements/icons/social/instagram/instagram.component";
import PinterestIcon from "@components/elements/icons/social/pinterest/pinterest.component";
import SpotifyIcon from "@components/elements/icons/social/spotify/spotify.component";
import TiktokIcon from "@components/elements/icons/social/tiktok/tiktok.component";
import TwitterIcon from "@components/elements/icons/social/twitter/twitter.component";
// [Styles]
import * as s from "@components/layout/footer-nav/footer-nav.styled";
// [Types]
import {
    IFooterNav,
    TNavItem,
} from "@components/layout/footer-nav/footer-nav.types";
import Link from "next/link";

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
        <s.FooterNavMain>
            {mainNav.map((item: TNavItem) => (
                <s.FooterNavMainItem
                    key={item.path}
                    data-title={item?.title}
                    order={item?.order}
                >
                    <Link href={item.path} target={item?.target}>
                        {item.label}
                    </Link>
                </s.FooterNavMainItem>
            ))}
        </s.FooterNavMain>
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
        <s.SocialNavWrapper>
            <s.SectionTitle>Download the App</s.SectionTitle>
            <s.SocialNav>
                {appNav.map((item: TNavItem) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        data-title={item?.title}
                        target={item?.target}
                    >
                        <s.SocialNavItem
                            properties={{
                                width: item?.width,
                                height: item?.height,
                            }}
                        >
                            {item.icon}
                        </s.SocialNavItem>
                    </Link>
                ))}
            </s.SocialNav>
        </s.SocialNavWrapper>
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
        <s.SocialNavWrapper>
            <s.SectionTitle>Follow Us</s.SectionTitle>
            <s.SocialNav>
                {socialNav.map((item: TNavItem) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        data-title={item?.title}
                        target={item?.target}
                    >
                        <s.SocialNavItem
                            properties={{
                                width: item?.width,
                                height: item?.height,
                            }}
                        >
                            {item.icon}
                        </s.SocialNavItem>
                    </Link>
                ))}
            </s.SocialNav>
        </s.SocialNavWrapper>
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
