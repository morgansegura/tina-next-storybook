import type { Meta, StoryObj } from "@storybook/react";

// import { Button } from './Button';
import Button from "@components/elements/button/Button";
import PlayIcon from "@components/elements/icons/play/PlayIcon";
import GlobeIcon from "@components/elements/icons/globe/Globe";
import { colors } from "@styles/colors/colors.config";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const argTypes = {
    color: {
        control: "color" || typeof colors,
        description: "demo description",
        table: {
            category: "Colors",
        },
    },
    variant: {
        control: { type: "select" },
        options: ["solid", "ghost", "minimal"],
        table: {
            category: "Variant",
        },
    },
    // iconLeft: {
    //     control: { type: "boolean" },
    //     description:
    //         "At the component level Icons can be passed in as ReactNode elements. In this case the icon has been converted to a Boolean.",
    //     table: {
    //         category: "Icons",
    //     },
    // },
    // iconRight: {
    //     control: { type: "boolean" },
    //     description:
    //         "At the component level Icons can be passed in as ReactNode elements. In this case the icon has been converted to a Boolean.",
    //     table: {
    //         category: "Icons",
    //     },
    // },
    label: {
        control: "color",
        table: {
            category: "Text",
        },
    },
    size: {
        control: { type: "select" },
        options: ["xs", "sm", "md", "lg", "xl"],
        table: {
            category: "Sizes",
        },
    },
};

const meta: Meta<typeof Button> = {
    title: "Example/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: argTypes,
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        size: "sm",
        label: "Support BibleProject",
        color: "ebony",
        iconLeft: <PlayIcon />,
    },
};

export const Secondary: Story = {
    args: {
        size: "sm",
        label: "Secondary Button",
        color: "green400",
        variant: "ghost",
        iconLeft: <PlayIcon />,
        iconRight: <GlobeIcon />,
    },
};

export const Minimal: Story = {
    args: {
        label: "Minmal Button",
        color: "ebony",
        variant: "minimal",
        iconLeft: <PlayIcon />,
    },
};
