import { Filter } from 'types/Filter'
import HorizontalSelector from './HorizontalSelector'
import * as S from './styles'

interface Props {
  filters: Filter[]
  onFilterChange: (category: string, option: string) => void
}

const FiltersArea: React.FC<Props> = (props) => {
  const { filters, onFilterChange } = props
  return (
    <S.FiltersArea>
      <S.SelectedFilters>
        {filters.map((filter) =>
          filter.options.map((option) => (
            <S.SelectedOption
              key={option}
              onClick={() => onFilterChange(filter.category, option)}
            >
              {option}
              <S.CloseIcon src="img/close.svg" />
            </S.SelectedOption>
          ))
        )}
      </S.SelectedFilters>

      <HorizontalSelector
        label="Город"
        options={['Москва', 'Санкт-Петербург']}
        onFilterChange={onFilterChange}
      />
    </S.FiltersArea>
  )
}

export default FiltersArea
