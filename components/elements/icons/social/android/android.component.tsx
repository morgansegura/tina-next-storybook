// [Styles]
import * as s from "@components/elements/icons/social/android/android.styled";
// [Types]
import { IAndroid } from "@components/elements/icons/social/android/android.types";

export default function AndroidIcon({
    fill,
    height,
    width,
    viewBox,
}: IAndroid) {
    return (
        <s.IconSvg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <s.IconSvgPath
                d="M10.1562 7.34375L3.25 0.40625L12.0312 5.46875L10.1562 7.34375ZM1.46875 0C1.0625 0.21875 0.78125 0.625 0.78125 1.125V14.9062C0.78125 15.4062 1.0625 15.8125 1.46875 16L9.46875 8L1.46875 0ZM14.75 7.0625L12.9062 6L10.8438 8L12.9062 10.0312L14.7812 8.96875C15.3438 8.53125 15.3438 7.5 14.75 7.0625ZM3.25 15.5938L12.0312 10.5625L10.1562 8.6875L3.25 15.5938Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}
