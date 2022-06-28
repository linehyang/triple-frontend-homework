import styled from 'styled-components'

const TitleLogoContainer = styled.div`
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
`

const TitleLogo = () => {
  return <TitleLogoContainer>2021년 12월 기준</TitleLogoContainer>
}

export default TitleLogo
