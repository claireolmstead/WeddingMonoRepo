import styled from '@emotion/styled';
import React from 'react';

const StyledRow = styled.div<{ isTopAligned: boolean; gap?: number }>`
  align-items: ${(props) => (props.isTopAligned ? 'flex-start' : 'center')};
  display: flex;
  gap: ${(props) => (props.gap ? `${props.gap}px` : '12px')};
`;

const Row = ({
  gap,
  children,
  isTopAligned = false,
}: {
  children: React.ReactNode;
  isTopAligned?: boolean;
  gap?: number;
}) => {
  return (
    <StyledRow isTopAligned={isTopAligned} gap={gap}>
      {children}
    </StyledRow>
  );
};

export default Row;
