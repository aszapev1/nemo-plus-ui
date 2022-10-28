import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from './Button'

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Кнопка</Button>;

export const Demo = Template.bind({});
Demo.args = {
  size: 44,
  variant: 'primary',
  type: 'button',
  name: 'button',
  disabled: false,
  autoFocus: false,
  loading: false,
  onClick: () => console.log('test click')
};
