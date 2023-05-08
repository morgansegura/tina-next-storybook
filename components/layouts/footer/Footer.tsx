import { ReactNode } from "react";
// [Components]
import Banner from "@components/elements/banner/Banner";
// import { LogoIcon } from "@components/elements/logo/logo.component";
// import Spacer from "@components/elements/spacer/spacer.component";
// import Subscribe from "@components/elements/subscribe/subscribe.component";
// import FooterNav, {
//     FooterAppNav,
//     FooterMainNav,
//     FooterSocialNav,
// } from "@components/layouts/footer-nav/footer-nav.component";
// [Styles]
// import "./Footer.css";
import Button from "@components/elements/button/Button";
// [Types]
export interface IFooter {
    children?: ReactNode;
}

export default function Footer({ children }: IFooter) {
    return (
        <footer className="Footer">
            <div className="Footer__contain">
                <div className="Footer__banner">
                    <Banner variant="footer">
                        <h1>
                            Everything we make is available for free because of
                            a generous community of supporters.
                        </h1>
                        <Button className="Footer__selector">
                            Support BibleProject
                        </Button>
                    </Banner>
                </div>

                {/* <Spacer
                    bottom
                    top
                    variant={{ bg: "ebony", border: "center-dashed-rainbow" }}
                /> */}

                <div className="Footer__grid">
                    <div className="Footer__icon">
                        {/* <LogoIcon
                            width={50}
                            height={50}
                        /> */}
                    </div>

                    {/* <FooterMainNav /> */}

                    <div>
                        {/* <FooterSocialNav />
                        <FooterAppNav /> */}
                    </div>

                    {/* <Subscribe
                        variant="footer"
                        title="Receive BibleProject videos and updates in your inbox."
                    /> */}
                </div>

                <div className="Footer__copyright">
                    &copy; Copyright {new Date().getFullYear()} BibleProject
                </div>
            </div>
        </footer>
    );
}
