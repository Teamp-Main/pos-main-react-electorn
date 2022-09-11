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
height: 100vh;

background-color:${props=> props.theme.main.gray};
.login-form{
  background-color:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 5rem;
  gap: 1rem;
  width: 40%;
  height: 35%;

}

.button-area{
  width: 100%;
  display: flex;
  gap: 1rem;
}
`

const Login = () => {
  const [id,setId] = useState<string>('')
  const [pwd,setPwd] = useState<string> ('')
  const onClick = () =>{
    return console.log(id,pwd);

  }
  const navigage = useNavigate()
  return <LoginContainer>
    <div className='login-form'>
      <Input state={id} setState={setId} label='아이디' inputType="text" />
      <Input state={pwd} setState={setPwd} label='아이디' inputType="password" />
      <Button isActive onClick={() => onClick()} item={'로그인'}/>
      <div className='button-area'>
        <Button isActive onClick={() => onClick()} item={'회원 가입 하기'}/>
        <Button isActive onClick={() => onClick()} item={'비밀 번호 찾기'}/>
      </div>
    </div>

    </LoginContainer>;
};

export default Login;
