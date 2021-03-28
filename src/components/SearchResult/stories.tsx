import { Story, Meta } from '@storybook/react/types-6-0'
import SearchResult from '.'

export default {
  title: 'SearchResult',
  component: SearchResult
} as Meta

const defaultProps = {
  result: 'Академия государственной противопожарной службы МЧС России'
}

export const Default: Story = () => {
  return <SearchResult {...defaultProps} />
}
