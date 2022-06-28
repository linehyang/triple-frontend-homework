import styled from 'styled-components'

const StatisticsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`

const StatisticsContent = styled.div`
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 36px;
  letter-spacing: -1px;

  & strong {
    font-weight: bold;
  }
`

const Statistics = () => {
  return (
    <StatisticsContainer>
      <StatisticsContent>
        <strong>
          <span>700</span>만 명
        </strong>
        의 여행자
      </StatisticsContent>
      <StatisticsContent>
        <strong>
          <span>100</span>만 개
        </strong>
        의 여행 리뷰
      </StatisticsContent>
      <StatisticsContent>
        <strong>
          <span>470</span>만 개
        </strong>
        의 여행 일정
      </StatisticsContent>
    </StatisticsContainer>
  )
}

export default Statistics
