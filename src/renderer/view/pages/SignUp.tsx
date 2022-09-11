//import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import InputButton from '../components/signup/input-button';

const SignUpWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SignUp = () => {
  const onClick = () => {};
  return (
    <SignUpWrapper>
      <SignUpContainer>
        <input />
        <InputButton item='중복확인' />
        <input />
        <input />
        <InputButton item='인증받기' />
        <InputButton item='인증확인' />
        <Button item="가입하기" onClick={onClick} />
        </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;
