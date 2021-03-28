import { Story, Meta } from '@storybook/react/types-6-0'
import HorizontalSelector from '.'

export default {
  title: 'HorizontalSelector',
  component: HorizontalSelector
} as Meta

const defaultProps = {
  label: 'Label',
  options: [
    'Variant1',
    'Variant2',
    'Variant3',
    'Variant4',
    'Variant5',
    'Variant6',
    'Variant7',
    'Variant8',
    'Variant9',
    'Variant10',
    'Variant11'
  ],
  onFilterChange: (category: string, option: string) =>
    console.log(category, option)
}

export const Default: Story = () => {
  return <HorizontalSelector {...defaultProps} />
}
