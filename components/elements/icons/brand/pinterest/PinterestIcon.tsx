import clsx from "clsx";
// [Styles]
// import "./PinterestIcon.css";
// [Types]
export interface IPinterestIcon {
    className?: string;
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function PinterestIcon({
    className,
    fill,
    height,
    width,
}: IPinterestIcon) {
    return (
        <svg
            className={clsx("PinterestIcon", className)}
            fill={fill}
            height={height}
            viewBox="0 0 16 16"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.5 8C15.5 12.2812 12.0312 15.75 7.75 15.75C6.9375 15.75 6.15625 15.6562 5.4375 15.4062C5.75 14.9062 6.21875 14.0625 6.40625 13.375C6.5 13.0312 6.875 11.5312 6.875 11.5312C7.125 12.0312 7.875 12.4375 8.65625 12.4375C11 12.4375 12.6875 10.2812 12.6875 7.625C12.6875 5.0625 10.5938 3.125 7.90625 3.125C4.5625 3.125 2.78125 5.375 2.78125 7.8125C2.78125 8.96875 3.375 10.375 4.34375 10.8438C4.5 10.9062 4.59375 10.875 4.625 10.7188C4.625 10.625 4.78125 10.0938 4.84375 9.84375C4.84375 9.78125 4.84375 9.6875 4.78125 9.625C4.46875 9.25 4.21875 8.53125 4.21875 7.84375C4.21875 6.15625 5.5 4.5 7.71875 4.5C9.59375 4.5 10.9375 5.78125 10.9375 7.65625C10.9375 9.75 9.875 11.1875 8.5 11.1875C7.75 11.1875 7.1875 10.5625 7.34375 9.8125C7.5625 8.875 8 7.875 8 7.21875C8 6.625 7.6875 6.125 7.03125 6.125C6.25 6.125 5.625 6.9375 5.625 8C5.625 8.6875 5.84375 9.15625 5.84375 9.15625C5.84375 9.15625 5.09375 12.4062 4.9375 13C4.78125 13.6875 4.84375 14.625 4.90625 15.2188C2.03125 14.0938 0 11.3125 0 8C0 3.71875 3.46875 0.25 7.75 0.25C12.0312 0.25 15.5 3.71875 15.5 8Z" />
        </svg>
    );
}