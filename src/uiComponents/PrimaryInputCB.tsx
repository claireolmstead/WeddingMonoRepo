import styled from '@emotion/styled';
import React from 'react';

interface PrimaryInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.grey};
  height: 40px;
  letter-spacing: 4px;
  outline: none;
  text-align: center;
  width: 350px;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
    opacity: 0.5;
  }
`;

const PrimaryInput = ({ value, placeholder, onChange, className }: PrimaryInputProps) => {
  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

export default PrimaryInput;
