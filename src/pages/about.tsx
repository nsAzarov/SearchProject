import Layout from 'components/Layout'
import Logo from 'components/Logo'
import { University } from 'components/Main/data'
import Photo from 'components/Photo'
import TextArea from 'components/TextArea'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  margin-bottom: 30px;
  color: white;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const About = () => {
  const router = useRouter()
  const { logo, photo, name, descriptions }: University = router.query
  return (
    <Layout>
      <Header>{name}</Header>
      <ContentWrapper>
        {!!logo && <Logo src={logo as string} alt={'лого'} />}
        {!!photo && <Photo src={photo as string} alt={'фото'} />}
        {descriptions?.map((str) => (
          <TextArea key={str}>{str}</TextArea>
        ))}
      </ContentWrapper>
    </Layout>
  )
}

export default About
