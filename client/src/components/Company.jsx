import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import TECU from "./Company/T-ECU";
import ECALL from "./Company/E-CALL";
import MagneticForce from "./Company/MagneticForce";
import Vibration from "./Company/Vibration";
import OLED from "./Company/Oled";
import Location from "./Company/Location";

export default function Company() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeTab, setActiveTab] = useState(null); // activeTab 상태 추가
    const [isMenu1Clicked, setIsMenu1Clicked] = useState(false);
    const [isMenu2Clicked, setIsMenu2Clicked] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        if (menu === 'menu1') {
            setIsMenu1Clicked(true);
            setIsMenu2Clicked(false);
            setActiveTab('T-ECU'); // menu1이 클릭되면 기본 탭으로 'T-ECU' 설정
        } else if (menu === 'menu2') {
            setIsMenu1Clicked(false);
            setIsMenu2Clicked(true);
            setActiveTab('Location'); // menu2가 클릭되면 'Location' 탭 활성화
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        // URL이나 location이 변화할 때, 페이지가 처음 로드되었을 때 처리
        if (!isMenu1Clicked && !isMenu2Clicked) {
            // 첫 로드일 때, menu1과 T-ECU를 기본 설정
            setActiveMenu('menu1');
            setActiveTab('T-ECU');
        }
    }, []);
    return (
        <Container>
            <Sidebar>
                <MenuItem onClick={() => navigate('/')}>
                    <img src='/images/feelink/logo.png' alt='no-img'/>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('menu1')}>
                    Business Info 
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('menu2')}>
                    Location Info
                </MenuItem>                
            </Sidebar>
            
            <MainContent>
                {activeMenu === 'menu1' ? (
                    <Tabs>
                        <Tab
                            onClick={() => handleTabClick('T-ECU')}
                            active={activeTab === 'T-ECU'}
                        >
                            T-ECU
                        </Tab>
                        <Tab
                            onClick={() => handleTabClick('E-Call & DSM')}
                            active={activeTab === 'E-Call & DSM'}
                        >
                            E-Call & DSM
                        </Tab>
                        <Tab
                            onClick={() => handleTabClick('Magnetic Force Measurement Device')}
                            active={activeTab === 'Magnetic Force Measurement Device'}
                        >
                            Magnetic Force Measurement Device
                        </Tab>
                        <Tab
                            onClick={() => handleTabClick("Magnetic Load Transfer Device")}
                            active={activeTab === "Magnetic Load Transfer Device"}
                        >
                            Magnetic Load Transfer Device
                        </Tab>
                        <Tab
                            onClick={() => handleTabClick("Wireless Vibration Data Measurement System")}
                            active={activeTab === "Wireless Vibration Data Measurement System"}
                        >
                            Wireless Vibration Data Measurement System
                        </Tab>
                        <Tab
                            onClick={() => handleTabClick("OLED Process Data")}
                            active={activeTab === "OLED Process Data"}
                        >
                            OLED Process Data (Vacuum/Source) Analysis System
                        </Tab>
                    </Tabs>
                ) : (
                    <Tabs>
                        <Tab
                            active={activeTab === 'Location'}
                            onClick={() => handleTabClick('Location')}
                        >
                            Location
                        </Tab>
                    </Tabs>
                )}

                {/* 조건부 컴포넌트 렌더링 */}
                <TabContent>
                    {activeTab === 'T-ECU' && <TECU />}
                    {activeTab === 'E-Call & DSM' && <ECALL />}
                    {activeTab === 'Magnetic Force Measurement Device' && <MagneticForce />}
                    {activeTab === 'Wireless Vibration Data Measurement System' && <Vibration />}
                    {activeTab === 'OLED Process Data' && <OLED />}
                    {activeTab === 'Location' && <Location />}
                </TabContent>
            </MainContent>
        </Container>
    );
}

// Styled Components
const Container = styled.div`
    display: flex;
    min-height: 100vh;
`;

const Sidebar = styled.div`
    width: 250px;
    background-color: #011936; /* 어두운 블루 */
    color: white;
    display: flex;
    flex-direction: column;
`;

const MenuItem = styled.div`
    font-weight: bold;
    padding: 15px 20px;
    cursor: pointer;    
    &:hover {
        background-color: #6E7271; 
    }
    &:first-child {
        border-bottom: 3px solid #E4DFDA; /* 첫 번째 아이템에 굵은 border 적용 */
    }
`;

const MainContent = styled.div`
    flex-grow: 1;
    padding: 20px;
    background-color: #f5f5f5; /* 연한 회색 배경 */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
`;

const Tabs = styled.div`
    display: flex;
    border-bottom: 2px solid #ddd;
`;

const Tab = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${({ active }) => (active ? "#011936" : "#ffffff")}; /* active 상태일 때 배경색 변경 */
    color: ${({ active }) => (active ? "#fff" : "#000")}; /* active 상태일 때 글자 색 변경 */
    border: 1px solid #ddd;
    border-bottom: none;
    margin-right: 5px;
    &:hover {
        background-color: #011936; /* 어두운 블루 (호버 효과) */
        color: white;
    }
`;


const TabContent = styled.div`
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-top: -1px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

