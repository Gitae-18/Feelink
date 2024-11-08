import React, { useRef, useEffect } from 'react';
import html2pdf from 'html2pdf.js';

const PrivacyPolicyForm = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        // PDF 생성 옵션 설정
        const element = contentRef.current;
        const opt = {
          margin: 1,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // PDF Blob 생성 및 새 창에서 표시
        if (element) {
            html2pdf().set(opt).from(element).outputPdf('blob').then((pdfBlob) => {
                const blobUrl = URL.createObjectURL(pdfBlob);
                const newWindow = window.open(blobUrl); // 새 창에서 PDF 열기
                if (!newWindow) {
                    alert('팝업 차단을 해제해주세요.');
                } else {
                    newWindow.focus();
                }
            });
        }
    }, []); 

    return (
        <div>
            <div ref={contentRef} style={{ padding: '10px', width: '100%' }}>
                <h1>(주)필링크코리아 개인정보처리방침</h1>
                <div style={{ pageBreakInside: 'avoid' }}>
                    <h2>1. 개인정보의 처리 목적</h2>
                    <p>(주)필링크코리아는 다음의 목적을 위하여 개인정보를 처리합니다. 처리된 개인정보는 다음 목적 이외의 용도로는 사용되지 않으며, 이용 목적이 변경될 시에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                    <ul>
                        <li>고객 문의 응답 및 서비스 제공</li>
                        <li>계약 이행 및 서비스 제공을 위한 본인 확인</li>
                        <li>법적 의무 이행</li>
                    </ul>
                </div>
                <br/>
                <div style={{ pageBreakInside: 'avoid' }}>
                    <h2>2. 처리하는 개인정보의 항목</h2>
                    <p>회사는 아래와 같은 개인정보 항목을 처리하고 있습니다.</p>
                    <ul>
                        <li>성명, 연락처(전화번호, 이메일), 주소</li>
                        <li>서비스 이용 기록</li>
                    </ul>
                </div>
                <br/>
                <div style={{ pageBreakInside: 'avoid' }}>
                    <h2>3. 개인정보의 보유 및 이용 기간</h2>
                    <p>회사는 법령에 따른 개인정보 보유 및 이용 기간 내에서 개인정보를 처리하고 보유합니다.</p>
                    <ul>
                        <li>계약 또는 청약철회에 관한 기록: 5년</li>
                        <li>대금 결제 및 재화 등의 공급에 관한 기록: 5년</li>
                        <li>소비자 불만 또는 분쟁처리에 관한 기록: 3년</li>
                    </ul>
                </div>
                <br/>
                <div style={{ pageBreakInside: 'avoid' }}>
                    <h2>4. 개인정보의 파기</h2>
                    <p>회사는 개인정보의 처리 목적 달성 또는 보유 기간 종료 시 지체 없이 해당 개인정보를 파기합니다.</p>
                </div>
                <br/>
                <div style={{ pageBreakInside: 'avoid' }}> {/* 페이지가 잘리지 않도록 설정 */}
                    <h2>5. 정보주체의 권리</h2>
                    <p>정보주체는 언제든지 본인의 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
                    <ul>
                        <li>개인정보 열람 및 정정: 개인정보를 열람하거나 수정할 수 있습니다.</li>
                        <li>개인정보 삭제: 개인정보의 삭제를 요청할 수 있습니다.</li>
                    </ul>
                </div>
                <br/>
                <div style={{ pageBreakInside: 'avoid' }}>
                    <h2>6. 개인정보 보호책임자</h2>
                    <p>책임자: 김철수 (부장)<br />이메일: privacy@feelink.co.kr<br />전화: 02-1234-5678</p>
                </div>
                <br/>
                <div style={{ pageBreakInside: 'avoid' }}>
                    <h2>7. 개인정보 처리방침 변경</h2>
                    <p>본 방침은 2024년 10월 25일부터 적용됩니다. 변경 사항이 있을 시, 회사의 웹사이트를 통해 공지됩니다.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyForm;
