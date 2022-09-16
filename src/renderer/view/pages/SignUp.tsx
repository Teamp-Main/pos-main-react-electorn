// import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import EmailComponent from '../components/signup/email-component';
import InputButton from '../components/signup/input-button';
import PwCheckComponent from '../components/signup/password-check-component';
import PwComponent from '../components/signup/password-component';

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
  .register-button-flex {
    height: 3vw;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .text {
    font-size: 11px;
    color: grey;
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
  const [isMatch, setIsMatch] = useState<boolean>(true);
  const [pwformcheck, setPwFormCheck] = useState<boolean>(true);
  const [emailformcheck, setEmailFormCheck] = useState<boolean>(true);

  const navigate = useNavigate();

  const onClick = (
    state: string,
    inputType: 'id' | 'email' | 'auth' | 'register'
  ) => {
    switch (inputType) {
      case 'id': {
        // server api 호출
        // 임시 테스트 코드
        if (state.length !== 0) {
          setIdbtActive(false);
        }
        break;
      }
      case 'email': {
        // server api 호출
        // 임시 테스트 코드
        if (state.length !== 0) {
          setEmailbtActive(false);
        }
        break;
      }
      case 'auth': {
        // server api 호출
        // 임시 테스트 코드
        if (state.length !== 0) {
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

  const matchPW = (pw: string, pw_check: string) => {
    const bool = pw !== pw_check ? setIsMatch(false) : setIsMatch(true);
  };

  const pwFormCheck = (pw: string) => {
    const reg = new RegExp(
      /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/
    );
    if (pw.length !== 0) {
      const bool = reg.test(pw) ? setPwFormCheck(true) : setPwFormCheck(false);
    }
  };

  const emailFormCheck = (email: string) => {
    const reg = new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
    if (email.length !== 0) {
      const bool = reg.test(email)
        ? setEmailFormCheck(true)
        : setEmailFormCheck(false);
    }
  };

  useEffect(() => {
    matchPW(pwinput, pwcheckinput);
    pwFormCheck(pwinput);
  }, [pwinput, pwcheckinput]);

  useEffect(() => {
    emailFormCheck(emailinput);
  }, [emailinput]);

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
        <PwComponent
          label="비밀번호*"
          pw_state={pwinput}
          form_check_state={pwformcheck}
          setState={setPwInput}
          inputType="password"
        />
        <text className="text">
          *비밀번호는 8자 이상, 숫자 1자 이상, 특수문자 1자 이상
        </text>
        <PwCheckComponent
          label="비밀번호 확인"
          pw_check_state={pwcheckinput}
          match_state={isMatch}
          setState={setPwCheckInput}
          inputType="password"
        />
        <EmailComponent
          item="인증받기"
          label="이메일"
          isActive={emailbtActive}
          onClick={() => onClick(emailinput, 'email')}
          email_state={emailinput}
          email_form_state={emailformcheck}
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
