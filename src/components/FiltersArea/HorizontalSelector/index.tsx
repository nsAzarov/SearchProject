import * as S from './styles'

interface Props {
  label: string
  options: string[]
  onFilterChange: (category: string, option: string) => void
}

const HorizontalSelector: React.FC<Props> = (props) => {
  const { label, options, onFilterChange } = props

  if (!options) return null

  const onOptionClick = (option: string) => onFilterChange(label, option)

  return (
    <S.HorizontalSelector>
      {label}:
      <S.List>
        {options.map((option) => (
          <S.Option key={option} onClick={() => onOptionClick(option)}>
            {option}
          </S.Option>
        ))}
      </S.List>
    </S.HorizontalSelector>
  )
}

export default HorizontalSelector
