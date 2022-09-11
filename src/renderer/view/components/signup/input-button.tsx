import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

interface IProps {
  item: string;
}

const InputButton = ({item}: IProps) => {
  const onClick = () => {};
  return (
    <InputButtonWrapper>
      <input />
      <Button item={item} onClick={onClick} />
    </InputButtonWrapper>
  )
}

export default InputButton;
