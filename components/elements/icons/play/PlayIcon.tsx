import clsx from "clsx";
// [Styles]
// import "./PlayIcon.css";
// [Types]
export interface IPlayIcon {
    className?: string;
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function PlayIcon({
    className,
    fill,
    height,
    width,
}: IPlayIcon) {
    return (
        <svg
            className={clsx("PlayIcon", className)}
            fill={fill}
            height={height}
            viewBox="0 0 13 15"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1.32812 14.3594C1.67188 14.3594 1.97656 14.2422 2.36719 14.0156L11.6406 8.64062C12.3359 8.24219 12.6484 7.90625 12.6484 7.36719C12.6484 6.83594 12.3359 6.5 11.6406 6.09375L2.36719 0.71875C1.97656 0.492188 1.67188 0.375 1.32812 0.375C0.648438 0.375 0.140625 0.898438 0.140625 1.73438V13C0.140625 13.8438 0.648438 14.3594 1.32812 14.3594Z" />
        </svg>
    );
}
