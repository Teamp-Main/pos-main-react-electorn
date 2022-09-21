import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${props => props.theme.background.gray};
  .login-form {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 5rem;
    gap: 1rem;
    width: 30%;
  }

  .button-area {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const onClick = () => {
    return console.log(id, pwd);
  };
  const navigage = useNavigate();
  return (
    <LoginContainer>
      <button type="button" onClick={() => navigage(-1)}>
        뒤로가기
      </button>
      <div className="login-form">
        <h1>로그인</h1>
        <Input state={id} setState={setId} label="아이디" inputType="text" />
        <Input
          state={pwd}
          setState={setPwd}
          label="패스워드"
          inputType="password"
        />
        <Button isActive onClick={() => onClick()} item="로그인" />
        <div className="button-area">
          <Button isActive onClick={() => onClick()} item="회원 가입 하기" />
          <Button isActive onClick={() => onClick()} item="비밀 번호 찾기" />
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
