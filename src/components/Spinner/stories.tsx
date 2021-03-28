import { Story, Meta } from '@storybook/react/types-6-0'
import Spinner from '.'

export default {
  title: 'Spinner',
  component: Spinner,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Default: Story = (args) => <Spinner {...args} />
