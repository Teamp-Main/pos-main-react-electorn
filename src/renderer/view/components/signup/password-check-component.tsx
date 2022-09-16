import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';

interface IProps {
  label: string;
  pw_check_state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  inputType: 'text' | 'number' | 'password';
  match_state: boolean;
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

const PwCheckComponent = ({
  label,
  pw_check_state,
  setState,
  inputType,
  match_state,
}: IProps) => {
  if (match_state === false) {
    return (
      <PwInputContainer>
        <Input
          label={label}
          state={pw_check_state}
          setState={setState}
          inputType={inputType}
        />
        <text className="text">비밀번호가 일치하지 않습니다.</text>
      </PwInputContainer>
    );
  }
  return (
    <Input
      label={label}
      state={pw_check_state}
      setState={setState}
      inputType={inputType}
    />
  );
};

export default PwCheckComponent;
