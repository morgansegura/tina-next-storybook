// [Styles]
// [Components]
// [Icons]
import ArrowIcon from "@components/elements/icons/arrow/ArrowIcon";
import * as s from "@components/elements/subscribe/subscribe.styled";
// [Tyles]
import { ISubscribe } from "@components/elements/subscribe/subscribe.types";
import { useState } from "react";

export default function Subscribe({ title }: ISubscribe) {
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <s.Wrapper>
            <s.Contain>
                <s.Title>{title}</s.Title>
                <s.Form>
                    <s.Field
                        focus={focus}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    ></s.Field>
                    <s.Selector>
                        <ArrowIcon direction="right" />
                    </s.Selector>
                </s.Form>
            </s.Contain>
        </s.Wrapper>
    );
}
