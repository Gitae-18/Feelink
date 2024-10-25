import React, { useState } from "react";
import styled, { keyframes }from "styled-components";
import Title from "./TECUTITLE";

export default function MLTD() {
    const [hoverTop, setHoverTop] = useState(false);
    const [hoverMiddle, setHoverMiddle] = useState(false); 

    return(
    <Container>
      <Title title='MAGNETIC LOAD TRANSFER DEVICE' subtitle='Control System' third=''/>
      <Section className='top-section'>       
        <ImageContainer className='top'
          onMouseEnter={() => setHoverTop(true)}
          onMouseLeave={() => setHoverTop(false)}
        >
          <Image src="/images/company/gravity.jpg" alt="MLTD Image" className="tecu_1"/>          
          <TextOverlay hover={hoverTop}>
            <TextTitle>Magnetic Load Transfer device</TextTitle>
            <TextContent>자기부상 이송장치 제어시스템</TextContent>
          </TextOverlay>
        </ImageContainer>
        <TextContainer className='top-text'>
          <ul>
            <li>The magnetic levitation transfer device of the OLED production facility sputter device 
                Optimal Operational Control and Real-Time Operational Monitoring System  
            </li>
            <li>Install 2 Gaussian sensors per Coater to send the operational status value of Coater 
            </li>
            <li>On-site demonstration of self-culture equipment suppliers </li>            
          </ul>
        </TextContainer>
      </Section>
      <Title title='Performance' subtitle=''/>
      <Section className='middle-section'>       
        <ImageContainer className='middle'
          onMouseEnter={() => setHoverMiddle(true)}
          onMouseLeave={() => setHoverMiddle(false)}
        >
          <Image src="/images/company/gravity_device.jpg" alt="MLTD Image" className='perform'/>          
          <TextOverlay hover={hoverMiddle}>
            <TextTitle>Magnetic Load Transfer device</TextTitle>
            <TextContent>자기부상 이송장치 제어시스템</TextContent>
          </TextOverlay>
        </ImageContainer>
        <TextContainer className='top-text'>
          <ul>
            <li>August 2021 <br/> 1st Product Development and Delivery </li>
            <li>November 2022 <br/> Development and delivery of 2nd product</li>
            <li>June 2023 <br/> 3rd product development and delivery</li>
            <li>December 2023 <br/> Delivery of 10.5G production facilities</li>
          </ul>
        </TextContainer>
      </Section>
      <BottomSection className='bottom-section'>
        <FeaturesContainer>
        <FeatureItem>
            <Icon>💡</Icon>
            <FeatureTitle>Real-Time Monitoring</FeatureTitle>
            <FeatureDescription>
                <li>Monitor real-time load data</li>
                <li>Monitor real-time vibration data</li>
                <li>LMS Live Interworking</li>
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>🔢</Icon>
            <FeatureTitle>Optimal Operational Algorithm</FeatureTitle>
            <FeatureDescription>
                <li>Optimal operational data learning capabilities</li>
                <li>Generating optimal control algorithms</li>
                <li>Real-time optimal operational control</li>
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>📋</Icon>
            <FeatureTitle>Vibration Sensor Interlocking</FeatureTitle>
            <FeatureDescription>
                <li>Development of real-time wireless vibration sensors</li>
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>🔗</Icon>
            <FeatureTitle>National Project</FeatureTitle>
            <FeatureDescription>
                <li>2021 Small Department Head's Task</li>
                <li>localization of Foreign Technology</li>
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
    font-size: 1.2em;
    li {
      margin-bottom: 10px;
      word-wrap: break-word; /* 단어를 적절하게 줄바꿈 */      
      max-width: 570px; /* 37자의 너비 제한 */
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