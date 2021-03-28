import { Story, Meta } from '@storybook/react/types-6-0'
import Tag from '.'

const defaultProps = {
  children: 'Tag',
  onClick: () => console.log('Click')
}

export default {
  title: 'Tag',
  component: Tag,
  args: defaultProps
} as Meta

export const Default: Story = (args) => <Tag {...defaultProps} {...args} />
