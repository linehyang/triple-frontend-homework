import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import TitleLogo from '../components/TitleLogo'
import Statistics from '../components/Statistics'
import Award from '../components/Award'

const Sectioncontainer = styled.section``

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Triple Frontend Homework</title>
      </Head>
      <main>
        <Sectioncontainer>
          <h2>트리플 어워드 및 통계</h2>
          <TitleLogo />
          <Statistics />
          <Award />
        </Sectioncontainer>
      </main>
    </>
  )
}

export default Home
