import styled from '@emotion/styled';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StyleContainer = styled.div`
  padding: 0 30px;
  position: relative;
`;

const Container = ({ children, className }: ContainerProps) => {
  return <StyleContainer className={className}>{children}</StyleContainer>;
};

export default Container;
