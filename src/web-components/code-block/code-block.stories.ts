import type { Meta, StoryObj } from "@storybook/web-components";
import "./code-block";

const meta: Meta = {
  title: "Components/CodeBlock", // ← obligatoire
  component: "code-block",
  argTypes: {
    code: {
      control: "text",
      description: "Code à afficher",
      defaultValue: "console.log('Hello world');",
    },
    "custom-style": {
      control: "text",
      description:
        "Style CSS personnalisé appliqué au code block. Par exemple : textarea{background-color:yellow;}",
      defaultValue: "",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    code: "console.log('Hello world');",
    "custom-style": "",
  },
  render: ({ code, "custom-style": customStyle }) =>
    `<code-block code="${code}" custom-style="${customStyle}"></code-block>`,
};
