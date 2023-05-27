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
    props.colorWay === 'secondary' ? props.theme.colors.darkTan : props.theme.colors.red};
  border: none;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  height: 40px;
  max-width: 300px;
  outline: none;
  text-align: center;
  transition: background-color 0.2s ease;
  width: 300px;

  &:hover {
    background-color: ${(props) =>
      props.colorWay === 'secondary'
        ? props.theme.colors.hoverDarkTan
        : props.theme.colors.hoverRed};
  }

  &:disabled:hover {
    background-color: ${(props) => props.theme.colors.disabledRed};
  }

  &:active {
    background-color: ${(props) =>
      props.colorWay === 'secondary'
        ? props.theme.colors.hoverDarkTan
        : props.theme.colors.hoverRed};
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
