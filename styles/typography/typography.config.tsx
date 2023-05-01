import localFont from "@next/font/local";
import { readStringValue } from "@utils/helpers";
import { readableColor, rem, rgba, shade, tint } from "polished";
import { colors } from "@styles/colors/colors.config";
// [Types]
import {
    TFont,
    TLeading,
    TList,
    TText,
    TTracking,
    TVerticalAlign,
    TWhitespace,
    TWordBreak,
} from "@styles/typography/typography.types";

const graphik = localFont({
    src: [
        {
            path: "../../public/static/fonts/graphik/Graphik-Black-Web.woff2",
            weight: "900",
        },
        {
            path: "../../public/static/fonts/graphik/Graphik-Super-Web.woff2",
            weight: "800",
        },
        {
            path: "../../public/static/fonts/graphik/Graphik-Bold-Web.woff2",
            weight: "700",
        },
        {
            path: "../../public/static/fonts/graphik/Graphik-Semibold-Web.woff2",
            weight: "600",
        },
        {
            path: "../../public/static/fonts/graphik/Graphik-Medium-Web.woff2",
            weight: "500",
        },
        {
            path: "../../public/static/fonts/graphik/Graphik-Regular-Web.woff",
            weight: "400",
        },
    ],
});
export const fontSizing = (
    fontSize: string,
    lineHeight: string,
    fontWeight: number = 400
) => {
    const fs = readStringValue(String(fontSize), "px")
        ? rem(fontSize)
        : fontSize;
    const lh = readStringValue(String(lineHeight), "px")
        ? rem(lineHeight)
        : lineHeight;

    return `
        font-size: ${fs};
        line-height: ${lh};
        font-weight: ${fontWeight};
    `;
};

// console.log(graphik);

export const font: TFont = {
    family: {
        graphik: `${graphik.style.fontFamily}`,
        sans: `"Helvetica Neue", Helvetica,sans-serif`,
    },
    numeric: {
        normal: "font-variant-numeric: normal;",
        ordinal: "font-variant-numeric: ordinal;",
        "slashed-zero": "font-variant-numeric: slashed-zero;",
        lining: "font-variant-numeric: lining-nums;",
        oldstyle: "font-variant-numeric: oldstyle-nums;",
        proportional: "font-variant-numeric: proportional-nums;",
        tabular: "font-variant-numeric: tabular-nums;",
        fractions: {
            diagonal: "font-variant-numeric: diagonal-fractions;",
            stacked: "font-variant-numeric: stacked-fractions;",
        },
    },
    size: {
        xs: `font-size: ${rem("12px")}; line-height: ${rem("16px")};`,
        sm: `font-size: ${rem("14px")}; line-height: ${rem("20px")};`,
        base: `font-size: ${rem("16px")}; line-height: ${rem("24px")};`,
        lg: `font-size: ${rem("18px")}; line-height: ${rem("28px")};`,
        xl: `font-size: ${rem("20px")}; line-height: ${rem("28px")};`,
        xl2: `font-size: ${rem("24px")}; line-height: ${rem("32px")};`,
        xl3: `font-size: ${rem("30px")}; line-height: ${rem("36px")};`,
        xl4: `font-size: ${rem("36px")}; line-height: ${rem("40px")};`,
        xl5: `font-size: ${rem("48px")}; line-height: 1;`,
        xl6: `font-size: ${rem("60px")}; line-height: 1;`,
        xl7: `font-size: ${rem("72px")}; line-height: 1;`,
        xl8: `font-size: ${rem("96px")}; line-height: 1;`,
        xl9: `font-size: ${rem("128px")}; line-height: 1;`,
    },
    smoothing: {
        antialiased: `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`,
        subpixel: `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;`,
    },
    style: {
        italic: "font-style: italic;",
        normal: "font-style: normal;",
    },
    weight: {
        none: "normal",
        100: "font-weight: 100;",
        200: "font-weight: 200;",
        300: "font-weight: 300;",
        400: "font-weight: 400;",
        500: "font-weight: 500;",
        600: "font-weight: 600;",
        700: "font-weight: 700;",
        800: "font-weight: 800;",
        900: "font-weight: 900;",
    },
};

export const leading: TLeading = {
    3: `line-height: ${rem("12px")};`,
    4: `line-height: ${rem("16px")};`,
    5: `line-height: ${rem("20px")};`,
    6: `line-height: ${rem("24px")};`,
    7: `line-height: ${rem("28px")};`,
    8: `line-height: ${rem("32px")};`,
    9: `line-height: ${rem("36px")};`,
    10: `line-height: ${rem("40px")};`,
    none: "line-height: 1;",
    tight: "line-height: 1.25;",
    snug: "line-height: 1.375;",
    normal: "line-height: 1.5;",
    relaxed: "line-height: 1.625;",
    loose: "line-height: 2;",
};

export const list: TList = {
    none: "list-style-type: none;",
    disc: "list-style-type: disc;",
    decimal: "list-style-type: decimal;",
};

export const text: TText = {
    align: {
        left: "text-align: left;",
        center: "text-align: center;",
        right: "text-align: right;",
        justify: "text-align: justify;",
        start: "text-align: start;",
        end: "text-align: end;",
    },
    color: (color: string, opacity?: number) => {
        let c: any = [];
        Object.entries(colors).filter(
            (k: any) => color === k[0] && c.push(k[1])
        );
        return c.length > 0
            ? `color: ${opacity ? rgba(c[0], opacity) : c[0]};`
            : `color: ${opacity ? rgba(color, opacity) : color};`;
    },
    readableColor: (color: string | any) => {
        let c: any = [];
        Object.entries(colors).filter(
            (k: any) => color === k[0] && c.push(k[1])
        );
        return c.length > 0
            ? readableColor(c[0], shade(0.9, c[0]), tint(0.9, c[0]))
            : readableColor(color);
    },
    decoration: {
        color: (value: string | unknown) => `color: ${value};`,
        linethrough: "text-decoration-line: line-through;",
        none: "text-decoration-line: none;",
        overline: "text-decoration-line: overline;",
        underline: "text-decoration-line: underline;",
        style: {
            solid: "text-decoration-style: solid;",
            double: "text-decoration-style: double;",
            dotted: "text-decoration-style: dotted;",
            dashed: "text-decoration-style: dashed;",
            wavy: "text-decoration-style: wavy;",
        },
        thickness: {
            auto: "text-decoration-thickness: auto;",
            "from-font": "text-decoration-thickness: from-font;",
            size: (size: number) =>
                `text-decoration-thickness: ${rem(size + "px")};`,
        },
    },
    indent: (size: number) => `text-indent: ${rem(size + "px")};`,
    underline: {
        auto: "text-underline-offset: auto;",
        size: (size: number) => `text-underline-offset: ${rem(size + "px")};`,
    },
    transform: {
        uppercase: "text-transform: uppercase;",
        lowercase: "text-transform: lowercase;",
        capitalize: "text-transform: capitalize;",
        normal: "text-transform: none;",
    },
    overflow: {
        truncate: `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`,
        ellipsis: "text-overflow: ellipsis;",
        clip: "text-overflow: clip;",
    },
};
export const tracking: TTracking = {
    tighter: "letter-spacing: -0.05em;",
    tight: "letter-spacing: -0.025em;",
    normal: "letter-spacing: 0em;",
    wide: "letter-spacing: 0.025em;",
    wider: "letter-spacing: 0.05em;",
    widest: "letter-spacing: 0.1em;",
};

export const vertical: TVerticalAlign = {
    baseline: "vertical-align: baseline;",
    top: "vertical-align: top;",
    middle: "vertical-align: middle;",
    bottom: "vertical-align: bottom;",
    "text-top": "vertical-align: text-top;",
    "text-bottom": "vertical-align: text-bottom;",
    sub: "vertical-align: sub;",
    super: "vertical-align: super;",
};

export const whitespace: TWhitespace = {
    normal: "white-space: normal;",
    nowrap: "white-space: nowrap;",
    pre: {
        "": "white-space: pre;",
        line: "white-space: pre-line;",
        wrap: "white-space: pre-wrap;",
    },
};

export const wordbreak: TWordBreak = {
    normal: `overflow-wrap: normal; word-break: normal;`,
    words: "overflow-wrap: break-word;",
    all: "word-break: break-all;",
    keep: "word-break: keep-all;",
};
export const content: string = "content: none;";
