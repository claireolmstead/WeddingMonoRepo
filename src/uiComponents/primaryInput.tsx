import styled from '@emotion/styled';
import React from 'react';

interface PrimaryInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.colors.tan};
  border: none;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.red};
  height: 40px;
  outline: none;
  text-align: center;
  width: 350px;

  &::placeholder {
    color: ${(props) => props.theme.colors.red};
    opacity: 0.55;
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
