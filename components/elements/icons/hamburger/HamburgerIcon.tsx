import clsx from "clsx";
// [Styles]
// import "./HamburgerIcon.css";
// [Types]
export interface IHamburgerIcon {
    className?: string;
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function HamburgerIcon({
    className,
    fill,
    height,
    width,
}: IHamburgerIcon) {
    return (
        <svg
            className={clsx("HamburgerIcon", className)}
            fill={fill}
            height={height}
            viewBox="0 0 18 15"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0.25 0.9375C0.25 0.429688 0.640625 0 1.1875 0H16.8125C17.3203 0 17.75 0.429688 17.75 0.9375C17.75 1.48438 17.3203 1.875 16.8125 1.875H1.1875C0.640625 1.875 0.25 1.48438 0.25 0.9375ZM0.25 7.1875C0.25 6.67969 0.640625 6.25 1.1875 6.25H16.8125C17.3203 6.25 17.75 6.67969 17.75 7.1875C17.75 7.73438 17.3203 8.125 16.8125 8.125H1.1875C0.640625 8.125 0.25 7.73438 0.25 7.1875ZM16.8125 14.375H1.1875C0.640625 14.375 0.25 13.9844 0.25 13.4375C0.25 12.9297 0.640625 12.5 1.1875 12.5H16.8125C17.3203 12.5 17.75 12.9297 17.75 13.4375C17.75 13.9844 17.3203 14.375 16.8125 14.375Z" />
        </svg>
    );
}
