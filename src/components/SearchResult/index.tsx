import * as S from './styles'

interface Props {
  result: string
}

const SearchResult: React.FC<Props> = (props) => {
  const { result } = props
  return (
    // <Link
    //   as={'/about/' + result}
    //   href={{
    //     pathname: '/about',
    //     query: {
    //       name: result.name,
    //       logo: result.logo,
    //       photo: result.photo,
    //       descriptions: result.descriptions
    //     }
    //   }}
    // >
    <S.SearchResult>{result}</S.SearchResult>
    // </Link>
  )
}

export default SearchResult
