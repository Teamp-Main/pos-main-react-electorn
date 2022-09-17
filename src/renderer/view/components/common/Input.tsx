import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PasswordIcon from '../../../assets/img/password-icon.svg';

const InputContainer = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 3px 3px 4px 4px rgba(128, 128, 128, 0.6);
  background-color: #fff;

  padding: 0.5rem 0;
  > label {
    color: ${props => props.theme.font.label};
    font-size: 13px;
    padding: 0 1rem;
  }

  .input-form {
    display: flex;
    width: 100%;
    align-items: center;

    > input {
      width: 100%;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }

    .password-icon {
      cursor: pointer;
      margin: 0 1rem;
      width: 20px;
      height: 20px;
    }
  }
`;

interface IProps {
  label: string;
  state: string;
  setState: (ref: string) => void;
  inputType: 'text' | 'number' | 'password';
  style?: React.CSSProperties;
}

const Input = ({ state, setState, inputType, label, style }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const checkingType = () => {
    switch (inputType) {
      case 'password':
        return setState(inputRef.current?.value as string);
      default:
        return setState(inputRef.current?.value as string);
    }
  };

  return (
    <InputContainer style={style}>
      <label>{label}</label>
      <div className="input-form">
        <input
          ref={inputRef}
          type={showPwd ? 'text' : inputType}
          value={state}
          onChange={() => checkingType()}
        />
        {inputType === 'password' && (
          <img
            className="password-icon"
            src={PasswordIcon}
            alt="password-icon"
            onClick={() => setShowPwd(prev => !prev)}
          />
        )}
      </div>
    </InputContainer>
  );
};

export default Input;
