import styled from "styled-components";

// 텍스트와 파란색 선을 포함한 컨테이너
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 10px;
`;

// 파란색 선
const BlueBar = styled.div`
  width: 5px;
  height: 100%;
  background-color: #282F44; /* 파란색 */
  margin-right: 10px;
`;

// T-ECU 텍스트 스타일
const TitleText = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  margin: 0;
  display: inline;

  span {
    font-weight: normal;
    font-size: 1em;
    color: #333;
  }
`;
const SubText = styled.span`
  font-size: 0.9em !important;
`
const Title = ({title, subtitle, third}) => {
  return (
    <TitleContainer>
      <BlueBar />
      <TitleText>
        {title} <SubText>{(subtitle)}</SubText> <SubText>{third}</SubText>
      </TitleText>
    </TitleContainer>
  );
};

export default Title;