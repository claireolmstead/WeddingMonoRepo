import styled from '@emotion/styled';
import React from 'react';

const PageBackground = styled.div`
  ${(props) => props.theme.mixins.backgroundGradient};
`;

const PageBody = styled.div`
  position: relative;
`;

const PageTitle = styled.div`
  ${(props) => props.theme.type.page_title};
`;

const Us = () => {
  return (
    <div>
      <PageBackground />
      <PageBody>
        <PageTitle>Us</PageTitle>
      </PageBody>
    </div>
  );
};

export default Us;
