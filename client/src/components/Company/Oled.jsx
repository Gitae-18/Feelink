import React, { useState } from "react";
import styled, { keyframes }from "styled-components";
import Title from "./TECUTITLE";

export default function OLED() {
    const [hoverTop, setHoverTop] = useState(false);
    const [hoverMiddle, setHoverMiddle] = useState(false); 


    return(
    <Container>
      <Title title='OLED Process Data' subtitle='(Vacuum/Source) Analysis System' third=''/>
      <Section className='top-section'>       
        <ImageContainer className='top'
          onMouseEnter={() => setHoverTop(true)}
          onMouseLeave={() => setHoverTop(false)}
        >
          <Image src="/images/company/oled.jpg" alt="OLED Image" className="tecu_1"/>          
          <TextOverlay hover={hoverTop}>
            <TextTitle>Vibration Data Measurement System</TextTitle>
            <TextContent>Wireless & Real-Time</TextContent>
          </TextOverlay>
        </ImageContainer>
        <TextContainer className='top-text'>
          <ul>
            <li>Process Data Analysis System for Application of OLED Production Facilities
            </li>
            <li>Vacuum/source data log analysis
            </li>
            <li>Proof of Company S, a primary supplier of OLED manufacturing </li>            
          </ul>
        </TextContainer>
      </Section>
      <Title title='Performance' subtitle=''/>
      <Section className='middle-section'>       
        <ImageContainer className='middle'
          onMouseEnter={() => setHoverMiddle(true)}
          onMouseLeave={() => setHoverMiddle(false)}
        >
          <Image src="/images/company/oled.jpg" alt="OLED Image" className='perform'/>          
          <TextOverlay hover={hoverMiddle}>
            <TextTitle>Vibration Data Measurement System</TextTitle>
            <TextContent>Wireless & Real-Time</TextContent>
          </TextOverlay>
        </ImageContainer>
        <TextContainer className='top-text'>
          <ul>
            <li>Feb 2021: Development of alignment process data analysis system </li>
            <li>Dec 2021: Development of Vacuum/Source Data Analysis System</li>
            <li>Dec 2022: Company I developed an Aline process MCC chart system</li>            
          </ul>
        </TextContainer>
      </Section>
      <BottomSection className='bottom-section'>
        <FeaturesContainer>
        <FeatureItem>
            <Icon>🧠</Icon>
            <FeatureTitle>Building Big Data</FeatureTitle>
            <FeatureDescription>
                <li>MongoDB-based</li>
                <li>Application of OLED production facilities</li>  
                <li>Source/Vacuum Log Data</li>           
            </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
            <Icon>🔢</Icon>
            <FeatureTitle>Anomaly Detection Algorithm</FeatureTitle>
            <FeatureDescription>
                <li>Rule-based anomaly detection algorithm</li>
                <li>Extraction of anomaly data</li>
            </FeatureDescription>
        </FeatureItem>        

        <FeatureItem>
            <Icon>📈</Icon>
            <FeatureTitle>Data Inquiry and Analysis</FeatureTitle>
            <FeatureDescription>
                <li>Inquire and analyze vacuum data</li>
                <li>Inquire and analyze source data</li>
            </FeatureDescription>
        </FeatureItem>
        <FeatureItem>
            <Icon>📊</Icon>
            <FeatureTitle>MCC Charts</FeatureTitle>
            <FeatureDescription>
                <li>Analyzing anomaly detection data in detail</li>
            </FeatureDescription>
        </FeatureItem>
      </FeaturesContainer>
      </BottomSection>
    </Container>
    )
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