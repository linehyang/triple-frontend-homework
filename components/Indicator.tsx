import styled from 'styled-components'

import useFadeInUp from '../hooks/useFadeInUp'
import { useFadeInUpType } from '../types/typeofUseFadeInUp'

const IndicatorContainer = styled.div<useFadeInUpType>`
  margin-left: 623px;
  padding-top: 150px;
  opacity: ${(props) => (props.isLoading ? '1' : '0')};
  transform: translateY(${(props) => (props.isLoading ? '0' : '10px')});
  transition: all 700ms ease-out 100ms;
`

const IndicatorContent = styled.div`
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 36px;
  letter-spacing: -1px;
  animation-name: upnumber;
  animation-duration: 2000ms;
  animation-timing-function: ease-out;

  & strong {
    font-weight: bold;
  }
`

const Indicator = () => {
  const isLoading = useFadeInUp(false)

  return (
    <IndicatorContainer isLoading={isLoading}>
      <IndicatorContent>
        <strong>
          <span>700</span>만 명
        </strong>
        의 여행자
      </IndicatorContent>
      <IndicatorContent>
        <strong>
          <span>100</span>만 개
        </strong>
        의 여행 리뷰
      </IndicatorContent>
      <IndicatorContent>
        <strong>
          <span>470</span>만 개
        </strong>
        의 여행 일정
      </IndicatorContent>
    </IndicatorContainer>
  )
}

export default Indicator
