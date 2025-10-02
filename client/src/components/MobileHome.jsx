import styled from "styled-components";
import MobileLogo from "./Mobile/MobileLogo";
import MobileFooter from "./Mobile/MobileFooter";
export default function MobileHome() {
  return (
    <>
    <MobileContainer>
      <Section>
        <MobileLogo />
      </Section>          
    </MobileContainer>
    <FooterSection>
      <MobileFooter />
    </FooterSection>
    </>
  );
}

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column; /* 상하 스크롤을 위해 열 방향으로 정렬 */
  width: 100vw; /* 전체 너비 */  
  overflow-x: hidden; /* 가로 스크롤 제거 */
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2em;
`;
const FooterSection = styled.div`
  align-items: center;
  height: auto;
  overflow-y:hidden;
`;