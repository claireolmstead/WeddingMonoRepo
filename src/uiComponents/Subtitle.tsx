import styled from '@emotion/styled';

export const Subtitle = styled.div<{ color?: string; variant?: 'sm' }>`
  ${(props) =>
    props.variant === 'sm' ? props.theme.type.cb_small_title : props.theme.type.cb_sub_title};
  color: ${(props) => props.color};
`;
