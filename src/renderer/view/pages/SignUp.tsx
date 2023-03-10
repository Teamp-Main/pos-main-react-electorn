// import React from 'react';
import { createAuth } from 'api/signUp';
import { regEmail, regPwd } from 'data/rex';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Modal from '../components/common/Modal';
import EmailComponent from '../components/signup/email-component';
import InputButton from '../components/signup/input-button';
import PwComponent from '../components/signup/password-component';

const SignUpWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${props => props.theme.background.gray};
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

function SignUp() {
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
  const [authcheck, setAuthCheck] = useState<boolean>(false);
  const [IDmodalOpen, setIDModalOpen] = useState<boolean>(false);
  const [RGmodalOpen, setRGModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const openIDModal = (btnactive: boolean) => {
    return !btnactive && setIDModalOpen(true);
  };

  const openSignUpModal = (btnactive: boolean) => {
    return btnactive && setRGModalOpen(true);
  };

  const closeModal = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    return setState(false);
  };

  const closeSignUpModal = () => {
    return [navigate(-1), setRGModalOpen(false)];
  };

  const onClick = (
    state: string,
    inputType: 'id' | 'email' | 'auth' | 'register'
  ) => {
    switch (inputType) {
      case 'id': {
        // server api 호출
        // 임시 테스트 코드
        const idbt = state.length >= 6 ? setIdbtActive(false) : null;
        const modalactive = state.length < 6 ? openIDModal(!idbtActive) : null;
        return [idbt, modalactive];
      }
      case 'email': {
        // server api 호출
        // 임시 테스트 코드
        return emailformcheck && setEmailbtActive(false);
      }
      case 'auth': {
        // server api 호출
        // 임시 테스트 코드
        const authbt = authcheck && setAuthbtActive(false);
        const registerbt = authcheck && setRegisterbtActive(true);
        return [authbt, registerbt];
      }
      case 'register': {
        // server api 호출
        return openSignUpModal(registerbtActive);
      }
      default: {
        break;
      }
    }
  };

  const onClickRegister = async () => {
    await createAuth({});
  };

  const matchPW = (ref: string) => {
    const checking = pwinput === ref;
    setIsMatch(checking);
    return setPwCheckInput(ref);
  };

  const checkingPwd = (ref: string) => {
    const checking = regPwd.test(ref);
    setPwFormCheck(checking);
    return setPwInput(ref);
  };

  const checkingEmail = (ref: string) => {
    const checking = regEmail.test(ref);
    setEmailFormCheck(checking);
    return setEmailInput(ref);
  };

  const checkingAuth = (ref: string) => {
    const checking = ref.length === 6;
    setAuthCheck(checking);
    return setAuthNumInput(ref);
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
        <Modal
          open={IDmodalOpen}
          exit={() => closeModal(setIDModalOpen)}
          header="잘못된 ID"
          text="이미 가입된 ID 입니다."
          btntext="close"
          close={() => closeModal(setIDModalOpen)}
        />
        <PwComponent
          label="비밀번호*"
          pw_state={pwinput}
          form_check_state={pwformcheck}
          setState={checkingPwd}
          inputType="password"
          text="비밀번호 형식이 틀렸습니다."
        />
        <span className="text">
          *비밀번호는 8자 이상, 숫자 1자 이상, 특수문자 1자 이상
        </span>
        <PwComponent
          label="비밀번호 확인"
          pw_state={pwcheckinput}
          form_check_state={isMatch}
          setState={matchPW}
          inputType="password"
          text="비밀번호가 일치하지 않습니다."
        />
        <EmailComponent
          item="인증받기"
          label="이메일"
          isActive={emailbtActive}
          onClick={() => onClick(emailinput, 'email')}
          email_state={emailinput}
          email_form_state={emailformcheck}
          setState={checkingEmail}
          inputType="text"
        />
        <InputButton
          item="인증확인"
          label="인증번호"
          isActive={authbtActive}
          onClick={() => onClick(authnuminput, 'auth')}
          state={authnuminput}
          setState={checkingAuth}
          inputType="text"
        />
        <div className="register-button-flex">
          <Button
            isActive={registerbtActive}
            item="가입하기"
            onClick={() => onClick('', 'register')}
          />
        </div>
        <Modal
          open={RGmodalOpen}
          close={closeSignUpModal}
          header="회원가입"
          text="입력하신 정보로 가입하시겠습니까?"
          btntext="가입하기"
          exit={() => closeModal(setRGModalOpen)}
        />
      </SignUpContainer>
    </SignUpWrapper>
  );
}

export default SignUp;
