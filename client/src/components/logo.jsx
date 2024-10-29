import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import { ButtonGroup } from "./ButtonGripStyles";
export default function Logo () {
    const [typedText, setTypedText] = useState("");
    const fullText = "끊임없는 혁신과 도전으로 고객의 성공을 위한 가치를 창출합니다.";
    const typingRef = useRef(false);
    const logoRef = useRef(null);    

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // 컴포넌트가 뷰포트에 들어오면 타이핑 애니메이션 시작
                startTyping();
              }
            });
          },
          { threshold: 0.5 } // 50% 이상 보여질 때 트리거
        );
    
        if (logoRef.current) {
          observer.observe(logoRef.current); // ref가 가리키는 DOM 요소 관찰 시작
        }
    
        // 페이지가 로드되었을 때도 바로 타이핑 시작
        startTyping();
    
        return () => {
          if (logoRef.current) {
            observer.unobserve(logoRef.current); // 컴포넌트 언마운트 시 관찰 해제
          }
        };
      }, []);
    
      const startTyping = () => {
        // 타이핑 중이 아니면 타이핑 애니메이션 시작
        if (!typingRef.current) {
          typingRef.current = true;
          let index = 0;
          setTypedText(""); // 상태 초기화
          const textArray = Array.from(fullText);
    
          const interval = setInterval(() => {
            if (index < textArray.length) {
              const nextChar = textArray[index];
              if (nextChar !== undefined) {
                setTypedText((prev) => prev + nextChar);
              }
              index++;
            } else {
              clearInterval(interval); // 모든 글자가 출력되면 타이머 중지
              typingRef.current = false; // 타이핑 완료 후 다시 타이핑할 수 있도록 설정
            }
          }, 100); // 100ms마다 한 글자씩 추가
        }
      };
    return(
        <>
        <ButtonGroup/>        
        <Container>                  
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
        <SubText>
            {typedText}
        </SubText>
        <Description>
            어제와 다른 오늘,  그리고 한걸음 한걸음 
            발전하고 성장하는 필링크코리아의 내일을 만들어 가겠습니다.
        </Description>
        {/* <Stats>
          <StatItem>Data Inquiry/Analysis</StatItem>
          <SeperateLine/>
          <StatItem>Real-time monitoring</StatItem>
          <SeperateLine/>
          <StatItem>Self-diagnosis System</StatItem>
        </Stats> */}
        </TextSection>
        <ImageSection>
          <Image src="/images/feelink/emotional.png" alt="Emotional Logo" />
        </ImageSection>
        </Container> 
        </>    
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 5vw; 
   @media (min-width: 1440px) {
    gap: 1em; /* 큰 화면일 때 간격을 줄임 */
    padding: 0 2vw; /* 좌우 패딩을 더 늘려 중앙으로 배치 */
  }
    margin:0;
`;
const SeperateLine = styled.div`
 border-right:3px solid #BFBFBF;
 height:1.5em;
 margin-top:10px;
`
const Text3DWrapper = styled.div`
  position: relative; /* Company를 절대 위치로 배치하기 위한 relative 설정 */
  display: inline-block;
`;
const Description = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 2em;
  line-height: 1.5;
`;
const Text3D = styled.div`
  font-size: 160px;
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
    position: relative;
    @media (min-width: 1440px) {
     color: #66b3ba;
    }
  }

  span:nth-child(1) { transform: translateZ(20px); }
  span:nth-child(2) { transform: translateZ(15px); }
  span:nth-child(3) { transform: translateZ(10px); }
  span:nth-child(4) { transform: translateZ(5px); }
  span:nth-child(5) { transform: translateZ(0); }
  span:nth-child(6) { transform: translateZ(-5px); }
  span:nth-child(7) { transform: translateZ(-10px); }
`;
const Image = styled.img`
    width: 30em;
    height:auto;
    object-fit: contain;
    @media (min-width: 1440px) {
     width: 35em;
     height:35em;
     object-fit:contain;
  }
`
const TextSection = styled.div`
  max-width: 50%;
  padding-right: 5em;
`;

const Headline = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: #011936;
  margin-bottom: 1em;
`;

const Highlight = styled.span`
  color: #66b3ba; /* Cambridge Blue */
`;
const Company = styled.span`
  font-size: 0.5em; /* 텍스트 크기를 작게 설정 */
  position: absolute; /* 절대 위치 */
  top: 30px; /* FEELINK 텍스트에 더 가까이 위치시킴 */
  right: -35px; /* 오른쪽 여백 조정 */
  color: #666; /* 적당한 회색을 사용하여 덜 강조되도록 */
`
const SubText = styled.p`
  font-size: 1.9em;
  color: #555;
  margin-bottom: 1.5em;
  min-height: 1.3em; /* 적절한 높이를 설정 */
  font-weight:600;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
`;

const StatItem = styled.span`
  font-size: 1.6em;
  font-weight:500;
  color: #BFBFBF;
  padding-top:3px;
`;

const ImageSection = styled.div`
  max-width: 35%;
`;

