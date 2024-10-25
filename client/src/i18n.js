import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "homeTitle": "Welcome to our website",
      "company": "Company Info",
      "privacyPolicy": "Privacy Policy",
      "contactUs": "Contact Us"
    }
  },
  ko: {
    translation: {
      "homeTitle": "우리 웹사이트에 오신 것을 환영합니다",
      "company": "회사 정보",
      "privacyPolicy": "개인정보처리방침",
      "contactUs": "문의하기"
    }
  },
  zh: {
    translation: {
      "homeTitle": "欢迎来到我们的网站",
      "company": "公司信息",
      "privacyPolicy": "隐私政策",
      "contactUs": "联系我们"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko", // 기본 언어
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;