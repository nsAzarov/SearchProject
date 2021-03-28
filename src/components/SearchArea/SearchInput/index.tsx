import { useRef } from 'react'
import * as S from './styles'

interface Props {
  value: string
  onChange: (val: string) => void
}

const SearchInput: React.FC<Props> = (props) => {
  const { value, onChange } = props
  const ref = useRef<HTMLInputElement>(null)
  const onClick = () => ref.current?.focus()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  const clearInput = () => onChange('')

  return (
    <S.Wrapper onClick={onClick}>
      <S.MagnifierIcon src="img/magnifier.svg" />
      <S.Input value={value} onChange={handleInputChange} ref={ref} />
      <S.ClearIcon src="img/delete.svg" onClick={clearInput} />
    </S.Wrapper>
  )
}

export default SearchInput
