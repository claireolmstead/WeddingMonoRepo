import styled from '@emotion/styled';
import React from 'react';

interface PrimaryInputProps {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event?: any) => void;
  className?: string;
}

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  letter-spacing: 4px;
  max-width: 300px;
  outline: none;
  padding: 0 24px;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &:disabled:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const BCPrimaryButton = ({ type, children, className, onClick, disabled }: PrimaryInputProps) => {
  return (
    <StyledButton type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default BCPrimaryButton;
