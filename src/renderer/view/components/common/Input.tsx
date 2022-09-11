import React, { useRef } from 'react';
import styled from 'styled-components';

const InputContainer = styled.fieldset`
width: 100%;
display: flex;
flex-direction: column;
border-radius: 5px;
box-shadow: 3px 1px 4px 4px rgba(128,128,128,0.6);
background-color: #fff;

padding: 0.5rem 0;
>label{
  color:${props => props.theme.font.label};
  font-size: 13px;
  padding: 0 1rem;
}
>input{
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 3px 1px 4px 4px rgba(128, 128, 128, 0.6);
  padding: 0.5rem 0;
  > label {
    color: ${props => props.theme.font.label};
    font-size: 13px;
    padding: 0 1rem;
  }
  > input {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
`;

interface IProps {
  label: string;
  state?: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  inputType: 'text' | 'number' | 'password';
}

const Input = ({ state, setState, inputType, label }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const checkingType = () => {
    switch (inputType) {
      case 'password':
        return setState(inputRef.current?.value as string);
      default:
        return setState(inputRef.current?.value as string);
    }
  };

  return (
    <InputContainer>
      <label>{label}</label>
      <input
        ref={inputRef}
        type={inputType}
        value={state}
        onChange={() => checkingType()}
      />
      <img />
    </InputContainer>
  );
};

export default Input;
