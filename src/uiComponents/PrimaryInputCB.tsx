import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../consts/vars';

interface PrimaryInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
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
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
    opacity: 0.5;
  }

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    width: 400px;
  }
`;

const PrimaryInput = ({
  value,
  placeholder,
  onChange,
  className,
  onKeyDown,
}: PrimaryInputProps) => {
  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      onKeyDown={onKeyDown}
    />
  );
};

export default PrimaryInput;
