import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button<{ isActive: boolean }>`
  background-color: ${props =>
    props.isActive ? props.theme.main.purple : props.theme.main.gray};
  border: none;
  width: 100%;
  height: 100%;
  left: 467px;
  top: 87px;
  border-radius: 4px;
  padding: 10px 20px 10px 20px;
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

const Button = ({ item, onClick, isActive, style }: IProps) => {
  return (
    <ButtonContainer
      style={style}
      isActive={isActive}
      onClick={() => onClick()}
    >
      <span>{item}</span>{' '}
    </ButtonContainer>
  );
};

export default Button;
