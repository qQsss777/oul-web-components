import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  component: "code-block",
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    primary: true,
    label: "code-block",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "code-block",
  },
};
