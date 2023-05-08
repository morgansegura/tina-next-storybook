import clsx from "clsx";
// [Styles]
// import "./CheckmarkIcon.css";
// [Types]
export interface ICheckmarkIcon {
    className?: string;
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function CheckmarkIcon({
    className,
    fill,
    height,
    width,
}: ICheckmarkIcon) {
    return (
        <svg
            className={clsx("CheckmarkIcon", className)}
            fill={fill}
            height={height}
            viewBox="0 0 16 11"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M14.75 0.846191C15.0625 1.15869 15.0625 1.62744 14.75 1.90869L6.5 10.1587C6.21875 10.4712 5.75 10.4712 5.46875 10.1587L1.21875 5.90869C0.90625 5.62744 0.90625 5.15869 1.21875 4.84619C1.5 4.56494 1.96875 4.56494 2.25 4.84619L6 8.59619L13.7188 0.846191C14 0.564941 14.4688 0.564941 14.75 0.846191Z" />
        </svg>
    );
}
