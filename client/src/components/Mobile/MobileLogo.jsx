import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import { ButtonGroup } from "../ButtonGripStyles";

export default function MobileLogo () {
  const [typedText, setTypedText] = useState("");
  const fullText = "끊임없는 혁신과 도전으로 고객의 성공을 위한 가치를 창출합니다.";
  const typingRef = useRef(false);
  const logoRef = useRef(null);    

  useEffect(() => {
      startTyping(); // 페이지 로드 시 타이핑 애니메이션 시작
  }, []);
  const startTyping = () => {
      if (!typingRef.current) {
        typingRef.current = true;
        let index = 0;
        setTypedText("");
        const textArray = Array.from(fullText);
  
        const interval = setInterval(() => {
          if (index < textArray.length) {
            const nextChar = textArray[index];
            if (nextChar !== undefined) {
              setTypedText((prev) => prev + nextChar);
            }
            index++;
          } else {
            clearInterval(interval);
            typingRef.current = false;
          }
        }, 100);
      }
  };

  return(
      <>
      <ButtonGroup/>        
      <Container ref={logoRef}>                  
      <ImageSection>
          <Image src="/images/feelink/emotional.png" alt="Emotional Logo" />
        </ImageSection>
        <TextSection>
          <Headline>
            Unleash Your Creativity with 
            <Text3DWrapper>
              <Text3D>
                <Highlight>FEELINK</Highlight>
              </Text3D>
              <Company>㉿</Company>
            </Text3DWrapper>
          </Headline>
          <SubText>{typedText}</SubText>
          <Description>
            어제와 다른 오늘, 그리고 한걸음 한걸음 발전하고 성장하는 필링크코리아의 내일을 만들어 가겠습니다.
          </Description>
        </TextSection>        
      </Container> 
      </>    
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 쌓이도록 설정 */
  align-items: center;
  padding: 10vh 5vw;
  gap: 1em; /* 이미지와 텍스트 사이 간격 */
  height: auto;
  margin: 0;
`;

const Highlight = styled.span`
  color: #66b3ba; /* 강조 색상 - Cambridge Blue */
  font-weight: bold;
`;

const TextSection = styled.div`
  max-width: 90%;
  padding: 0 1em;
  text-align: center; /* 모바일에서 중앙 정렬 */
  @media (min-width: 768px) {
    max-width: 50%;
    padding-right: 5em;
    text-align: left; /* 큰 화면에서는 왼쪽 정렬 */
  }
`;

const Headline = styled.h1`
font-size: 1.5em;
font-weight: bold;
color: #011936;
margin-bottom: 0.5em;
`;

const Text3DWrapper = styled.div`
position: relative;
display: inline-block;
`;

const Text3D = styled.div`
font-size: 35px;
font-weight: bold;
color: #011936;
position: relative;
display: inline-block;
perspective: 1000px;

span {
  display: inline-block;
  transform: translateZ(0);
  color: #011936;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

span:nth-child(1) { transform: translateZ(20px); }
span:nth-child(2) { transform: translateZ(15px); }
span:nth-child(3) { transform: translateZ(10px); }
span:nth-child(4) { transform: translateZ(5px); }
span:nth-child(5) { transform: translateZ(0); }
span:nth-child(6) { transform: translateZ(-5px); }
span:nth-child(7) { transform: translateZ(-10px); }

@media (min-width: 768px) {
  font-size: 160px;
}
`;

const Company = styled.span`
position: absolute;
color: #666;
font-size: 0.5em;
top: 30px;
right: -35px;
`;

const SubText = styled.p`
font-size: 1.2em;
color: #555;
margin-bottom: 1em;
font-weight: 600;
min-height: 1.3em;
@media (min-width: 768px) {
  font-size: 1.9em;
}
`;

const Description = styled.p`
font-size: 1em;
color: #555;
line-height: 1.5;
margin-bottom: 2em;
@media (min-width: 768px) {
  font-size: 1.2em;
}
`;

const ImageSection = styled.div`
max-width: 100%;
display: flex;
justify-content: center;
height:auto;
`;

const Image = styled.img`
width: 12em;
object-fit: fill;
height:12em;
`;