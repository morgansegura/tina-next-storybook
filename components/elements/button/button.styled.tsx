import styled from "styled-components";

export const Button = styled(({ as }) => as)`
    cursor: pointer;

    svg {
    }
`;

Button.defaultProps = {
    as: "button",
};
