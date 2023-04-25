// [Styles]
import * as s from "@components/elements/icons/social/spotify/spotify.styled";
// [Types]
import { ISpotify } from "@components/elements/icons/social/spotify/spotify.types";

export default function SpotifyIcon({
    fill,
    height,
    width,
    viewBox,
}: ISpotify) {
    return (
        <s.IconSvg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <s.IconSvgPath
                d="M7.75 0.25C3.46875 0.25 0 3.75 0 8C0 12.2812 3.46875 15.75 7.75 15.75C12 15.75 15.5 12.2812 15.5 8C15.5 3.75 12 0.25 7.75 0.25ZM10.875 11.6562C10.75 11.6562 10.6562 11.625 10.5625 11.5625C8.59375 10.375 6.34375 10.3438 4.09375 10.7812C3.96875 10.8125 3.8125 10.875 3.71875 10.875C3.40625 10.875 3.21875 10.625 3.21875 10.375C3.21875 10.0625 3.40625 9.90625 3.65625 9.84375C6.21875 9.28125 8.8125 9.34375 11.0625 10.6562C11.25 10.7812 11.3438 10.9062 11.3438 11.1875C11.3438 11.4688 11.125 11.6562 10.875 11.6562ZM11.7188 9.625C11.5625 9.625 11.4375 9.53125 11.3438 9.5C9.375 8.34375 6.46875 7.875 3.875 8.5625C3.71875 8.59375 3.65625 8.65625 3.5 8.65625C3.1875 8.65625 2.90625 8.375 2.90625 8.03125C2.90625 7.71875 3.0625 7.5 3.375 7.40625C4.25 7.15625 5.15625 6.96875 6.4375 6.96875C8.46875 6.96875 10.4375 7.46875 11.9688 8.40625C12.2188 8.53125 12.3438 8.75 12.3438 9C12.3125 9.34375 12.0625 9.625 11.7188 9.625ZM12.6875 7.25C12.5312 7.25 12.4375 7.1875 12.2812 7.125C10.0625 5.78125 6.09375 5.46875 3.5 6.1875C3.40625 6.21875 3.25 6.28125 3.09375 6.28125C2.6875 6.28125 2.375 5.9375 2.375 5.53125C2.375 5.09375 2.65625 4.875 2.9375 4.78125C4.03125 4.46875 5.25 4.3125 6.59375 4.3125C8.875 4.3125 11.2812 4.78125 13 5.8125C13.25 5.9375 13.4062 6.125 13.4062 6.5C13.4062 6.9375 13.0625 7.25 12.6875 7.25Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}