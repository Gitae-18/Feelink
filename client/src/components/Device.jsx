import React from "react";
import styled from "styled-components";
import { ButtonGroup } from "./ButtonGripStyles";
export default function Device() {
  return (
    <>
    <ButtonGroup/>             
    <Container>
      <TextSection>
        <Title>FEELINK</Title>
        <SubTitle>Electric Vehicle Electronics</SubTitle>
        <Description>
            어제와 다른 오늘,  그리고 한걸음 한걸음 
            발전하고 성장하는 필링크코리아의 내일을 만들어 가겠습니다.
        </Description>
        <Features>
          <FeatureItem>Entry-Level E-Call Device</FeatureItem>
          <FeatureItem>Entry-Level DSM Device</FeatureItem>
          <FeatureItem>JG Table Actuator Device</FeatureItem>
          <FeatureItem>Ventilation Blower Unit</FeatureItem>
        </Features>
      </TextSection>
      <ImageSection>
        <Image src="/images/feelink/aicar.jpg" alt="IoT Business" />
      </ImageSection>
    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 5vw; 
  background-color: #FFFFFF; /* 배경색 추가 */
`;

const TextSection = styled.div`
  max-width: 50%;
  padding-right: 5em;
`;

const Title = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
  color: #011936;
  margin-bottom: 0.5em;
`;
const SubTitle = styled.h2`
  font-size: 1.8em; /* 타이틀보다 작은 크기로 설정 */
  color: #555; /* 연한 색상으로 스타일링 */
`;
const Description = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 2em;
  line-height: 1.5;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  font-size:1.2em;
  width:40vw;  
`;

const FeatureItem = styled.span`
  font-size: 1.2em;
  color: #F8FFF4;
  font-weight:500;
  padding: 0.5em 1em;
  border-radius: 5px;
  background-color:#294b69;
  /* background-image: linear-gradient(
    to right, 
    #FBF9FF 3%, 
    #BAC1B8 90%
  ); */ /* 7.5:2.5 비율로 그라데이션 */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
  transition: background 0.5s ease-in-out;

  &:hover {
    /* background-image: linear-gradient(
      to right, 
      #BAC1B8 25%, 
      #FBF9FF 75%
    ); */ /* 마우스 호버 시 그라데이션 방향 반전 */
    color: #F8FFF4
  }
`;


const ImageSection = styled.div`
  max-width: 40%;
  padding: 2em;
  background-color: #59768e; /* 연한 배경색 */
  border-radius: 15px;
  /* background-image: linear-gradient(
    135deg,
    #FBF9FF, 
    #B3B5BB 50%, /* 중간색을 두 번째 색상으로 */
    #FBF9FF
  ); */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 효과 */
  transition: background 0.5s ease-in-out; 
  }
`;


const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
`;
