import React from "react";
import styled, { keyframes, createGlobalStyle} from "styled-components";
import PrivacyPolicyForm from "../IndivisualPolicy";
const MobileFooter = () => {
    const openPrivacyPolicy = () => {
        window.open("/privacy-policy", "_blank", "noopener,noreferrer");
    };
    return (
        <>
        <GlobalStyle/>
        <FooterContainer>
          <FooterContent>
            <Section>
              <Title>Contact</Title>
              <Content>+82 10 1234 5678</Content>
            </Section>
            <Section>
              <Title>Personal Information Policy</Title>
              <Content>
                <PolicyLink onClick={openPrivacyPolicy}>
                  <PolicyHighlight>개인정보처리방침</PolicyHighlight>
                </PolicyLink>
                을 확인해보세요.
              </Content>
            </Section>
            <Section>
              <Title>Email / Fax</Title>
              <Content>Mail: info@feelink.com<br />Fax: 123-456-7890</Content>
            </Section>
            <Section>
              <Title>Location</Title>
              <Content>Address : 3, Gongwon-ro, Guro-gu<br />Seoul, Republic of Korea</Content>
            </Section>
          </FooterContent>
        </FooterContainer>
        </>
      );
    };
    
    export default MobileFooter;
    
    const FooterContainer = styled.div`
    background-color: #424B54;
    color: #f9f9f9;
    padding: 2em 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    `;
    
    const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    width: 100%;
    padding: 1em;
    gap: 2em;
    text-align: center;
    `;
    
    const Section = styled.div`
      min-width: 200px;
      flex: 1;
      padding: 0 1em;
      text-align: center;
    `;
    
    const Title = styled.h2`
      font-size: 1.2em;
      margin-bottom: 0.5em;
      color: #BAC1B8;
    `;
    
    const Content = styled.p`
      font-size: 0.9em;
      color: #ddd;
      line-height: 1.5;
    `;
    
    const PolicyLink = styled.a`
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    `;
    
    const PolicyHighlight = styled.span`
      text-decoration: underline;
      color: #f9f9f9;
      &:hover {
        font-weight: 600;
      }
    `;

const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
