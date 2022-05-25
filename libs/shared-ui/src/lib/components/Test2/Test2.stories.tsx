import { Story, Meta } from '@storybook/react';

import { Test2 } from './Test2';
import { Test2Props } from './types';

export default {
  component: Test2,
  title: 'Test2',
} as Meta;

const Template: Story<Test2Props> = (args) => <Test2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
