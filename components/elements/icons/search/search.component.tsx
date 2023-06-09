// [Styles]
import * as s from "@components/elements/icons/search/search.styled";
// [Types]
import { ISearch } from "@components/elements/icons/search/search.types";

export default function SearchIcon({ fill, height, width, viewBox }: ISearch) {
    return (
        <s.IconSvg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <s.IconSvgPath
                d="M19.6875 18.8984L14.4531 13.6641C15.5859 12.2969 16.2109 10.5391 16.2109 8.625C16.2109 4.17188 12.5391 0.5 8.08594 0.5C3.59375 0.5 0 4.17188 0 8.625C0 13.1172 3.63281 16.75 8.08594 16.75C9.96094 16.75 11.7188 16.125 13.125 14.9922L18.3594 20.2266C18.5547 20.4219 18.7891 20.5 19.0625 20.5C19.2969 20.5 19.5312 20.4219 19.6875 20.2266C20.0781 19.875 20.0781 19.2891 19.6875 18.8984ZM1.875 8.625C1.875 5.1875 4.64844 2.375 8.125 2.375C11.5625 2.375 14.375 5.1875 14.375 8.625C14.375 12.1016 11.5625 14.875 8.125 14.875C4.64844 14.875 1.875 12.1016 1.875 8.625Z"
                fill={fill}
            />
        </s.IconSvg>
    );
}
