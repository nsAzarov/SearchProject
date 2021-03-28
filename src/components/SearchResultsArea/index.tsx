import { University } from 'components/Main/data'
import SearchResult from '../SearchResult'
import * as S from './styles'

interface Props {
  results: University[]
}

const SearchResultsArea: React.FC<Props> = (props) => {
  const { results } = props
  return (
    <S.SearchResultsArea>
      <S.ScrollableArea>
        {results.map((result) => (
          <SearchResult key={result.name} result={result} />
        ))}
      </S.ScrollableArea>
    </S.SearchResultsArea>
  )
}

export default SearchResultsArea
