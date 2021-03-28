import { Story, Meta } from '@storybook/react/types-6-0'
import TextArea from '.'

export default {
  title: 'TextArea',
  component: TextArea
} as Meta

export const Default: Story = (args) => <TextArea {...args} />
