import styled from '@emotion/styled';
import React from 'react';

interface PrimaryInputProps {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event?: any) => void;
  colorWay?: 'primary' | 'secondary';
  className?: string;
}

const StyledButton = styled.button<{ colorWay: PrimaryInputProps['colorWay'] }>`
  background-color: ${(props) =>
    props.colorWay === 'secondary' ? props.theme.colors.lightBlue : props.theme.colors.pink};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-weight: bold;
  height: 40px;
  max-width: 300px;
  outline: none;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.2s ease;
  width: 300px;

  &:hover {
    background-color: ${(props) =>
      props.colorWay === 'secondary'
        ? props.theme.colors.lightBlueHover
        : props.theme.colors.pinkHover};
  }

  &:disabled:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }

  &:active {
    background-color: ${(props) =>
      props.colorWay === 'secondary'
        ? props.theme.colors.lightBlueHover
        : props.theme.colors.pinkHover};
  }
`;

const PrimaryButton = ({
  type,
  children,
  className,
  onClick,
  disabled,
  colorWay,
}: PrimaryInputProps) => {
  return (
    <StyledButton
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      colorWay={colorWay}
    >
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;
