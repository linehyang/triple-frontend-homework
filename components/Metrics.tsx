import styled from 'styled-components'

import { useMounted } from '../hooks/useMounted'
import type { UseMountedReturnType } from '../hooks/useMounted'
import useCountUp from '../hooks/useCountUp'
import { fadeInUp } from '../styles/animation'

const MetricsContainer = styled.ul<UseMountedReturnType>`
  margin-left: 623px;
  padding-top: 150px;
  ${(props) => fadeInUp(props.isMounted, 100)}
`

const MetricItem = styled.li`
  margin-bottom: 20px;
  font-size: 36px;
  letter-spacing: -1px;

  & strong {
    font-weight: bold;
  }
`

const MAXIMUM_TRAVELER_COUNT = 700
const MAXIMUM_REVIEW_COUNT = 100
const MAXIMUM_SCHEDULE_COUNT = 470

const Metrics = () => {
  const isMounted = useMounted()
  const travelerCount = useCountUp(MAXIMUM_TRAVELER_COUNT)
  const reviewCount = useCountUp(MAXIMUM_REVIEW_COUNT)
  const scheduleCount = useCountUp(MAXIMUM_SCHEDULE_COUNT)

  return (
    <MetricsContainer isMounted={isMounted}>
      <MetricItem>
        <strong>{travelerCount}만 명</strong>의 여행자
      </MetricItem>
      <MetricItem>
        <strong>{reviewCount}만 개</strong>의 여행 리뷰
      </MetricItem>
      <MetricItem>
        <strong>{scheduleCount}만 개</strong>의 여행 일정
      </MetricItem>
    </MetricsContainer>
  )
}

export default Metrics
