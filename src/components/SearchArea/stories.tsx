import { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'

import SearchArea from '.'

export default {
  title: 'SearchArea',
  component: SearchArea
} as Meta

export const Default: Story = () => {
  const [query, setQuery] = useState('')
  const onDropdownButtonClick = () => console.log('click')
  const onSearchButtonClick = () => console.log('click')
  return (
    <SearchArea
      query={query}
      setQuery={setQuery}
      onDropdownButtonClick={onDropdownButtonClick}
      onSearchButtonClick={onSearchButtonClick}
    />
  )
}
