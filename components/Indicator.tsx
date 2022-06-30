import styled from 'styled-components'

import useFadeInUp from '../hooks/useFadeInUp'
import useCountUp from '../hooks/useCountUp'
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
  const traveler = useCountUp(700)
  const review = useCountUp(100)
  const schedule = useCountUp(470)

  return (
    <IndicatorContainer isLoading={isLoading}>
      <IndicatorContent>
        <strong>
          <span>{traveler}</span>만 명
        </strong>
        의 여행자
      </IndicatorContent>
      <IndicatorContent>
        <strong>
          <span>{review}</span>만 개
        </strong>
        의 여행 리뷰
      </IndicatorContent>
      <IndicatorContent>
        <strong>
          <span>{schedule}</span>만 개
        </strong>
        의 여행 일정
      </IndicatorContent>
    </IndicatorContainer>
  )
}

export default Indicator
