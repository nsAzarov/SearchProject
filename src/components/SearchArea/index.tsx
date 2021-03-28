import DropdownButton from './DropdownButton'
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'
import * as S from './styles'

interface Props {
  query: string
  setQuery: (val: string) => void
  onDropdownButtonClick: () => void
  onSearchButtonClick: () => void
}

const SearchArea: React.FC<Props> = (props) => {
  const { query, setQuery, onDropdownButtonClick, onSearchButtonClick } = props
  return (
    <S.Wrapper>
      <SearchInput value={query} onChange={setQuery} />
      <DropdownButton onClick={onDropdownButtonClick}>Filters</DropdownButton>
      <SearchButton onClick={onSearchButtonClick}>Search</SearchButton>
    </S.Wrapper>
  )
}

export default SearchArea
