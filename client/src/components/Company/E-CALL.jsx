import React, { useState } from "react";
import styled, { keyframes }from "styled-components";
import Title from "./TECUTITLE";

export default function ECALL() {
  const [hoverTop, setHoverTop] = useState(false);
  const [hoverMiddle, setHoverMiddle] = useState(false);

  return (
    <Container>
      {/* Top Section */}
      <Title title="E-Call & DSM" subtitle="Emergency Call & Driver Status Monitoring" />
      <Section className='top-section'>
        <ImageContainer
          className="top"
          onMouseEnter={() => setHoverTop(true)}
          onMouseLeave={() => setHoverTop(false)}
        >
          <Image src="/images/company/EcallSystem.jpg" alt="E-Call System" className='ecall'/>
          <TextOverlay hover={hoverTop}>
            <TextTitle>E-Call & DSM</TextTitle>
            <TextContent>
              차량 사고 시 사고 상황을 자동 감지하여 사고정보를 E-Call 센터로 전송 장치
            </TextContent>
          </TextOverlay>
        </ImageContainer>
        <TextContainer>
          <ul>
            <li>차량 사고 시 사고 상황을 자동 감지하여 사고정보를 E-Call 센터로 전송 장치</li>
            <li>사고 발생 자동 인지 후 E-Call 센터와 음성 통화 및 구급기관과 자동 연결</li>
            <li>차량 기본 장착용 E-Call 시스템 및 안전성 평가 기술 개발 및 실증 완료</li>
            <li>E-Call 시스템 장착 의무화</li>
          </ul>
        </TextContainer>
      </Section>

      {/* Middle Section */}
      <Title title="Performance" subtitle="" />
      <Section className='middle-section'>        
        <ImageContainer
          className="middle"
          onMouseEnter={() => setHoverMiddle(true)}
          onMouseLeave={() => setHoverMiddle(false)}
        >
          <Image src="/images/company/EcallDevice.jpg" alt="E-Call Device" className='perform'/>
          <Image src="/images/company/EcallDevice2.jpg" alt="E-Call Device" className='perform'/>
          <TextOverlay hover={hoverMiddle}>
            <TextTitle>E-Call & DSM</TextTitle>
            <TextContent>보급형 E-Call 단말기 & 보급형 DSM 단말기  </TextContent>
          </TextOverlay>
        </ImageContainer>
        <TextContainer>
          <ul>
            <li>2022년 09월 : 보급형 E-Call 1차 단말기 개발 및 납품</li>
            <li>2022년 12월 : 보급형 DSM 단말기 개발 및 납품</li>
            <li>2023년 03월 : 보급형 E-Call 단말기 시제품 양산 준비 중</li>
          </ul>
        </TextContainer>
      </Section>

      {/* Bottom Section for text features */}
      <BottomSection className='bottom-section'>
      <FeaturesContainer>
        <FeatureItem>
            <Icon>🔧</Icon>
            <FeatureTitle>Integrated Demonstration Test Completed</FeatureTitle>
            <FeatureDescription>
            <li>Completed transportation safety authority demonstration test</li>
            <li>Verified safety evaluation technology</li>
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>📡</Icon>
            <FeatureTitle>LTE-Based System</FeatureTitle>
            <FeatureDescription>
            <li>Overseas E-Call device / 3G-based</li>
            <li>Completed domestic LTE-based tests</li>
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>💸</Icon>
            <FeatureTitle>Introduction Cost</FeatureTitle>
            <FeatureDescription>
            <li>50% cost reduction compared to existing devices</li>
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>📈</Icon>
            <FeatureTitle>Mandatory Installation</FeatureTitle>
            <FeatureDescription>
            <li>Mandatory legislation in Europe and Russia</li>
            <li>Legislation effective from July 2022</li>
            </FeatureDescription>
        </FeatureItem>
        </FeaturesContainer>
      </BottomSection>
    </Container>
  );
}
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
// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  margin-bottom: 100px;
  margin-left: 5%;
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
  &.ecall {
   object-fit: contain;
   transform: scale(0.6);
  }
  &.perform {
    object-fit: fill;
    transform: scale(0.8);
    width:16vw;
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

const TextContainer = styled.div`
  width: 50%;
  opacity: 0;
  animation: ${slideIn} 1s ease forwards;
  animation-delay: 0.5s;

  ul {
    list-style-type: disc;
    line-height:2;
    padding: 0;
    margin: 0;
    font-size: 1.5em;
    li {
      margin-bottom: 10px;
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  background-color: #f9f9f9;
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