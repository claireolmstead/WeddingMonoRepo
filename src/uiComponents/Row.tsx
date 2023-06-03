import styled from '@emotion/styled';
import React from 'react';

const StyledRow = styled.div<{ isTopAligned: boolean }>`
  align-items: ${(props) => (props.isTopAligned ? 'flex-start' : 'center')};
  display: flex;
  gap: 12px;
`;

const Row = ({
  children,
  isTopAligned = false,
}: {
  children: React.ReactNode;
  isTopAligned?: boolean;
}) => {
  return <StyledRow isTopAligned={isTopAligned}>{children}</StyledRow>;
};

export default Row;
