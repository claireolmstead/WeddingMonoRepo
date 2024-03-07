import styled from '@emotion/styled';

import { Underline } from './Underline';

export const NoFillButton = styled.button`
  ${Underline};
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 4px;
  outline: none;
  text-transform: uppercase;
  transition: color 0.4s;

  &:disabled {
    color: ${(props) => props.theme.colors.grey};
    cursor: auto;
  }

  &:disabled::after {
    background-color: transparent;
    height: 0;
  }
`;
