import styled from '@emotion/styled';

export const EventItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EventDay = styled.div`
  @keyframes slidein {
    from {
      opacity: 0;
      transform: translateX(10%);
    }

    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  animation: slidein 1s;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
  transition: 0.3s ease-in-out;
  width: 600px;
`;

export const EventDate = styled.div`
  ${(props) => props.theme.type.cb_large_body};
  color: ${(props) => props.theme.colors.orange};
`;
