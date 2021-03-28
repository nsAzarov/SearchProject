import { Story, Meta } from '@storybook/react/types-6-0'
import FiltersArea from '.'

export default {
  title: 'FiltersArea',
  component: FiltersArea
} as Meta

export const Default: Story = () => {
  const onFilterChange = (category: string, option: string) =>
    console.log(category, option)
  return <FiltersArea filters={[]} onFilterChange={onFilterChange} />
}
