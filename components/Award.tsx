import styled from 'styled-components'

const AwardContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`

const AwardContent = styled.div`
  display: inline-block;
  height: 64px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: rgba(58, 58, 58, 0.8);
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
`

const GoogleAward = styled(AwardContent)`
  background-image: url('play-store2x.png');
`

const AppleAward = styled(AwardContent)`
  background-image: url('badge-apple4x.png');
`

const Award = () => {
  return (
    <AwardContainer>
      <GoogleAward>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </GoogleAward>
      <AppleAward>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AppleAward>
    </AwardContainer>
  )
}

export default Award
