import styled from 'styled-components'

const IndicatorContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`

const IndicatorContent = styled.div`
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 36px;
  letter-spacing: -1px;

  & strong {
    font-weight: bold;
  }
`

const Indicator = () => {
  return (
    <IndicatorContainer>
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
