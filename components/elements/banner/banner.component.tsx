// [Styles]
import * as s from "@components/elements/banner/banner.styled";
// [Types]
import { IBanner } from "@components/elements/banner/banner.types";

export default function Banner({ children, selector, title }: IBanner) {
    return (
        <s.Banner>
            {children ? (
                children
            ) : (
                <>
                    {title && (
                        <s.Title as={title?.as} {...title}>
                            {title.label}
                        </s.Title>
                    )}
                    {selector && (
                        <s.Selector {...selector}>{selector.label}</s.Selector>
                    )}
                </>
            )}
        </s.Banner>
    );
}
