export type TSpacing = {
    mobile?: {
        sm?: number;
        base?: number;
    };
    tablet?: number;
    desktop?: {
        sm?: number;
        base?: number;
        lg?: number;
    };
};

export type TVariant = {
    border?: "center-dashed-rainbow";
    bg?: "body" | "white" | "ebony";
};

export interface ISpacer {
    bottom?: TSpacing | number | boolean;
    top?: TSpacing | number | boolean;
    variant?: TVariant | string;
}
