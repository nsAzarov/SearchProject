import * as S from './styles'

interface Props {
  src: string
  alt?: string
}

const Logo: React.FC<Props> = (props) => {
  return <S.Img src={props.src} alt={props.alt} />
}

export default Logo
