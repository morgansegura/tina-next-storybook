import type { Meta, StoryObj } from "@storybook/react";

// import { Button } from './Button';
import Button from "@components/elements/button/button.component";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
    title: "Example/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        bgColor: {
            control: "color",
        },
        size: {
            control: "xs",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        size: "sm",
        label: "Button",
        onClick: () => alert("Jeremy Rocks!"),
    },
};

export const Secondary: Story = {
    args: {
        label: "Button",
    },
};

export const Large: Story = {
    args: {
        label: "Button",
    },
};

export const Small: Story = {
    args: {
        label: "Button",
    },
};
