import React from 'react';
import styled from 'styled-components';
import InputButton from './input-button';

interface IProps {
  item: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  email_state: string;
  email_form_state: boolean;
  setState: React.Dispatch<React.SetStateAction<string>>;
  inputType: 'text';
}

const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .text {
    font-size: 11px;
    color: red;
  }
`;

const EmailComponent = ({
  item,
  label,
  isActive,
  onClick,
  email_state,
  setState,
  inputType,
  email_form_state,
}: IProps) => {
  if (email_form_state === false) {
    return (
      <EmailInputContainer>
        <InputButton
          item={item}
          label={label}
          isActive={isActive}
          onClick={onClick}
          state={email_state}
          setState={setState}
          inputType={inputType}
        />
        <text className="text">이메일 형식이 맞지 않습니다.</text>
      </EmailInputContainer>
    );
  }
  return (
    <InputButton
      item={item}
      label={label}
      isActive={isActive}
      onClick={onClick}
      state={email_state}
      setState={setState}
      inputType={inputType}
    />
  );
};

export default EmailComponent;
