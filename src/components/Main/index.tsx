import SearchArea from '../SearchArea'
import { useState } from 'react'
import { newData, University } from './data'
import * as S from './styles'
import SearchResultsArea from '../SearchResultsArea'
import FiltersArea from '../FiltersArea'
import { Filter } from 'types/Filter'

const Main = () => {
  const [query, setQuery] = useState('')

  const [filtersOpen, setFiltersOpen] = useState(false)
  const onDropdownButtonClick = () => setFiltersOpen(!filtersOpen)

  const [filters, setFilters] = useState<Filter[]>([])
  const onFilterChange = (category: string, option: string) => {
    const newFiltersState: Filter[] = [...filters]

    const filter = filters.find((filter) => filter.category === category)
    if (!filter) {
      newFiltersState.push({ category, options: [option] })
      setFilters([...filters, { category, options: [option] }])
      return
    }

    const indexOfOption = filter.options.indexOf(option)
    if (indexOfOption !== -1) {
      filter.options.splice(indexOfOption, 1)
    } else {
      filter.options = [...filter.options, option]
    }

    const newArr = newFiltersState.map((_filter) =>
      _filter.category === category ? filter : _filter
    )
    setFilters(newArr)
  }

  const [results, setResults] = useState<University[]>([])
  const makeSearch = async () => {
    const res: University[] = []
    await newData.forEach((val) => {
      if (val.name?.includes(query)) res.push(val)
    })
    setResults(res)
  }

  return (
    <S.Wrapper>
      <SearchArea
        query={query}
        setQuery={setQuery}
        onDropdownButtonClick={onDropdownButtonClick}
        onSearchButtonClick={makeSearch}
      />
      {filtersOpen && (
        <FiltersArea filters={filters} onFilterChange={onFilterChange} />
      )}
      {results.length > 0 && <SearchResultsArea results={results} />}
    </S.Wrapper>
  )
}

export default Main
