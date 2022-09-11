import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";

const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`

interface IProps {
  item: string;
  label: string;
  state: string;
  inputType:'text' | 'number' | 'password'
  setState: React.Dispatch<React.SetStateAction<string >>
}

const InputButton = ({item, label, state, inputType, setState}: IProps) => {
  const onClick = () => {};
  return (
    <InputButtonWrapper>
      <Input label={label} state={state} inputType={inputType} setState={setState}/>
      <Button item={item} onClick={onClick} />
    </InputButtonWrapper>
  )
}

export default InputButton;
