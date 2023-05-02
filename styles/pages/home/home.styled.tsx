import { colors } from "@styles/colors/colors.config";
import { sp } from "@styles/spacing/spacing.config";
import { fontSizing } from "@styles/typography/typography.config";
import { inset } from "@utils/helpers";
import styled from "styled-components";

export const Content = styled.div``;
export const Supertitle = styled.div``;
export const Title = styled.div``;
export const Copy = styled.div``;
export const Button = styled.div``;
export const Grid = styled.div``;
export const Column = styled.div``;

export const SupportBlock = styled.div`
    ${Content} {
        ${Title} {
            ${fontSizing("28px", "34px", 700)};
            margin-bottom: ${sp[4]};
        }

        ${Copy} {
            ${fontSizing("16px", "24px")};
            margin-bottom: ${sp[6]};
        }

        ${Button} {
            display: grid;
            justify-content: center;
            padding: ${sp[3.5]} ${sp[8]};
            ${fontSizing("16px", "19px", 600)};
            margin-bottom: ${sp[12]};
            background-color: ${colors.green400};
            color: ${colors.white};
            border-radius: ${sp[1]};
        }
    }
`;

// [Chart]
export const Chart = styled.div`
    position: relative;
    border-radius: 9999px;
    width: 175px;
    height: 175px;
    border: ${sp[2]} solid ${colors.white};
    overflow: hidden;
`;

export const ChartInner = styled.div`
    position: absolute;
    ${inset()};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:before,
    &:after {
        content: "";
        position: absolute;
        ${inset()};
        border-radius: 9999px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:before {
        border: ${sp[2.5]} solid #0086c2;
    }

    ${Title} {
        ${fontSizing("25px", "30px", 700)};
    }

    ${Copy} {
    }
`;
export const ChartMeta = styled.div`
    ${Supertitle} {
        ${fontSizing("25px", "30px", 700)};
    }

    ${Title} {
        ${fontSizing("25px", "30px", 700)};
    }
`;
export const ChartImage = styled.div`
    img {
        position: absolute;
        ${inset()};
        width: 100%;
        object-fit: cover;
    }
`;
