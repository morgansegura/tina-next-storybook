// [Components]
import { Container } from "@components/elements/container";
import { LogoIcon } from "@components/elements/logo/logo.component";
import Subscribe from "@components/elements/subscribe/subscribe.component";
import FooterNav, {
    FooterAppNav,
    FooterMainNav,
    FooterSocialNav,
} from "@components/layout/footer-nav/footer-nav.component";
// [Styles]
import * as s from "@components/layout/footer/footer.styled";
// [Types]
import { IFooter } from "@components/layout/footer/footer.types";

export default function Footer({ children }: IFooter) {
    return (
        <s.Footer>
            <s.Contain>
                <s.Banner>
                    <s.Title>
                        Everything we make is available for free because of a
                        generous community of supporters.
                    </s.Title>
                    <s.Selector>Support BibleProject</s.Selector>
                </s.Banner>

                <s.Grid>
                    <s.IconContainer>
                        <LogoIcon width={50} height={50} />
                    </s.IconContainer>

                    <FooterMainNav />

                    <div>
                        <FooterSocialNav />
                        <FooterAppNav />
                    </div>

                    <Subscribe
                        variant="footer"
                        title="Receive BibleProject videos and updates in your inbox."
                    />
                </s.Grid>

                <s.Copyright>
                    &copy; Copyright {new Date().getFullYear()} BibleProject
                </s.Copyright>
            </s.Contain>
        </s.Footer>
    );
}
