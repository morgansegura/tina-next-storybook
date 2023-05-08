import clsx from "clsx";
// [Styles]
// import "./TiktokIcon.css";
// [Types]
export interface ITiktokIcon {
    className?: string;
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function TiktokIcon({
    className,
    fill,
    height,
    width,
}: ITiktokIcon) {
    return (
        <svg
            className={clsx("TiktokIcon", className)}
            fill={fill}
            height={height}
            viewBox="0 0 15 18"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15 6.5625C13.5938 6.59375 12.2812 6.15625 11.1562 5.34375V10.9375C11.1562 14.8438 6.90625 17.2812 3.53125 15.3438C0.15625 13.375 0.15625 8.5 3.53125 6.53125C4.5 5.96875 5.65625 5.75 6.78125 5.90625V8.71875C5.0625 8.15625 3.40625 9.6875 3.78125 11.4375C4.1875 13.1875 6.3125 13.875 7.65625 12.6562C8.125 12.2188 8.40625 11.5938 8.40625 10.9375V0H11.1562C11.1562 0.25 11.1562 0.46875 11.2188 0.71875C11.4062 1.75 12 2.65625 12.9062 3.21875C13.5 3.625 14.25 3.84375 15 3.84375V6.5625Z" />
        </svg>
    );
}
