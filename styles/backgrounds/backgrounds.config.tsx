import { TBackgrounds } from "@styles/backgrounds/backgrounds.types";
import { colors } from "@styles/colors/colors.config";
import { rgba } from "polished";

export const bg: TBackgrounds = {
    // [Attachment]
    attachment: {
        fixed: `background-attachment: fixed;`,
        local: `background-attachment: local;`,
        scroll: `background-attachment: scroll;`,
    },
    color: (color: string | keyof typeof colors, opacity?: number) => {
        let c: any = [];
        Object.entries(colors).filter(
            (k: any) => color === k[0] && c.push(k[1])
        );
        return c.length > 0
            ? `background-color: ${opacity ? rgba(c[0], opacity) : c[0]};`
            : `background-color: ${opacity ? rgba(color, opacity) : color};`;
    },
    linear: (arr: string[]) => {
        return `background-image: linear-gradient(${arr.map(
            (str: string) => str
        )});`;
    },

    clip: {
        border: `background-clip: border-box;`,
        padding: `background-clip: padding-box;`,
        content: `background-clip: content-box;`,
        text: `background-clip: text;`,
    },
    origin: {
        border: `background-origin: border-box;`,
        padding: `background-origin: padding-box;`,
        content: `background-origin: content-box;`,
    },
    position: {
        bottom: `background-position: bottom;`,
        center: `background-position: center;`,
        left: `background-position: left;`,
        "left-bottom": `background-position: left bottom;`,
        "left-top": `background-position: left top;`,
        right: `background-position: right;`,
        "right-bottom": `background-position: right bottom;`,
        "right-top": `background-position: right top;`,
        top: `background-position: top;`,
    },
    repeat: {
        repeat: `background-repeat: repeat;`,
        none: `background-repeat: no-repeat;`,
        x: `background-repeat: repeat-x;`,
        y: `background-repeat: repeat-y;`,
        round: `background-repeat: round;`,
        space: `background-repeat: space;`,
    },
};
