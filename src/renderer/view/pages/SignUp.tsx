//import React from 'react';
import { useRef, useState } from 'react';
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
  height: 100vh;
`;

const SignUpContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 30px;
`

const SignUp = () => {
  const [nameinput, setNameInput] = useState<string>('');
  const [idinput, setIdInput] = useState<string>('');
  const [pwinput, setPwInput] = useState<string>('');
  const [pwcheckinput, setPwCheckInput] = useState<string>('');
  const [emailinput, setEmailInput] = useState<string>('');
  const [authnuminput, setAuthNumInput] = useState<string>('');

  const onClick = () => {};
  return (
    <SignUpWrapper>
      <SignUpContainer>
        <Input label='이름' state={nameinput} setState={setNameInput} inputType='text'/>
        <InputButton label='아이디' item='중복확인' state={idinput} inputType='text' setState={setIdInput} />
        <Input label='비밀번호' state={pwinput} setState={setPwInput} inputType='password' />
        <Input label='비밀번호 확인' state={pwcheckinput} setState={setPwCheckInput} inputType='password' />
        <InputButton item='인증받기' label='이메일' state={emailinput} setState={setEmailInput} inputType='text' />
        <InputButton item='인증확인' label='인증번호' state={authnuminput} setState={setAuthNumInput} inputType='text' />
        <Button item="가입하기" onClick={onClick} />
        </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;
