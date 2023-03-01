/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button<{ isActive: boolean }>`
  background-color: ${props =>
    props.isActive
      ? props.theme.background.purple
      : props.theme.background.gray};
  border: none;
  width: 100%;
  height: 100%;
  left: 23.35vw;
  top: 4.35vw;
  border-radius: 0.2vw;
  padding: 0.5vw 1vw;
  cursor: pointer;
  > span {
    color: #fff;
  }
`;

interface IProps {
  item: string;
  onClick: () => void;
  isActive: boolean;
  style?: React.CSSProperties;
}

function Button({ item, onClick, isActive, style }: IProps) {
  return (
    <ButtonContainer
      style={style}
      isActive={isActive}
      onClick={() => onClick()}
    >
      <span>{item}</span>{' '}
    </ButtonContainer>
  );
}

export default Button;
