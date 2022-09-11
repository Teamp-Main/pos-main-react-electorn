import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/common/Input';

const LoginWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`

const Login = () => {
  const [id,setId] = useState<string>('')
  const [pwd,setPwd] = useState<string> ('')
  return <LoginWrapper>
    <Input label='아이디' inputType='text' state={id} setState={setId}/>
    <Input label='pwd' inputType='password'state={pwd} setState={setPwd}/>

    </LoginWrapper>;
};

export default Login;
