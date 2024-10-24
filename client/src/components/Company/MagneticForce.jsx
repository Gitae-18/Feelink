import React, { useState } from "react";
import styled, { keyframes }from "styled-components";
import Title from "./TECUTITLE";

export default function MagneticForce() {
    const [hoverTop, setHoverTop] = useState(false);
    const [hoverMiddle, setHoverMiddle] = useState(false); // 중간 섹션에 대한 상태 추가

    return(
    <Container>
      <Title title='Real-Time Magnetic Force Measurement Device' subtitle='' third=''/>
      <Section className='top-section'>       
        <ImageContainer className='top'
          onMouseEnter={() => setHoverTop(true)}
          onMouseLeave={() => setHoverTop(false)}
        >
          <Image src="/images/company/mfmd.jpg" alt="T-ECU Image" className="tecu_1"/>          
          <TextOverlay hover={hoverTop}>
            <TextTitle>Magnetic Force Measurement device</TextTitle>
            <TextContent>실시간 자기력 정보 측정 및 운영 모니터링 시스템</TextContent>
          </TextOverlay>
        </ImageContainer>
        <TextContainer className='top-text'>
          <ul>
            <li>2차 전지 자기력 배양 생산 설비의 실시간 자기력
                정보 측정 및 운영 모니터링 시스템 
            </li>
            <li>Coater 별 2개의 가우스 센서 설치하여 Coater의
                운영 상태 값 전송 
            </li>
            <li>자기배양설비 공급 업체 현장 실증 중 </li>            
          </ul>
        </TextContainer>
      </Section>
      <Title title='Performance' subtitle=''/>
      <Section className='middle-section'>       
        <ImageContainer className='middle'
          onMouseEnter={() => setHoverMiddle(true)}
          onMouseLeave={() => setHoverMiddle(false)}
        >
          <Image src="/images/company/mfmd_device.jpg" alt="T-ECU Image" className='perform'/>          
          <TextOverlay hover={hoverMiddle}>
            <TextTitle>Magnetic Force Measurement device</TextTitle>
            <TextContent>실시간 자기력 측정 장치</TextContent>
          </TextOverlay>
        </ImageContainer>
        <TextContainer className='top-text'>
          <ul>
            <li>2022년 10월 : 1차 측정 장치 개발 </li>
            <li>2023년 01월 : 2차 측정 장치 개발 및 실증</li>
            <li>2023년 03월 : 중국/헝가리 자기력 배양장치 8개 생산 라인 납품</li>
            <li>2024년 03월 : 중국/헝가리/미국 자기력 배양장치 5개 생산라인 납품 예정</li>
          </ul>
        </TextContainer>
      </Section>
      <BottomSection className='bottom-section'>
        <FeaturesContainer>
        <FeatureItem>
            <Icon>💡</Icon>
            <FeatureTitle>Real-Time Monitoring</FeatureTitle>
            <FeatureDescription>
                <li>Real-time magnetic force data monitoring</li>
                <li>Magnetic force data alarm function</li>
                <li>Real-time error status alarm function</li>
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>⚙️</Icon>
            <FeatureTitle>Configuration Settings</FeatureTitle>
            <FeatureDescription>
                <li>Magnetic force threshold setting</li>
                <li>PLC integration setting</li>
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>📊</Icon>
            <FeatureTitle>Monitor Operation Status</FeatureTitle>
            <FeatureDescription>
                <li>Processing / Non-Processing</li>
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>📈</Icon>
            <FeatureTitle>Interworking Parent Systems</FeatureTitle>
            <FeatureDescription>
                <li>Integration with upper PLC systems</li>
            </FeatureDescription>
        </FeatureItem>
      </FeaturesContainer>
      </BottomSection>
    </Container>
    )
};

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: ease 1s translateX(-30%);
  }
  100% {
    opacity: 1;
    transform: ease 1s translateX(0);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  width: 100%;
  position: relative;
  &.top-section, &.middle-section {
    margin-bottom:100px;
    margin-left:10%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  flex-direction: row; 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.2); /* 내부 그림자 */
    border-radius: inherit;
    z-index: 1;
  }
   &.top {    
    margin-left: 20px;
   }  
   &.middle {
    margin-left: 20px;
   }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  //border: 2px solid #ccc; /* 테두리 추가 */
  &.tecu_1, &.tecu_2 {
   object-fit: contain;
   transform: scale(0.7);
  }
  &.perform {
    object-fit: fill;
    transform: scale(0.8);
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: ${(props) => (props.hover ? "0" : "-100%")};
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 20px;
  box-sizing: border-box;
  transition: bottom 0.5s ease-in-out;
`;

const TextTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const TextContent = styled.p`
  margin: 10px 0 0;
  font-size: 1em;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  background-color: #f9f9f9;
  padding: 0 !important;  
`;

const TextContainer = styled.div`
  width: 50%;
  opacity: 0;
  animation: ${slideIn} 1s ease forwards;
  animation-delay: 0.5s;

  ul {
    white-space:normal;
    list-style-type: disc;
    line-height:2;
    padding: 0;
    margin: 0;
    font-size: 1.5em;
    li {
      margin-bottom: 10px;
      word-wrap: break-word; /* 단어를 적절하게 줄바꿈 */
      word-break: break-all; /* 길이가 길면 강제로 줄바꿈 */
      max-width: 500px; /* 37자의 너비 제한 */
    }
  }
`;
const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start-end;
  text-align:  start-end;
`;

const Icon = styled.div`
  font-size: 2.0em;
  margin: 0;
  left: 0;
  position: relative;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 0em;
  color: #011936;
`;

const FeatureDescription = styled.ul`
  font-size: 1em;
  color: #555;
  line-height: 1.5;
  padding-left: 20px;
  list-style-type: disc; /* 리스트 스타일을 디스크 형식으로 */
  
  li {
    margin-bottom: 5px; /* 각 리스트 아이템 사이에 여백 추가 */
  }
`;