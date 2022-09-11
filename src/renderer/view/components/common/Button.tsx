import React from 'react';
import theme from 'renderer/assets/global/theme';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: ${theme.main.purple};
  height: 56px;
  width: 104px;
  left: 467px;
  top: 87px;
  border-radius: 4px;
  padding: 10px 20px 10px 20px;
`;

interface IProps {
  item: string;
  onClick: () => void;
}

const Button = ({ item, onClick }: IProps) => {
  return <ButtonContainer onClick={() => onClick()}>{item}</ButtonContainer>;
};

export default Button;
