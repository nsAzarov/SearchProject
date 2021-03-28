import { Story, Meta } from '@storybook/react/types-6-0'
import DropdownButton from '.'

const defaultProps = {
  children: 'DropdownButton',
  onClick: () => console.log('Click')
}

export default {
  title: 'DropdownButton',
  component: DropdownButton,
  args: defaultProps
} as Meta

export const Default: Story = (args) => (
  <DropdownButton {...defaultProps} {...args} />
)
