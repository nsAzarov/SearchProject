import { ReactNode } from 'react'
import { Icons, iconURLs } from '../../utils'
import * as S from './styles'

interface Props {
  children: ReactNode
  onClick: () => void
}

const Tag: React.FC<Props> = (props) => {
  const { children, onClick } = props
  return (
    <S.Button onClick={onClick}>
      {children}
      <S.Icon src={iconURLs.get(Icons.Delete)} />
    </S.Button>
  )
}

export default Tag
