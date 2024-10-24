// ButtonStyles.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const ButtonGroup = () => {
    const navigate = useNavigate();

    const goEmail = () => {
        navigate('/mail')
    }
    const goCompany = () => {
        navigate('/company')
    }
  return (
    <Group>
      <LinkButton onClick={goCompany}>Learn more</LinkButton>
      {/* <OutlineButton>Explore Course List</OutlineButton> */}
      <SolidButton onClick={goEmail}>Email</SolidButton>
    </Group>
  );
};

// ButtonGroup의 스타일
const Group = styled.div`
  position: fixed;
  top: 20px;
  right: 20px; 
  display: flex;
  gap: 20px;
  z-index: 10;
  @media (min-width: 1440px) {
    gap: 1em;
    padding: 0 1vw;
  }
`;

// 각 버튼의 스타일
const LinkButton = styled.button`
  background: none;
  border: 2px solid #6A9E98; /* Pastel Green */
  color: #8ccf88;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #0D4F48;
    color: white;
  }
`;

const OutlineButton = styled.button`
  background: none;
  border: 2px solid #8ccf88; /* Pastel Green */
  color: #8ccf88;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #8ccf88;
    color: white;
  }
`;

const SolidButton = styled.button`
  background: #4a5568; /* Darker Blue for the solid button */
  color: white;
  padding: 0.5em 1em;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2d3748; /* Even darker shade on hover */
  }
`;
