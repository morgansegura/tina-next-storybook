import clsx from "clsx";
// [Styles]
// import "./CloseIcon.css";
// [Types]
export interface ICloseIcon {
    className?: string;
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function CloseIcon({
    className,
    fill,
    height,
    width,
}: ICloseIcon) {
    return (
        <svg
            className={clsx("CloseIcon", className)}
            fill={fill}
            height={height}
            viewBox="0 0 16 16"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.125 13.5781C15.5469 14.0469 15.5469 14.75 15.125 15.1719C14.6562 15.6406 13.9531 15.6406 13.5312 15.1719L8 9.59375L2.42188 15.1719C1.95312 15.6406 1.25 15.6406 0.828125 15.1719C0.359375 14.75 0.359375 14.0469 0.828125 13.5781L6.40625 8L0.828125 2.42188C0.359375 1.95312 0.359375 1.25 0.828125 0.828125C1.25 0.359375 1.95312 0.359375 2.375 0.828125L8 6.45312L13.5781 0.875C14 0.40625 14.7031 0.40625 15.125 0.875C15.5938 1.29688 15.5938 2 15.125 2.46875L9.54688 8L15.125 13.5781Z" />
        </svg>
    );
}