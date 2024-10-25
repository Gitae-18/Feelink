import React, { useState } from "react";
import styled, { keyframes }from "styled-components";
import Title from "./TECUTITLE";

export default function TECU() {
  const [hoverTop, setHoverTop] = useState(false);
  const [hoverMiddle, setHoverMiddle] = useState(false);
  
  return (
    <Container>
      {/* Top Section */}
      <Title title='T-ECU' subtitle='Transmission Electronic Control Unit' third='Solution'/>
      <Section className='top-section'>       
      <ImageContainer
          className="top"
          onMouseEnter={() => setHoverTop(true)}
          onMouseLeave={() => setHoverTop(false)}
        >
          <Image src="/images/company/t_ecu_engine.jpg" alt="E-Call Device" className='tecu_1'/>
          <Image src="/images/company/tecu_controller.jpg" alt="E-Call Device" className='tecu_2'/>
          <TextOverlay hover={hoverTop}>
            <TextTitle>E-Call & DSM</TextTitle>
            <TextContent>보급형 E-Call 단말기 & 보급형 DSM 단말기  </TextContent>
          </TextOverlay>
        </ImageContainer>
        <TextContainer className='top-text'>
          <ul>
            <li>Electronic Control Unit Dedicated To Forklift Transmission(ECU)</li>
            <li>Built-in No-Torque Converter method</li>
            <li>Energy-Savings More Than 33%</li>
            <li>Battery Operating-Time Doubled</li>
            <li>Self-Diagnosis & Prevention Function</li>
          </ul>
        </TextContainer>
      </Section>

      {/* Middle Section */}
      <Title title='Performance' subtitle=''/>
      <Section className='middle-section'>      
        <ImageContainer className='middle'
          onMouseEnter={() => setHoverMiddle(true)}
          onMouseLeave={() => setHoverMiddle(false)}
        >
          <Image src="/images/company/board.jpg" alt="T-ECU Image" className='perform'/>
          <TextOverlay hover={hoverMiddle}>
            <TextTitle>T-ECU</TextTitle>
            <TextContent>T-ECU 전용 클러스터 고급형 단말기</TextContent>
          </TextOverlay>
        </ImageContainer>        
        <TextContainer className='mid-text'>
          <ul>
            <li>December 2022 <br/>Fourth Generation Engine Forklift TECU Development&Supply</li>
            <li>August 2023 <br/> TECU Exclusive-Cluster Standard Device Development&Supply</li>
            <li>November2023 <br/>TECU Exclusive-Cluster Advanced Device Development&Supply</li>
            <li>December2023 <br/>Fifth Generation Electric Forklift TECU Under Development</li>            
          </ul>
        </TextContainer>
      </Section>

      {/* Bottom Section for text features */}
      <BottomSection className='bottom-section'>
        <FeaturesContainer>
        <FeatureItem>
            <Icon>💡</Icon>
            <div>
            <FeatureTitle>Self-Diagnosis Function</FeatureTitle>
            <FeatureDescription>
                <li>Good oil replacement/filter exchange</li>
                <li>Electronic/mechanical defect diagnosis</li>
                <li>Accident prevention function</li>
            </FeatureDescription>
            </div>
        </FeatureItem>

        <FeatureItem>
            <Icon>⚙️</Icon>
            <div>
            <FeatureTitle>Optimal Operational Algorithm</FeatureTitle>
            <FeatureDescription>
                <li>Anti-Roll Back</li>
                <li>Auto-Jerk Prevent</li>
                <li>Auto-Emergency</li>
            </FeatureDescription>
            </div>
        </FeatureItem>

        <FeatureItem>
            <Icon>📊</Icon>
            <div>
            <FeatureTitle>Data Management</FeatureTitle>
            <FeatureDescription>
                <li>Operation information/operation time management</li>
                <li>Exclusive display device</li>
                <li>Provide vehicle management information</li>
            </FeatureDescription>
            </div>
        </FeatureItem>

        <FeatureItem>
            <Icon>📈</Icon>
            <div>
            <FeatureTitle>Configuration Settings</FeatureTitle>
            <FeatureDescription>
                <li>Setting the optimal driving environment for each vehicle type</li>
                <li>Manage input of environment setting information</li>
            </FeatureDescription>
            </div>
        </FeatureItem>
        </FeaturesContainer>
      </BottomSection>
    </Container>
  );
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
  justify-content:space-between;
  align-items: center;
  //height: 50vh;
  width: 100%;
  position: relative;
  &.top-section, &.middle-section {
    margin-bottom:100px;
    margin-left:5%;
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
    height: 25vh;
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
    object-fit: scale-down;
    transform: scale(1.8);
    width:16vw;
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
    list-style-type: disc;
    line-height:2;
    padding: 0;
    margin: 0;
    font-size: 1.2em;
    li {
      margin-bottom: 10px;
      word-wrap: break-word; /* 단어를 적절하게 줄바꿈 */
      word-break: break-all; /* 길이가 길면 강제로 줄바꿈 */      
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