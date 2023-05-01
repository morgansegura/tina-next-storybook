export type TBackgrounds = {
    attachment: {
        fixed: string;
        local: string;
        scroll: string;
    };
    clip: {
        border: string;
        padding: string;
        content: string;
        text: string;
    };
    // eslint-disable-next-line no-unused-vars
    color: (color: string, opacity?: number) => string;
    linear: ([]) => string;
    origin: {
        border: string;
        padding: string;
        content: string;
    };
    position: {
        bottom: string;
        center: string;
        left: string;
        "left-bottom": string;
        "left-top": string;
        right: string;
        "right-bottom": string;
        "right-top": string;
        top: string;
    };
    repeat: {
        repeat: string;
        none: string;
        x: string;
        y: string;
        round: string;
        space: string;
    };
};
