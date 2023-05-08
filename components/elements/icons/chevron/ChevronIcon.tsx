import clsx from "clsx";
// [Styles]
// import "./ChevronIcon.css";
// [Types]
export interface IChevronIcon {
    className?: string;
    direction?: "up" | "right" | "down" | "left";
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function ChevronIcon({
    className,
    direction = "down",
    fill,
    height,
    width,
}: IChevronIcon) {
    return (
        <svg
            className={clsx(
                "ChevronIcon",
                `ChevronIcon__${direction}`,
                className
            )}
            fill={fill}
            height={height}
            viewBox="0 0 15 8"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M14 1.5625L8.03125 7.28125C7.84375 7.4375 7.65625 7.5 7.5 7.5C7.3125 7.5 7.125 7.4375 6.96875 7.3125L0.96875 1.5625C0.65625 1.28125 0.65625 0.78125 0.9375 0.5C1.21875 0.1875 1.71875 0.1875 2 0.46875L7.5 5.71875L12.9688 0.46875C13.25 0.1875 13.75 0.1875 14.0312 0.5C14.3125 0.78125 14.3125 1.28125 14 1.5625Z" />
        </svg>
    );
}
