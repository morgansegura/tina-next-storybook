// [Styles]
import * as s from "@components/elements/icons/language/language.styled";
// [Types]
import { ILanguage } from "@components/elements/icons/language/language.types";

export default function LanguageIcon({
    fill,
    height,
    width,
    viewBox,
}: ILanguage) {
    return (
        <s.IconSvg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <s.IconSvgPath
                d="M18.3125 3.90625C18.7422 3.90625 19.0938 4.25781 19.0938 4.6875V4.84375H21.4375C21.8672 4.84375 22.2188 5.19531 22.2188 5.625C22.2188 6.05469 21.8672 6.40625 21.4375 6.40625H21.3594L21.2812 6.60156C20.9297 7.53906 20.3828 8.4375 19.7188 9.14062C19.7578 9.17969 19.7969 9.17969 19.8359 9.21875L20.5781 9.64844C20.9297 9.88281 21.0469 10.3516 20.8516 10.7422C20.6172 11.0938 20.1484 11.2109 19.7578 11.0156L19.0156 10.5469C18.8594 10.4688 18.6641 10.3516 18.5078 10.2344C18.1172 10.5078 17.6484 10.7812 17.1797 10.9766L17.0625 11.0547C16.6719 11.2109 16.2031 11.0547 16.0078 10.6641C15.8516 10.2344 16.0078 9.80469 16.3984 9.60938L16.5547 9.57031C16.7891 9.45312 17.0625 9.29688 17.2969 9.17969L16.7891 8.71094C16.5156 8.39844 16.5156 7.89062 16.7891 7.57812C17.1016 7.26562 17.6094 7.26562 17.9219 7.57812L18.4688 8.16406H18.5078C18.9766 7.65625 19.3672 7.07031 19.6797 6.40625H15.5C15.0312 6.40625 14.7188 6.05469 14.7188 5.625C14.7188 5.19531 15.0312 4.84375 15.5 4.84375H17.5312V4.6875C17.5312 4.25781 17.8438 3.90625 18.3125 3.90625ZM5.96875 8.28125L6.75 6.64062L7.49219 8.28125H5.96875ZM23 0C24.3672 0 25.5 1.13281 25.5 2.5V12.5C25.5 13.9062 24.3672 15 23 15H3C1.59375 15 0.5 13.9062 0.5 12.5V2.5C0.5 1.13281 1.59375 0 3 0H23ZM23 1.875H13V13.125H23C23.3125 13.125 23.625 12.8516 23.625 12.5V2.5C23.625 2.1875 23.3125 1.875 23 1.875ZM7.45312 4.375C7.33594 4.10156 7.02344 3.90625 6.75 3.90625C6.4375 3.90625 6.125 4.10156 6.00781 4.375L3.50781 10C3.35156 10.3906 3.50781 10.8594 3.89844 11.0547C4.28906 11.2109 4.75781 11.0547 4.95312 10.6641L5.30469 9.84375H8.15625L8.50781 10.6641C8.70312 11.0547 9.17188 11.2109 9.5625 11.0547C9.95312 10.8594 10.1094 10.3906 9.95312 10L7.45312 4.375Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}
