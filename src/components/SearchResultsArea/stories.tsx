import { Story, Meta } from '@storybook/react/types-6-0'
import SearchResultsArea from '.'

export default {
  title: 'SearchResultsArea',
  component: SearchResultsArea
} as Meta

const defaultProps = {
  results: [
    'Академия акварели и изящных искусств Сергея Андрияки',
    'Академия внешней разведки',
    'Академия государственной противопожарной службы МЧС России'
  ]
}

export const Default: Story = () => {
  return <SearchResultsArea {...defaultProps} />
}
