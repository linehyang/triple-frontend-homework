import styled from 'styled-components'

import { useMounted } from '../hooks/useMounted'
import type { UseMountedReturnType } from '../hooks/useMounted'
import { fadeInUp } from '../styles/animation'

const TitleLogoContainer = styled.div<UseMountedReturnType>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  font-size: 15px;
  text-align: center;
  color: ${(props) => props.theme.colors.blackOpacity70};
  background-size: 400px 338px;
  background-image: url(/triple2x.png);
  background-repeat: no-repeat;

  ${(props) => fadeInUp(props.isMounted)};
`

const TripleLogo = () => {
  const isMounted = useMounted()

  return (
    <TitleLogoContainer isMounted={isMounted}>
      2021년 12월 기준
    </TitleLogoContainer>
  )
}

export default TripleLogo
