import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import TitleLogo from '../components/TitleLogo'
import Statistics from '../components/Statistics'
import Award from '../components/Award'

const Sectioncontainer = styled.section`
  position: relative;
`

const SectionHeading = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Triple Frontend Homework</title>
      </Head>
      <main>
        <Sectioncontainer>
          <SectionHeading>트리플 어워드 및 통계</SectionHeading>
          <TitleLogo />
          <Statistics />
          <Award />
        </Sectioncontainer>
      </main>
    </>
  )
}

export default Home
