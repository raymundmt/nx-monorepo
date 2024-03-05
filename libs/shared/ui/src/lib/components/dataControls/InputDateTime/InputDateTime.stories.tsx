import type { Meta, StoryObj } from '@storybook/react';
import { InputDateTime } from './InputDateTime';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof InputDateTime> = {
  component: InputDateTime,
  title: 'InputDateTime',
};
export default meta;
type Story = StoryObj<typeof InputDateTime>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to InputDateTime!/gi)).toBeTruthy();
  },
};
