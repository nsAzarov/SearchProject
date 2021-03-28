import * as S from './styles'
import Link from 'next/link'
import { University } from 'components/Main/data'

interface Props {
  result: University
}

const SearchResult: React.FC<Props> = (props) => {
  const { result } = props
  return (
    <Link
      as={'/about/' + result.name}
      href={{
        pathname: '/about',
        query: {
          name: result.name,
          logo: result.logo,
          photo: result.photo,
          descriptions: result.descriptions
        }
      }}
    >
      <S.SearchResult>{result.name}</S.SearchResult>
    </Link>
  )
}

export default SearchResult
