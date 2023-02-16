import styled from '@emotion/styled';
import React from 'react';

interface PrimaryInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const StyledInput = styled.input`
  border: none;
`;

const PrimaryInput = ({ value, onChange }: PrimaryInputProps) => {
  return <StyledInput value={value} onChange={onChange} />;
};

export default PrimaryInput;
