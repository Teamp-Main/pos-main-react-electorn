// import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import InputButton from '../components/signup/input-button';

const SignUpWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${props => props.theme.main.gray};
`;

const SignUpContainer = styled.div`
  background-color: #fff;
  padding: 2.4vw;
  border-radius: 0.25vw;
  display: flex;
  width: 35%;
  flex-direction: column;
  gap: 1.5vw;
  height: 48%;
  .register-button-flex {
    height: 3vw;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SignUp = () => {
  const [nameinput, setNameInput] = useState<string>('');
  const [idinput, setIdInput] = useState<string>('');
  const [pwinput, setPwInput] = useState<string>('');
  const [pwcheckinput, setPwCheckInput] = useState<string>('');
  const [emailinput, setEmailInput] = useState<string>('');
  const [authnuminput, setAuthNumInput] = useState<string>('');
  const [idbtActive, setIdbtActive] = useState<boolean>(true);
  const [emailbtActive, setEmailbtActive] = useState<boolean>(true);
  const [authbtActive, setAuthbtActive] = useState<boolean>(true);
  const [registerbtActive, setRegisterbtActive] = useState<boolean>(false);

  const navigate = useNavigate();

  const onClick = (
    state: string,
    inputType: 'id' | 'email' | 'auth' | 'register'
  ) => {
    switch (inputType) {
      case 'id': {
        // server api 호출
        // 임시 테스트 코드
        if (state !== null) {
          setIdbtActive(false);
        }
        break;
      }
      case 'email': {
        // server api 호출
        // 임시 테스트 코드
        if (state !== null) {
          setEmailbtActive(false);
        }
        break;
      }
      case 'auth': {
        // server api 호출
        // 임시 테스트 코드
        if (state !== null) {
          setAuthbtActive(false);
          setRegisterbtActive(true);
        }
        break;
      }
      case 'register': {
        // server api 호출
        navigate(-1);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <div className="header">
          <h1>회원가입</h1>
          <div>
            <Button isActive item="뒤로가기" onClick={() => navigate(-1)} />
          </div>
        </div>
        <Input
          label="이름"
          state={nameinput}
          setState={setNameInput}
          inputType="text"
        />
        <InputButton
          label="아이디"
          item="중복확인"
          isActive={idbtActive}
          state={idinput}
          onClick={() => onClick(idinput, 'id')}
          inputType="text"
          setState={setIdInput}
        />
        <Input
          label="비밀번호"
          state={pwinput}
          setState={setPwInput}
          inputType="password"
        />
        <Input
          label="비밀번호 확인"
          state={pwcheckinput}
          setState={setPwCheckInput}
          inputType="password"
        />
        <InputButton
          item="인증받기"
          label="이메일"
          isActive={emailbtActive}
          onClick={() => onClick(emailinput, 'email')}
          state={emailinput}
          setState={setEmailInput}
          inputType="text"
        />
        <InputButton
          item="인증확인"
          label="인증번호"
          isActive={authbtActive}
          onClick={() => onClick(authnuminput, 'auth')}
          state={authnuminput}
          setState={setAuthNumInput}
          inputType="text"
        />
        <div className="register-button-flex">
          <Button
            isActive={registerbtActive}
            item="가입하기"
            onClick={() => onClick('', 'register')}
          />
        </div>
      </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;
