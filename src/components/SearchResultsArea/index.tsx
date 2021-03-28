import SearchResult from '../SearchResult'
import * as S from './styles'

interface Props {
  results: string[]
}

const SearchResultsArea: React.FC<Props> = (props) => {
  const { results } = props
  return (
    <S.SearchResultsArea>
      <S.ScrollableArea>
        {results.map((result) => (
          <SearchResult key={result} result={result} />
        ))}
      </S.ScrollableArea>
    </S.SearchResultsArea>
  )
}

export default SearchResultsArea
