import clsx from "clsx";
// [Styles]
// import "./ReaderIcon.css";
// [Types]
export interface IReaderIcon {
    className?: string;
    fill?: string;
    height?: string;
    width?: string;
    viewBox?: string;
}

export default function ReaderIcon({
    className,
    fill,
    height,
    width,
}: IReaderIcon) {
    return (
        <svg
            className={clsx("ReaderIcon", className)}
            fill={fill}
            height={height}
            viewBox="0 0 24 19"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M21.8438 1.72656C20.0078 1.0625 18.2891 0.75 16.7656 0.789062C14.5 0.789062 12.7812 1.45312 12 1.84375C11.1797 1.45312 9.46094 0.789062 7.19531 0.789062C5.63281 0.75 3.95312 1.0625 2.11719 1.72656C1.29688 2.03906 0.75 2.82031 0.75 3.71875V15.125C0.75 15.75 1.02344 16.375 1.53125 16.7656C2.07812 17.1562 2.78125 17.3125 3.44531 17.1172C8.05469 15.8672 11.3359 18.0156 11.4531 18.0938C11.6094 18.2109 11.8047 18.25 11.9609 18.25C12.0781 18.25 12.3125 18.2109 12.4688 18.0938C12.625 18.0156 15.9062 15.8672 20.5156 17.1172C21.1406 17.3125 21.8438 17.1562 22.3906 16.7656C22.9375 16.375 23.25 15.75 23.25 15.125V3.71875C23.25 2.82031 22.6641 2.03906 21.8438 1.72656ZM11.0625 15.7891C9.96875 15.3594 8.32812 14.8516 6.29688 14.8516C5.28125 14.8516 4.14844 14.9688 2.9375 15.3203C2.82031 15.3594 2.70312 15.2812 2.70312 15.2812C2.625 15.2031 2.625 15.125 2.625 15.125V3.71875C2.625 3.60156 2.66406 3.52344 2.74219 3.48438C4.34375 2.9375 5.86719 2.625 7.15625 2.66406C8.99219 2.66406 10.3594 3.17188 11.0625 3.48438V15.7891ZM21.375 15.125C21.375 15.125 21.375 15.2031 21.2969 15.2812C21.2578 15.2812 21.1406 15.3594 21.0234 15.3203C17.4688 14.3438 14.5781 15.125 12.8984 15.7891V3.48438C13.6016 3.17188 14.9688 2.66406 16.8047 2.66406C18.0938 2.625 19.6172 2.9375 21.2188 3.48438C21.2969 3.52344 21.375 3.60156 21.375 3.71875V15.125Z" />
        </svg>
    );
}
