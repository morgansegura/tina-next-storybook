/* eslint-disable no-unused-vars */

export type TFont = {
    family: {
        graphik: string;
        sans: string;
    };

    numeric: {
        normal: string;
        ordinal: string;
        "slashed-zero": string;
        lining: string;
        oldstyle: string;
        proportional: string;
        tabular: string;
        fractions: {
            diagonal: string;
            stacked: string;
        };
    };
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        xl2: string;
        xl3: string;
        xl4: string;
        xl5: string;
        xl6: string;
        xl7: string;
        xl8: string;
        xl9: string;
    };
    smoothing: {
        antialiased: string;
        subpixel: string;
    };
    style: {
        italic: string;
        normal: string;
    };

    weight: {
        none: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
};
export type TLeading = {
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    none: string;
    tight: string;
    snug: string;
    normal: string;
    relaxed: string;
    loose: string;
};
export type TList = {
    none: string;
    disc: string;
    decimal: string;
};

export type TText = {
    align: {
        left: string;
        center: string;
        right: string;
        justify: string;
        start: string;
        end: string;
    };
    color: (color: string, opacity?: number) => string;
    readableColor: (color: string | any) => string;
    decoration: {
        color: (color: string | unknown) => string;
        linethrough: string;
        none: string;
        overline: string;
        underline: string;
        style: {
            solid: string;
            double: string;
            dotted: string;
            dashed: string;
            wavy: string;
        };
        thickness: {
            auto: string;
            "from-font": string;
            size: (size: number) => string;
        };
    };
    indent: (size: number) => string;
    underline: {
        auto: string;
        size: (size: number) => string;
    };
    transform: {
        uppercase: string;
        lowercase: string;
        capitalize: string;
        normal: string;
    };
    overflow: {
        truncate: string;
        ellipsis: string;
        clip: string;
    };
};
export type TTracking = {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
};

export type TVerticalAlign = {
    baseline: string;
    top: string;
    middle: string;
    bottom: string;
    "text-top": string;
    "text-bottom": string;
    sub: string;
    super: string;
};

export type TWhitespace = {
    normal: string;
    nowrap: string;
    pre: {
        "": string;
        line: string;
        wrap: string;
    };
};

export type TWordBreak = {
    normal: string;
    words: string;
    all: string;
    keep: string;
};
