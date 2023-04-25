// [Styles]
import * as s from "@components/elements/icons/arrow/arrow.styled";
// [Types]
import { IArrow } from "@components/elements/icons/arrow/arrow.types";

export default function ArrowIcon({
    direction,
    fill,
    height,
    width,
    viewBox,
}: IArrow) {
    return (
        <s.IconSvg
            direction={direction}
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <s.IconSvgPath
                d="M13.6875 7.71875C14.0938 7.34375 14.0938 6.6875 13.6875 6.3125L8.6875 1.3125C8.3125 0.90625 7.65625 0.90625 7.28125 1.3125C6.875 1.6875 6.875 2.34375 7.28125 2.71875L10.5625 6H1C0.4375 6 0 6.46875 0 7C0 7.5625 0.4375 8 1 8H10.5625L7.28125 11.3125C6.875 11.6875 6.875 12.3438 7.28125 12.7188C7.65625 13.125 8.3125 13.125 8.6875 12.7188L13.6875 7.71875Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}
