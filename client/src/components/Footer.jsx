import React from "react";
import styled, { keyframes } from "styled-components";
import PrivacyPolicyForm from "./IndivisualPolicy";
import { ButtonGroup } from "./ButtonGripStyles";
const Footer = () => {

    const openPrivacyPolicy = () => {
        window.open("/privacy-policy", "_blank", "noopener,noreferrer");
    };
  return (
    <>
    <ButtonGroup/>
    <OuterContainer>
        <FooterContainer>
        <CardContainer>
            <Card>
            <Title>Contact</Title>
            <Content>+82 10 1234 5678</Content>
            </Card>
            <Card>
            <Title>Personal Information Policy</Title>
            <Content>
                <PolicyLink onClick={openPrivacyPolicy}>
                  <PolicyHighlight>개인정보처리방침</PolicyHighlight>
                </PolicyLink>
                을 확인해보세요.</Content>
            </Card>
            <Card>
            <Title>Email / Fax</Title>
            <Content>Mail: info@feelink.com<br />Fax: 123-456-7890</Content>
            </Card>
            <Card>
            <Title>Location</Title>
            <Content>Address : 3, Gongwon-ro, Guro-gu<br />Seoul, Republic of Korea</Content>
            </Card>
        </CardContainer>
        </FooterContainer>
    </OuterContainer>
    </>
  );
};

export default Footer;

const OuterContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #424B54;
  padding: 50px;  
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  max-width: 1200px;
  width: 100%;
  padding: 2em;
`;
const PolicyLink = styled.a`
  text-decoration: none; /* 밑줄 제거 (기본) */
  &:hover {
    text-decoration: underline; /* 링크에 호버 시 밑줄 추가 */
  }
`;

const PolicyHighlight = styled.span` 
  text-decoration: underline; /* 밑줄 추가 */
  color: #3C3C3C; /* 강조된 글씨 색상 */
  &:hover {
    font-weight:600; /* 링크에 호버 시 밑줄 추가 */
  }
`;
const shakeAnimation = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(1deg); }
  20% { transform: rotate(-1deg); }
  30% { transform: rotate(1deg); }
  40% { transform: rotate(-1deg); }
  50% { transform: rotate(0deg); }
`;

const Card = styled.div`
  background-color: #BAC1B8;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  cursor: pointer;
  min-width: 250px; /* 카드의 최소 너비 */
  min-height: 150px; /* 카드의 최소 높이 */
  display: flex;
  flex-direction: column; /* 제목과 내용을 세로로 정렬 */
  justify-content: space-between; /* 카드 안의 콘텐츠를 적절히 분배 */
  
  &:hover {
    animation: ${shakeAnimation} 1.5s ease-in-out;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  color: #3C3C3C;
`;

const Content = styled.p`
  font-size: 1em;
  color: #666;
  line-height: 1.5;
`;
