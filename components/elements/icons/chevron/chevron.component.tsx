// [Styles]
import * as s from "@components/elements/icons/chevron/chevron.styled";
// [Types]
import { IChevron } from "@components/elements/icons/chevron/chevron.types";

export default function ChevronIcon({
    direction,
    fill,
    height,
    width,
    viewBox,
}: IChevron) {
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
                d="M10.375 1.92188L5.89844 6.21094C5.75781 6.32812 5.61719 6.375 5.5 6.375C5.35938 6.375 5.21875 6.32812 5.10156 6.23438L0.601562 1.92188C0.367188 1.71094 0.367188 1.33594 0.578125 1.125C0.789062 0.890625 1.16406 0.890625 1.375 1.10156L5.5 5.03906L9.60156 1.10156C9.8125 0.890625 10.1875 0.890625 10.3984 1.125C10.6094 1.33594 10.6094 1.71094 10.375 1.92188Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}
