// [Styles]
import * as s from "@components/elements/icons/social/facebook/facebook.styled";
// [Types]
import { IFacebook } from "@components/elements/icons/social/facebook/facebook.types";

export default function FacebookIcon({
    fill,
    height,
    width,
    viewBox,
}: IFacebook) {
    return (
        <s.IconSvg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <s.IconSvgPath
                d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}
