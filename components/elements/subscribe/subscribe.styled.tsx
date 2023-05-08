import styled, { css } from "styled-components";
import { colors } from "@styles/colors/colors.config";
import { sp } from "@styles/spacing";
import { Button } from "@components/elements/button/button.styled";
import { fontSizing } from "@styles/typography/typography.config";

export const Wrapper = styled.div``;
export const Title = styled.div`
    ${fontSizing("18px", "22px", 700)};
    max-width: 331px;
    margin-bottom: ${sp[8]};
`;

export const Contain = styled.div``;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 62px;
    grid-gap: ${sp[2]};
    margin-bottom: var(--size-8);
`;

type TField = {
    focus?: boolean;
};

export const Field = styled.input`
    background-color: transparent;
    border: 1px solid var(--color-white);
    border-radius: ${sp[2]};
    padding: var(--size-2);

    ${({ focus }: TField) =>
        focus
            ? css`
                  ::placeholder {
                      opacity: 0;
                      transition: opacity 0.3s ease-out;
                  }
              `
            : css`
                  ::placeholder {
                      opacity: 1;
                  }
              `}
`;

Field.defaultProps = {
    placeholder: "Email",
};

export const Selector = styled(Button)`
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white);
    padding: ${sp[5]};
    border-radius: var(--size-2);

    svg {
        width: var(--size-2);
        height: var(--size-2);
    }
`;
