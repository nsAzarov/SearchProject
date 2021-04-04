import Spinner from '../Spinner'
import SearchResult from '../SearchResult'
import * as S from './styles'

interface Props {
  results: string[]
  loading: boolean
}

const SearchResultsArea: React.FC<Props> = (props) => {
  const { results, loading = true } = props
  return (
    <S.SearchResultsArea>
      {/* <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper> */}
      {loading ? (
        <S.SpinnerWrapper>
          <Spinner />
        </S.SpinnerWrapper>
      ) : (
        <S.ScrollableArea>
          {results.map((result) => (
            <SearchResult key={result} result={result} />
          ))}
        </S.ScrollableArea>
      )}
    </S.SearchResultsArea>
  )
}

export default SearchResultsArea
