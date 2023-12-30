import styled from '@emotion/styled';

export const Subtitle = styled.div<{ color?: string }>`
  ${(props) => props.theme.type.cb_sub_title};
  color: ${(props) => props.color};
`;
