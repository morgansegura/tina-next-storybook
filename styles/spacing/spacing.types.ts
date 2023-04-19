/* eslint-disable no-unused-vars */
export interface ISpacingRange {
    0: string | number;
    px: string | number;
    0.5: string | number;
    1: string | number;
    1.5: string | number;
    2: string | number;
    2.5: string | number;
    3: string | number;
    3.5: string | number;
    4: string | number;
    4.5: string | number;
    5: string | number;
    6: string | number;
    7: string | number;
    8: string | number;
    9: string | number;
    10: string | number;
    11: string | number;
    12: string | number;
    14: string | number;
    16: string | number;
    20: string | number;
    22: string | number;
    24: string | number;
    28: string | number;
    32: string | number;
    36: string | number;
    40: string | number;
    44: string | number;
    48: string | number;
    52: string | number;
    56: string | number;
    60: string | number;
    64: string | number;
    72: string | number;
    80: string | number;
    96: string | number;
}
export type TSpacingRange = {
    unset: string;
    0: string | number;
    px: string | number;
    0.5: string | number;
    1: string | number;
    1.5: string | number;
    2: string | number;
    2.5: string | number;
    3: string | number;
    3.5: string | number;
    4: string | number;
    4.5: string | number;
    5: string | number;
    6: string | number;
    7: string | number;
    8: string | number;
    9: string | number;
    10: string | number;
    11: string | number;
    12: string | number;
    14: string | number;
    16: string | number;
    20: string | number;
    22: string | number;
    24: string | number;
    28: string | number;
    32: string | number;
    36: string | number;
    40: string | number;
    44: string | number;
    48: string | number;
    52: string | number;
    56: string | number;
    60: string | number;
    64: string | number;
    72: string | number;
    80: string | number;
    96: string | number;
};

export type TFractionRange = {
    auto: string;
    half: string;
    full: string;
    "1/3": string;
    "2/3": string;
    "3/3": string;
    "1/4": string;
    "2/4": string;
    "3/4": string;
    "4/4": string;
    "1/5": string;
    "2/5": string;
    "3/5": string;
    "4/5": string;
    "5/5": string;
    "1/6": string;
    "2/6": string;
    "3/6": string;
    "4/6": string;
    "5/6": string;
    "1/12": string;
    "2/12": string;
    "3/12": string;
    "4/12": string;
    "5/12": string;
    "6/12": string;
    "7/12": string;
    "8/12": string;
    "9/12": string;
    "10/12": string;
    "11/12": string;
    "12/12": string;
};

export type TSpacing = (
    type:
        | "p"
        | "py"
        | "px"
        | "pt"
        | "pr"
        | "pb"
        | "pl"
        | "m"
        | "my"
        | "mx"
        | "mt"
        | "mr"
        | "mb"
        | "ml",
    value: number | string | null,
    toRem?: string
) => string | undefined;

export type TSpacingOption = {
    m?: string | number;
    my?: string | number;
    mx?: string | number;
    mt?: string | number;
    mr?: string | number;
    mb?: string | number;
    ml?: string | number;
    p?: string | number;
    py?: string | number;
    px?: string | number;
    pt?: string | number;
    pr?: string | number;
    pb?: string | number;
    pl?: string | number;
};
