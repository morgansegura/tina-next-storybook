// [Styles]
import * as s from "@components/elements/spacer/spacer.styled";
// [Types]
import { ISpacer } from "@components/elements/spacer/spacer.types";

export default function Spacer({ bottom, top, variant }: ISpacer) {
    return <s.Spacer bottom={bottom} top={top} variant={variant} />;
}
