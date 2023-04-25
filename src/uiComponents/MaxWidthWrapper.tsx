import styled from '@emotion/styled';

import { ScreenSizes } from '../consts/vars';

export const MaxWidthWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${ScreenSizes.MAX_SCREEN}px;
  position: relative;
  width: 100%;
`;
