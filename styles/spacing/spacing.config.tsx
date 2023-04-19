import { em, rem } from "polished";
import { TSpacing, TSpacingRange } from "@styles/spacing/spacing.types";

export const spacingScale: TSpacingRange = {
    unset: "unset",
    0: rem("0px"),
    px: rem("1px"),
    0.5: rem("2px"),
    1: rem("4px"),
    1.5: rem("6px"),
    2: rem("8px"),
    2.5: rem("10px"),
    3: rem("12px"),
    3.5: rem("14px"),
    4: rem("16px"),
    4.5: rem("18px"),
    5: rem("20px"),
    6: rem("24px"),
    7: rem("28px"),
    8: rem("32px"),
    9: rem("36px"),
    10: rem("40px"),
    11: rem("44px"),
    12: rem("48px"),
    14: rem("56px"),
    16: rem("64px"),
    20: rem("80px"),
    22: rem("88px"),
    24: rem("96px"),
    28: rem("112px"),
    32: rem("128px"),
    36: rem("144px"),
    40: rem("160px"),
    44: rem("176px"),
    48: rem("192px"),
    52: rem("208px"),
    56: rem("224px"),
    60: rem("240px"),
    64: rem("256px"),
    72: rem("288px"),
    80: rem("320px"),
    96: rem("384px"),
};

export const fractionsScale: {} = {
    auto: "height: auto;",
    half: "height: 50%;",
    full: "	height: 100%;",
    "1/3": "height: 33.333333%;",
    "2/3": "height: 66.666667%;",
    "3/3": "height: 66.666667%;",
    "1/4": "height: 25%;",
    "2/4": `height: 50%;`,
    "3/4": "height: 75%;",
    "4/4": "height: 100%;",
    "1/5": "height: 20%;",
    "2/5": "height: 40%;",
    "3/5": "height: 60%;",
    "4/5": "height: 80%;",
    "5/5": "height: 1000%;",
    "1/6": "height: 16.666667%;",
    "2/6": "height: 33.333333%;",
    "3/6": "height: 50%;",
    "4/6": "height: 66.666667%;",
    "5/6": "height: 83.333333%;",
    "1/12": "height: 8.333333%;",
    "2/12": "height: 16.666667%;",
    "3/12": "height: 25%;",
    "4/12": "height: 33.333333%;",
    "5/12": "height: 41.666667%;",
    "6/12": "height: 50%;",
    "7/12": "height: 58.333333%;",
    "8/12": "height: 66.666667%;",
    "9/12": "height: 75%;",
    "10/12": "height: 83.333333%;",
    "11/12": "height: 91.666667%;",
    "12/12": "height: 100%;",
};

export const fractions = {};

export const spacingMap = (
    prefix: string,
    propertyArr: string[],
    type: string,
    valPrefix?: string,
    valSuffix?: string
) => {
    const obj: any = {};
    const unitType = type === "fractions" ? fractionsScale : spacingScale;

    Object.entries(unitType).map((k) => {
        obj[`${prefix}${k[0]}`] =
            propertyArr.length > 0
                ? propertyArr.map(
                      (k1) => `${k1}: ${valPrefix}${k[1]}${valSuffix};`
                  )
                : `${valPrefix}${k[1]}${valSuffix}`;
    });

    return obj;
};
// export const fractionMap = (prefix: string, property: string) => {
//     const obj: any = {}
//     // Object.map()
//     // unset: 'unset',
// }

export const sp: TSpacingRange = {
    ...spacingScale,
};

export const spacing: TSpacing = (type, value, toRem) => {
    const a =
        toRem === "rem"
            ? rem(value + "px") || String(value)?.includes("em")
            : toRem === "percent" || String(value)?.includes("%")
            ? `${value}%`
            : toRem === "em" || String(value)?.includes("em")
            ? `${em(value + "px")}`
            : toRem === "px" || String(value)?.includes("px")
            ? String(value).replace("px", "") + "px"
            : (value === "auto" && type === "mx") ||
              (value === "auto" && type === "mr") ||
              (value === "auto" && type === "ml")
            ? "auto"
            : toRem === "sp"
            ? // @ts-ignore
              sp[value]
            : value + "px";

    // Padding

    if (type === "p") {
        return `padding: ${a};`;
    } else if (type === "py") {
        return `padding-top: ${a}; padding-bottom: ${a};`;
    } else if (type === "px") {
        return `padding-right: ${a}; padding-left: ${a};`;
    } else if (type === "pt") {
        return `padding-top: ${a};`;
    } else if (type === "pr") {
        return `padding-right: ${a};`;
    } else if (type === "pb") {
        return `padding-bottom: ${a};`;
    } else if (type === "pl") {
        return `padding-left: ${a};`;
    }

    // Margin
    if (type === "m") {
        return `margin: ${a};`;
    } else if (type === "my") {
        return `margin-top: ${a}; margin-bottom: ${a};`;
    } else if (type === "mx") {
        return `margin-right: ${a}; margin-left: ${a};`;
    } else if (type === "mt") {
        return `margin-top: ${a};`;
    } else if (type === "mr") {
        return `margin-right: ${a};`;
    } else if (type === "mb") {
        return `margin-bottom: ${a};`;
    } else if (type === "ml") {
        return `margin-left: ${a};`;
    }
};
