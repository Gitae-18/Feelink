import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function EmailForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });
    const [files, setFiles] = useState([]); // 업로드할 파일 목록
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    // 텍스트 필드 값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // 파일 선택 핸들러
      const handleFileChange = (e, index = null) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
        const newFiles = [...files];
        if (index !== null) {
            newFiles[index] = selectedFile;
        } else {
            newFiles.push(selectedFile);
        }
        fileInputRef.current.value = ""; // 선택창 초기화
        setFiles(newFiles);
        }
    };

    // 파일 삭제 핸들러
    const handleFileDelete = (index) => {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
    };
      // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);
    
        // 선택된 파일들을 FormData에 추가
        files.forEach((fileArray) => {
          if (fileArray) {
            for (let i = 0; i < fileArray.length; i++) {
              formDataToSend.append("files", fileArray[i]);
            }
          }
        });
    
        try {
          await axios.post("http://localhost:5000/send-email", formDataToSend, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          alert("Email sent successfully!");
        } catch (error) {
          console.error("Error sending email:", error);
          alert("Failed to send email.");
        }
    };
    return (
      <Container>
        <TextSection>
          <Headline>Send Us a Message</Headline>
          <SubText>
            If you have any questions or inquiries, feel free to send us a message. We’ll get back to you as soon as possible!
          </SubText>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></Textarea>
            
            <FileContainer>
            {/* 파일 목록 렌더링 */}
            {files.map((file, index) => (
                <FileItem key={index}>
                <div>{file.name}</div>
                <ButtonContainer>
                    <button type="button" onClick={() => fileInputRef.current.click()}>변경</button>
                    <button type="button" onClick={() => handleFileDelete(index)}>삭제</button>
                </ButtonContainer>
                </FileItem>
            ))}

            {/* 파일 선택 버튼 */}
            <div>
                <StyledButton type="button"  onClick={() => fileInputRef.current.click()}>+</StyledButton>
                <FileInput
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }} // 파일 선택 창을 숨김
                />
            </div>
            </FileContainer>
            
            <SendButton type="submit">Send Mail</SendButton>
          </Form>
        </TextSection>
        <ImageSection>
          <Image src="/logo.png" alt="Contact Us" onClick={() => navigate('/')}/>
        </ImageSection>
      </Container>
    );
  }

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 5vw;
  background-color: #f9f9f9;
`;

const TextSection = styled.div`
  max-width: 50%;
  padding-right: 5em;
`;

const Headline = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: #011936;
  margin-bottom: 1em;
`;

const SubText = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 2em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const Input = styled.input`
  padding: 0.8em;
  font-size: 1.1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 0.8em;
  font-size: 1.1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  resize: none;
`;

const SendButton = styled.button`
  padding: 0.8em 1.5em;
  font-size: 1.2em;
  background-color: #4a5568;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2d3748;
  }
`;

const ImageSection = styled.div`
  max-width:80%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 
              0px 8px 10px rgba(0, 0, 0, 0.1); /* 입체감을 위한 그림자 */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px); /* 살짝 떠오르는 효과 */
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2), 
                0px 16px 24px rgba(0, 0, 0, 0.2); /* 호버 시 그림자 강하게 */
  }

  &:active {
    transform: translateY(0px); /* 클릭할 때 내려오는 효과 */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 
                0px 8px 10px rgba(0, 0, 0, 0.1); /* 클릭 시 그림자 줄어듦 */
  }
`;

const FileContainer = styled.div`
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const FileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const FileInput = styled.input`
  display: none;
`;
const StyledButton = styled.button`
  background-color: #66b3ba; 
  color: white;
  border: none;
  border-radius: 5px; /* 둥근 사각형 모양 */
  width: 45px;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a8b95; /* 조금 더 진한 Cambridge Blue */
  }
`;
