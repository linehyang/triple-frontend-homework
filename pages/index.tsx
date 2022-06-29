import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import TitleLogo from '../components/TitleLogo'
import Indicator from '../components/Indicator'
import Award from '../components/Award'

const Sectioncontainer = styled.section`
  position: relative;
  overflow: hidden;
`
const SectionHeading = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`
const ContentContainer = styled.div`
  position: relative;
  width: 1040px;
  height: auto;
  margin: 0 auto;
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Triple Frontend Homework</title>
      </Head>
      <main>
        <Sectioncontainer>
          <SectionHeading>Triple Award & Statistics</SectionHeading>
          <ContentContainer>
            <TitleLogo />
            <Indicator />
            <Award />
          </ContentContainer>
        </Sectioncontainer>
      </main>
    </>
  )
}

export default Home
