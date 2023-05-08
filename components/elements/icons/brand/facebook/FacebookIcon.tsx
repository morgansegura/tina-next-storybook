import clsx from "clsx";
// [Styles]
// import "./FacebookIcon.css";
// [Types]
export interface IFacebookIcon {
    className?: string;
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function FacebookIcon({
    className,
    fill,
    height,
    width,
}: IFacebookIcon) {
    return (
        <svg
            className={clsx("FacebookIcon", className)}
            fill={fill}
            height={height}
            viewBox="0 0 10 16"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z" />
        </svg>
    );
}
