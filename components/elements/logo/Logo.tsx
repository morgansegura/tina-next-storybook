import Image from "next/image";
// [Images]
// import "./Logo.css";
import clsx from "clsx";

// [Types]

export interface ILogo {
    fill?: string;
    className?: string;
    height?: number;
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "icon" | "full";
    viewBox?: string;
    width?: number;
}

export const LogoIcon = ({
    className,
    width,
    height,
    viewBox,
    fill,
}: ILogo) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M31 0.5L15.5 3.40731L0 0.5V26.2601L6.41028 25.0769V31.5L15.5339 23.3528L31 26.2601V0.5Z" />
        </svg>
    );
};

export const LogoText = ({
    className,
    width,
    height,
    viewBox,
    fill,
}: ILogo) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2327 0.53125V2.61071H13.385V0.53125H11.2327ZM11.2999 4.22062V13.9136H13.385V4.22062H11.2999ZM0 1.10138V13.9135H4.80922C7.93689 13.9135 9.51754 12.6055 9.51754 9.9894C9.51754 9.21799 9.31576 8.61427 8.94582 8.11118C8.57588 7.60808 8.10504 7.23915 7.56695 7.00437V6.97083C8.54224 6.40065 9.04671 5.56216 9.04671 4.48889C9.04671 3.54978 8.67677 2.71129 8.00415 2.07403C7.33153 1.43678 6.4235 1.10138 5.28005 1.10138H0ZM5.011 6.36711H2.21964V3.08022H5.011C5.61636 3.08022 6.08719 3.24792 6.4235 3.51624C6.75981 3.8181 6.92796 4.22057 6.92796 4.75721C6.92796 5.29384 6.75981 5.69632 6.4235 5.96464C6.08719 6.23295 5.61636 6.36711 5.011 6.36711ZM4.47291 11.9012H2.18601V8.11118H4.50654C5.48183 8.11118 6.22171 8.24534 6.69254 8.48011C7.16338 8.71489 7.3988 9.21799 7.3988 9.95586C7.3988 10.3248 7.33153 10.6267 7.23064 10.8614C7.21417 10.8902 7.19821 10.9184 7.18257 10.9461C7.07041 11.1445 6.97464 11.3139 6.82707 11.4316C6.69255 11.5658 6.45713 11.6664 6.18808 11.7335L6.18807 11.7335C5.91902 11.8005 5.64999 11.8676 5.41457 11.8676C5.14554 11.9012 4.84287 11.9012 4.47294 11.9012H4.47291ZM15.3354 13.9135V0.564741H17.4206V5.15968H17.4542C18.1268 4.35473 18.9676 3.95225 20.0101 3.95225C21.2208 3.95225 22.2298 4.42181 23.0033 5.36092C23.7768 6.30003 24.1804 7.541 24.1804 9.08383C24.1804 10.6602 23.8104 11.9012 23.0369 12.8067C22.2634 13.7458 21.2545 14.1819 19.9765 14.1819C18.9339 14.1819 18.0259 13.7794 17.3197 12.9744H17.286V13.9135H15.3354ZM17.4206 8.01056V10.1906C17.4206 10.7608 17.6223 11.2639 18.0259 11.6664C18.4295 12.0689 18.9676 12.2701 19.6402 12.2701C20.4137 12.2701 21.0191 12.0018 21.4563 11.4316C21.8935 10.8614 22.0952 10.09 22.0952 9.01675C22.0952 7.97702 21.8935 7.17206 21.4563 6.60189C21.0191 6.03171 20.4473 5.7634 19.6402 5.7634C18.9676 5.7634 18.3958 5.96463 18.0259 6.40065C17.6223 6.90375 17.4206 7.40684 17.4206 8.01056ZM25.659 0.564741V13.9135H27.8113V0.564741H25.659ZM36.5565 10.6937L38.0699 11.9347C37.1282 13.444 35.783 14.2154 34.0342 14.2154C32.6889 14.2154 31.5791 13.7458 30.7384 12.8067C29.8976 11.8676 29.4604 10.6266 29.4604 9.08382C29.4604 7.54099 29.8976 6.30002 30.7384 5.36091C31.5791 4.4218 32.6553 3.95224 33.9333 3.95224C35.2113 3.95224 36.2875 4.4218 37.1282 5.32737C37.969 6.26648 38.3726 7.50745 38.3726 9.05028V9.68753H31.5791C31.6128 10.4925 31.8145 11.1297 32.2517 11.5993C32.6889 12.0689 33.2607 12.3372 34.0006 12.3372C34.3705 12.3372 34.6732 12.3036 34.9422 12.203C35.2113 12.1024 35.4803 11.9682 35.6821 11.767C35.8839 11.5658 36.052 11.3981 36.1529 11.2639C36.2538 11.0962 36.3883 10.895 36.5565 10.6937ZM31.5791 8.11116H36.3211C36.2875 7.44037 36.052 6.8702 35.6485 6.43418C35.2449 5.99816 34.6732 5.79692 33.9333 5.79692C33.227 5.79692 32.6889 6.0317 32.2517 6.50126C31.8482 6.93727 31.6128 7.47391 31.5791 8.11116ZM40.1549 1.10138V13.88H42.3073V9.11737H45.2668C46.612 9.11737 47.6882 8.74843 48.4617 8.0441C49.2353 7.33976 49.6388 6.36711 49.6388 5.12614C49.6388 3.88518 49.2352 2.87898 48.4281 2.17465C47.621 1.47032 46.5784 1.10138 45.2668 1.10138H40.1549ZM45.2332 7.17207H42.3409V3.11376H45.2332C45.8722 3.11376 46.3766 3.28146 46.8138 3.61686C47.251 3.91872 47.4528 4.45535 47.4528 5.15968C47.4528 5.79694 47.2174 6.26649 46.8138 6.63543C46.4103 7.00437 45.8722 7.17207 45.2332 7.17207ZM50.8829 13.9135V4.22048H52.8671V5.26021H52.9007C53.1025 4.89128 53.3716 4.58942 53.7415 4.38818C54.1114 4.1534 54.515 4.05279 54.9186 4.05279C55.1876 4.05279 55.4903 4.11986 55.793 4.22048L55.4567 6.23287C55.0867 6.13225 54.8513 6.09871 54.6832 6.09871C53.5397 6.09871 52.968 6.90366 52.968 8.51357V13.9135H50.8829ZM60.7027 14.1483C62.0143 14.1483 63.0905 13.7123 63.9313 12.8067C64.772 11.9347 65.1756 10.6602 65.1756 9.05025C65.1756 7.44035 64.772 6.19938 63.8976 5.29381C63.0232 4.38823 61.947 3.91868 60.7027 3.91868C59.4583 3.91868 58.3822 4.38823 57.5078 5.29381C56.6334 6.23292 56.1962 7.47389 56.1962 9.05025C56.1962 10.6602 56.6334 11.9011 57.4741 12.8067C58.3149 13.7123 59.3911 14.1483 60.7027 14.1483ZM62.4515 11.4651C62.0143 12.0353 61.4089 12.3036 60.7027 12.3036C59.9628 12.3036 59.3911 12.0017 58.9203 11.4986C58.4831 10.9285 58.2476 10.1235 58.2476 9.08379C58.2476 8.0776 58.4831 7.27265 58.9203 6.70247C59.3911 6.1323 59.9628 5.86398 60.7027 5.86398C61.4089 5.86398 62.0143 6.1323 62.4515 6.70247C62.8887 7.27265 63.1241 8.04406 63.1241 9.08379C63.1241 10.09 62.8887 10.8949 62.4515 11.4651ZM64.0664 17.0663L64.4363 15.1881C64.4363 15.1881 65.3107 15.3893 65.8488 15.3893C66.3869 15.3893 66.6896 15.0875 66.6896 14.5173V4.22062H68.7747V14.5508C68.7747 16.5968 67.4967 17.4688 65.9161 17.4688C64.8399 17.4688 64.0664 17.0663 64.0664 17.0663ZM66.656 2.61071V0.53125H68.8083V2.61071H66.656ZM78.8638 11.9347L77.3504 10.6937C77.2158 10.895 77.0813 11.0962 76.9468 11.2639C76.8459 11.3981 76.6777 11.5658 76.476 11.767C76.2742 11.9682 76.0051 12.1024 75.7361 12.203C75.467 12.3036 75.1644 12.3372 74.7944 12.3372C74.0545 12.3372 73.4828 12.0689 73.0456 11.5993C72.6084 11.1297 72.4066 10.4925 72.373 9.68753H79.1664V9.05028C79.1664 7.50745 78.7629 6.26648 77.9221 5.32737C77.0813 4.4218 76.0051 3.95224 74.7272 3.95224C73.4492 3.95224 72.373 4.4218 71.5322 5.36091C70.6915 6.30002 70.2543 7.54099 70.2543 9.08382C70.2543 10.6266 70.6915 11.8676 71.5322 12.8067C72.373 13.7458 73.4828 14.2154 74.8281 14.2154C76.5769 14.2154 77.9221 13.444 78.8638 11.9347ZM77.1486 8.11116H72.4066C72.4403 7.47391 72.642 6.93727 73.0792 6.50126C73.5164 6.0317 74.0545 5.79692 74.7608 5.79692C75.5007 5.79692 76.0724 5.99816 76.476 6.43418C76.8795 6.8702 77.115 7.44037 77.1486 8.11116ZM86.8677 10.0565L88.9528 10.4925C88.751 11.6664 88.3138 12.5719 87.6075 13.2092C86.9013 13.8465 85.9932 14.1818 84.8498 14.1818C83.5382 14.1818 82.462 13.7458 81.6212 12.8403C80.7805 11.9347 80.3433 10.6937 80.3433 9.08382C80.3433 7.54099 80.7805 6.30002 81.6212 5.36091C82.462 4.4218 83.5382 3.95224 84.8498 3.95224C85.9596 3.95224 86.8677 4.28764 87.6075 4.95843C88.3138 5.62923 88.751 6.46772 88.8855 7.54099L86.9349 7.87639C86.7331 6.5348 86.0605 5.864 84.9171 5.864C84.1772 5.864 83.5718 6.13232 83.1346 6.7025C82.6974 7.27267 82.462 8.07762 82.462 9.08382C82.462 10.1235 82.6638 10.895 83.101 11.4651C83.5382 12.0353 84.1435 12.3036 84.8834 12.3036C85.9596 12.3036 86.6322 11.5322 86.8677 10.0565ZM91.072 5.9981V10.6601C91.072 11.8005 91.3074 12.6054 91.7446 13.1421C92.1818 13.6452 92.9889 13.9135 94.0987 13.9135C94.7377 13.9135 95.2758 13.7458 95.2758 13.7458L95.1077 11.834C95.1077 11.834 94.6705 11.9346 94.3342 11.9346C93.8297 11.9346 93.4934 11.8005 93.3252 11.5992C93.1571 11.3645 93.0898 10.9955 93.0898 10.4589V5.9981H95.5113V4.2205H93.0898V1.83918H91.1056V4.2205H89.5922V5.9981H91.072Z"
            />
        </svg>
    );
};

export default function Logo({ className, fill, size, variant }: ILogo) {
    return (
        <div className={clsx("Logo__container", className)}>
            <div className="Logo__icon">
                <LogoIcon
                    fill={fill}
                    height={32}
                    size={size}
                    variant={variant}
                    viewBox="0 0 31 32"
                    width={31}
                />
            </div>
            <div className="Logo__text">
                <LogoText
                    fill={fill}
                    height={18}
                    size={size}
                    variant={variant}
                    viewBox="0 0 96 18"
                    width={96}
                />
            </div>
        </div>
    );
}