import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom';
import Router from "./Router";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // 언어 변경 함수
  };
  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
