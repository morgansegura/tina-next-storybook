import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    z-index: 0;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
`;
export const Main = styled.div`
    position: relative;
    flex: 1 0 auto;
    order: 1;
    display: grid;
    transition: opacity 0.3s ease-out;

    ${({ animateScrollDirection }) =>
        animateScrollDirection === "fade-in" &&
        css`
            padding-top: 105px;
        `}
`;
export const Contain = styled.div`
    position: relative;
    order: 2;
    width: 100%;
    min-height: 200vh;
`;
