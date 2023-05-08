// [Styles]
// import "./User.css";
// [Types]
export interface IUser {
    fill?: string;
    height?: string;
    width?: string;
}

export default function UserIcon({ fill, height, width }: IUser) {
    return (
        <svg
            className="UserIcon"
            width={width}
            height={height}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 15"
        >
            <path d="M7 7.25C8.91406 7.25 10.5 5.69141 10.5 3.75C10.5 1.83594 8.91406 0.25 7 0.25C5.05859 0.25 3.5 1.83594 3.5 3.75C3.5 5.69141 5.05859 7.25 7 7.25ZM5.74219 8.5625C3.03516 8.5625 0.875 10.75 0.875 13.457C0.875 13.8945 1.23047 14.25 1.66797 14.25H12.3047C12.7422 14.25 13.125 13.8945 13.125 13.457C13.125 10.75 10.9375 8.5625 8.23047 8.5625H5.74219Z" />
        </svg>
    );
}
