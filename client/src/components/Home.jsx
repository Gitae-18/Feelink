import React, { useState, useEffect, useRef} from "react";
import Logo from "./logo";
import Business from "./business";
import Iot from "./Iot";
import Footer from "./Footer";
import styled from "styled-components";
export default function Home() {
  const [showIot, setShowIot] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [isAutoScrollOn, setIsAutoScrollOn] = useState(true);
  const autoScrollRef = useRef(null);
  const scrollEndTimeout = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollX = window.scrollX;

      if (scrollX > window.innerWidth * 0.5) {
        setShowIot(true);
      } else {
        setShowIot(false);
      }

      if (scrollX > window.innerWidth * 1.5) {
        setShowBusiness(true);
      } else {
        setShowBusiness(false);
      }

      if (scrollX > window.innerWidth * 2.5) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollX = window.scrollX;
      const sectionWidth = window.innerWidth;
  
      if (scrollX % sectionWidth !== 0) {
        // 섹션의 중앙에서 스크롤이 멈췄을 때 가장 가까운 섹션으로 자동 이동
        const closestSection = Math.round(scrollX / sectionWidth) * sectionWidth;
        window.scrollTo({ left: closestSection, behavior: 'smooth' });
      }
    };
  
    
    
    const handleDebouncedScroll = () => {
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
      }
      // 300ms 후에 스크롤 보정 실행
      scrollEndTimeout.current = setTimeout(handleScroll, 300);
    };
  
    window.addEventListener('scroll', handleDebouncedScroll);
  
    return () => {
      window.removeEventListener('scroll', handleDebouncedScroll);
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
      }
    };
  }, []);
  useEffect(() => {
    // 초기 상태에서 자동 스크롤 시작
    if (isAutoScrollOn) {
      startAutoScroll();
    }

    return () => stopAutoScroll(); // 컴포넌트 언마운트 시 자동 스크롤 중지
  }, [isAutoScrollOn]);

  const handleNextScroll = () => {
    window.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  };
  const handlePrevScroll = () => {
    window.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  };
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      handleNextScroll();
      const scrollX = window.scrollX;
      if (scrollX >= window.innerWidth * 3) {
        // 스크롤이 마지막 섹션에 도달하면 첫 섹션으로 돌아가게 함
        window.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 5000); // 3초마다 자동 스크롤
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScrollOn((prev) => !prev);
  };
  return (
    <>
      <Container>
        <Section show={!showIot && !showBusiness && !showFooter}>
          <Logo />
        </Section>
        <Section show={showIot && !showBusiness && !showFooter}>
          <Iot />
        </Section>
        <Section show={showBusiness && !showFooter}>
          <Business />
        </Section>
        <Section show={showFooter}>
          <Footer />
        </Section>
       
        {showIot || showBusiness ? (
          <ArrowButtonLeft onClick={handlePrevScroll}>←</ArrowButtonLeft>
        ) : null}

        {!showFooter ? (
          <ArrowButtonRight onClick={handleNextScroll}>→</ArrowButtonRight>
        ) : null}

        <AutoScrollButton 
        onClick={toggleAutoScroll} 
        isAutoScrollOn={isAutoScrollOn} 
        isAtFooter={showFooter} // Footer 섹션에 있을 때 버튼 위치 조정
        >
        {isAutoScrollOn ? <img src='/images/feelink/pause.jpg' style={{width:'10px'}} alt='no' /> : '▶️'}
        </AutoScrollButton>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 400vw; /* 각 섹션을 100vw씩 3개 */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth; /* 스크롤 부드럽게 */
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw; /* 각 섹션이 화면에 꽉 차도록 설정 */
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  scroll-snap-align: start; /* 섹션의 시작 지점에 맞춰 스냅 */
`;
const ArrowButtonRight = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #666; /* 버튼 색상 */
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #444; /* 버튼 호버 색상 */
  }
`;

// 왼쪽 화살표 버튼 스타일링
const ArrowButtonLeft = styled(ArrowButtonRight)`
  right: auto;
  left: 20px;
`;
const AutoScrollButton = styled.button`
  position: fixed;
  right: ${(props) => (props.isAtFooter ? '20px' : '90px')}; /* Footer에 있을 때는 ArrowButton과 같은 위치 */
  bottom: 20px;
  width: 50px;
  height: 50px;
  background-color: #666; /* 배경색 */
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, right 0.3s; /* 위치 변경에 대한 애니메이션 추가 */

  &:hover {
    background-color: #444; /* 호버 시 배경색 */
  }
  ${(props) =>
    !props.isAutoScrollOn &&
    `
      padding-left: 10px; /* 왼쪽으로 아이콘을 약간 이동 */
    `}
`;