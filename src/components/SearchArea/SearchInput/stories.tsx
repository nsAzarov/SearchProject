import { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'
import SearchInput from '.'

export default {
  title: 'SearchInput',
  component: SearchInput
} as Meta

export const Default: Story = () => {
  const [value, setValue] = useState<string>('')

  return <SearchInput value={value} onChange={setValue} />
}
