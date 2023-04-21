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
                d="M13.5 1.5625L7.53125 7.28125C7.34375 7.4375 7.15625 7.5 7 7.5C6.8125 7.5 6.625 7.4375 6.46875 7.3125L0.46875 1.5625C0.15625 1.28125 0.15625 0.78125 0.4375 0.5C0.71875 0.1875 1.21875 0.1875 1.5 0.46875L7 5.71875L12.4688 0.46875C12.75 0.1875 13.25 0.1875 13.5312 0.5C13.8125 0.78125 13.8125 1.28125 13.5 1.5625Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}
