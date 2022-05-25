import { Story, Meta } from '@storybook/react';

import { Test1 } from './Test1';
import { Test1Props } from './types';

export default {
  component: Test1,
  title: 'Test1',
} as Meta;

const Template: Story<Test1Props> = (args) => <Test1 {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'Test1' };
