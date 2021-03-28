import { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode
  onClick: () => void
}

const DropdownButton: React.FC<Props> = (props) => {
  const { children, onClick } = props
  return (
    <S.Button onClick={onClick}>
      {children}
      <S.ArrowImg src="img/chevron.svg" />
    </S.Button>
  )
}

export default DropdownButton
