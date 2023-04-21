// [Components]
import Avatar from "@components/elements/avatar/avatar.component";
import Button from "@components/elements/button/button.component";
// [Icons]
import HamburgerIcon from "@components/elements/icons/hamburger/hamburger.component";
import LanguageIcon from "@components/elements/icons/language/language.component";
import ReaderIcon from "@components/elements/icons/reader/reader.component";
import SearchIcon from "@components/elements/icons/search/search.component";
// [Styled]
import * as s from "@components/layout/header-nav-user/header-nav-user.styled";
// [Types]
import { IHeaderNavUser } from "@components/layout/header-nav-user/header-nav-user.types";

export default function HeaderNavUser({ user }: IHeaderNavUser) {
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
                    <s.UserMenuNavItem>
                        <LanguageIcon />
                    </s.UserMenuNavItem>
                    <s.UserMenuNavItem selectable={false}>
                        <s.UserMenuLinkDivider />
                    </s.UserMenuNavItem>

                    {!authenticated ? (
                        <>
                            <s.UserMenuNavItem>
                                <Button variant="header-login">Login</Button>
                            </s.UserMenuNavItem>
                        </>
                    ) : (
                        <s.UserMenuNavItem>
                            <Avatar user={preferences} size={32} />
                        </s.UserMenuNavItem>
                    )}
                </>
            )}
        </s.UserMenu>
    );
}
