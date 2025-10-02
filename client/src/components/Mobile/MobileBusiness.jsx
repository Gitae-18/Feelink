import React from 'react';
import styled from 'styled-components';


export default function MobileBusiness() {
    
  return (
    <>  
    <BusinessContainer>                
      <BusinessCard>
        <Icon>🚗</Icon> {/* 이모지나 아이콘 대신 적절한 이미지 사용 */}
        <Title>특장차 전용 T-ECU</Title>
        <Description>
          4세대 지게차용 T-ECU(엔진)<br/>
          4세대 지게차용 T-ECU(전동)<br/>
          10.4인치 고급형 지게차 전용 클러스터 장치<br/>
          5인치 보급형 지게차 전용 클러스터 장치
        </Description>
      </BusinessCard>
      <BusinessCard>
        <Icon>🏭</Icon>
        <Title>산업용 제어 시스템</Title>
        <Description>
          실시간 무선 진동 데이터 측정 센서 및 운영 시스템<br/>
          실시간 가스 데이터 측정 센서 및 운영 시스템<br/>
          자기부상 이송장치 제어 시스템 및 운영 시스템
        </Description>
      </BusinessCard>
      <BusinessCard>
        <Icon>⚡</Icon>
        <Title>전기차 전자장치</Title>
        <Description>
          보급형 E-Call 장치<br/>
          보급형 DSM 장치<br/>
          JG Table Actuator 장치<br/>
          통풍 블로워 장치
        </Description>
      </BusinessCard>
      <BusinessCard>
        <Icon>🔍</Icon>
        <Title>이상감지 시스템</Title>
        <Description>
          OLED 공정데이터(진동/부하) 이상감지분석 시스템
        </Description>
      </BusinessCard>
    </BusinessContainer>
    </>
  );
}

const BusinessContainer = styled.div`
  position: relative; /* ButtonGroup의 absolute 위치를 기준으로 설정 */
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 그리드 */
  gap: 2em;
  padding: 4em 2em;
  background-color: #DEE5E5;
`;

const BusinessCard = styled.div`
  background-color: #F5F5F5;
  border-radius: 10px;
  padding: 2em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: start;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px); /* 호버 시 살짝 올라가는 애니메이션 */
  }
`;

const Icon = styled.div`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  color: #011936;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
  line-height: 1.5;
  font-weight:400;
`;