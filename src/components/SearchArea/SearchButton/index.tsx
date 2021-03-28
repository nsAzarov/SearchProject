import { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode
  onClick: () => void
}

const SearchButton: React.FC<Props> = (props) => {
  const { children, onClick } = props
  return <S.Button onClick={onClick}>{children}</S.Button>
}

export default SearchButton
