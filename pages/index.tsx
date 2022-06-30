import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import TripleLogo from '../components/TripleLogo'
import Metrics from '../components/Metrics'
import Awards from '../components/Awards'
import VisuallyHidden from '../components/VisuallyHidden'

const SectionContainer = styled.section`
  position: relative;
  overflow: hidden;
`

const ContentContainer = styled.div`
  position: relative;
  width: 1040px;
  margin: 0 auto;
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Triple Frontend Homework</title>
      </Head>
      <main>
        <VisuallyHidden>
          <h1>여행의 모든 것 트리플로 한 번에</h1>
        </VisuallyHidden>
        <SectionContainer>
          <VisuallyHidden>
            <h2>Triple Award & Statistics</h2>
          </VisuallyHidden>
          <ContentContainer>
            <TripleLogo />
            <Metrics />
            <Awards />
          </ContentContainer>
        </SectionContainer>
      </main>
    </>
  )
}

export default Home
