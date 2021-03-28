import { Story, Meta } from '@storybook/react/types-6-0'
import SearchButton from '.'

const defaultProps = {
  children: 'Search',
  onClick: () => console.log('Click')
}

export default {
  title: 'SearchButton',
  component: SearchButton,
  args: defaultProps
} as Meta

export const Default: Story = (args) => (
  <SearchButton {...defaultProps} {...args} />
)
