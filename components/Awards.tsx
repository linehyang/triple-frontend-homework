import styled from 'styled-components'

import { useMounted } from '../hooks/useMounted'
import type { UseMountedReturnType } from '../hooks/useMounted'

import { fadeInUp } from '../styles/animation'

const AwardsContainer = styled.ul<UseMountedReturnType>`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  ${(props) => fadeInUp(props.isMounted, 200)}
`

const AwardItem = styled.li<{ imageUrl: string }>`
  display: inline-block;
  height: 64px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${(props) => props.theme.colors.blackOpacity80};
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
`

const Awards = () => {
  const isMounted = useMounted()

  return (
    <AwardsContainer isMounted={isMounted}>
      <AwardItem imageUrl="/play-store2x.png">
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </AwardItem>
      <AwardItem imageUrl="/badge-apple4x.png">
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AwardItem>
    </AwardsContainer>
  )
}

export default Awards
