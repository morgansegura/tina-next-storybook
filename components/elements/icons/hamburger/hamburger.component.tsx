// [Styles]
import * as s from "@components/elements/icons/hamburger/hamburger.styled";
// [Types]
import { IHamburger } from "@components/elements/icons/hamburger/hamburger.types";

export default function HamburgerIcon({
    fill,
    height,
    width,
    viewBox,
}: IHamburger) {
    return (
        <s.IconSvg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <s.IconSvgPath
                d="M0 0.9375C0 0.429688 0.390625 0 0.9375 0H16.5625C17.0703 0 17.5 0.429688 17.5 0.9375C17.5 1.48438 17.0703 1.875 16.5625 1.875H0.9375C0.390625 1.875 0 1.48438 0 0.9375ZM2.5 7.1875C2.5 6.67969 2.89062 6.25 3.4375 6.25H19.0625C19.5703 6.25 20 6.67969 20 7.1875C20 7.73438 19.5703 8.125 19.0625 8.125H3.4375C2.89062 8.125 2.5 7.73438 2.5 7.1875ZM16.5625 14.375H0.9375C0.390625 14.375 0 13.9844 0 13.4375C0 12.9297 0.390625 12.5 0.9375 12.5H16.5625C17.0703 12.5 17.5 12.9297 17.5 13.4375C17.5 13.9844 17.0703 14.375 16.5625 14.375Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}
