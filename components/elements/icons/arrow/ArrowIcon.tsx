import clsx from "clsx";
// [Styles]
// import "./ArrowIcon.css";
// [Types]
export interface IArrowIcon {
    className?: string;
    direction?: "up" | "right" | "down" | "left";
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function ArrowIcon({
    className,
    direction = "right",
    fill,
    height,
    width,
}: IArrowIcon) {
    return (
        <svg
            className={clsx("ArrowIcon", `ArrowIcon__${direction}`, className)}
            fill={fill}
            height={height}
            viewBox="0 0 14 13"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M8.25 0.846191L13.75 6.09619C13.9062 6.25244 14 6.43994 14 6.65869C14 6.84619 13.9062 7.03369 13.75 7.18994L8.25 12.4399C7.96875 12.7212 7.46875 12.7212 7.1875 12.4087C6.90625 12.1274 6.90625 11.6274 7.21875 11.3462L11.375 7.40869H0.75C0.3125 7.40869 0 7.06494 0 6.65869C0 6.22119 0.3125 5.90869 0.75 5.90869H11.375L7.21875 1.93994C6.90625 1.65869 6.90625 1.15869 7.1875 0.877441C7.46875 0.564941 7.9375 0.564941 8.25 0.846191Z" />
        </svg>
    );
}
