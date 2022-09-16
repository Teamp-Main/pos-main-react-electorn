import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';

interface IProps {
  label: string;
  pw_state: string;
  form_check_state: boolean;
  setState: React.Dispatch<React.SetStateAction<string>>;
  inputType: 'text' | 'number' | 'password';
}

const PwInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .text {
    font-size: 11px;
    color: red;
  }
`;

const PwComponent = ({
  label,
  pw_state,
  setState,
  inputType,
  form_check_state,
}: IProps) => {
  if (form_check_state === false) {
    return (
      <PwInputContainer>
        <Input
          label={label}
          state={pw_state}
          setState={setState}
          inputType={inputType}
        />
        <text className="text">비밀번호 형식이 틀렸습니다.</text>
      </PwInputContainer>
    );
  }
  return (
    <Input
      label={label}
      state={pw_state}
      setState={setState}
      inputType={inputType}
    />
  );
};

export default PwComponent;
