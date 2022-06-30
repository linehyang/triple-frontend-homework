import styled from 'styled-components'

import useFadeInUp from '../hooks/useFadeInUp'
import { useFadeInUpType } from '../types/typeofUseFadeInUp'

const TitleLogoContainer = styled.div<useFadeInUpType>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  font-family: sans-serif;
  font-size: 15px;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
  background-size: 400px 338px;
  background-image: url('triple2x.png');
  background-repeat: no-repeat;
  opacity: ${(props) => (props.isRender ? '1' : '0')};
  transform: translateY(${(props) => (props.isRender ? '0' : '10px')});
  transition: all 700ms ease-out;
`

const TitleLogo = () => {
  const isRender = useFadeInUp(false)

  return (
    <TitleLogoContainer isRender={isRender}>
      2021년 12월 기준
    </TitleLogoContainer>
  )
}

export default TitleLogo
