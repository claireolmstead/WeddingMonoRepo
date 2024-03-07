import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import ToDoImg from '../../images/CBImages/ToDo.jpg';
import Container from '../../uiComponents/Container';
import { PageTitle } from '../../uiComponents/PageTitle';
import { Underline } from '../../uiComponents/Underline';

const ToDoBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${ToDoImg});
  background-position: top;
  width: 100%;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const BlackOverlay = styled.div`
  ${(props) => props.theme.mixins.backgroundBlackOverlay};
`;

const TodoBlock = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const TodoItemsBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  a {
    letter-spacing: 4px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const TodoSubTitle = styled.div`
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
  animation: slidein 2s;
  ${(props) => props.theme.type.cb_sub_title};
  color: ${(props) => props.theme.colors.orange};
`;

const UnderlineLink = styled.a`
  ${Underline};
`;

const Todo = () => {
  return (
    <>
      <ToDoBackground />
      <BlackOverlay />
      <TodoBlock>
        <PageTitle>TO DO</PageTitle>
        <TodoItemsBlock>
          <TodoSubTitle>Activities</TodoSubTitle>
          <UnderlineLink
            href={'https://www.maunakearesort.com/golf/course-overview'}
            target={'_blank'}
            rel="noreferrer"
          >
            Golf
          </UnderlineLink>
          <UnderlineLink
            href="https://www.maunakearesort.com/play/activities/tennis"
            target={'_blank'}
            rel="noreferrer"
          >
            Pickleball & Tennis
          </UnderlineLink>
          <UnderlineLink
            href="https://www.maunakearesort.com/play/activities/kids-programs"
            target={'_blank'}
            rel="noreferrer"
          >
            Kids Programs
          </UnderlineLink>
        </TodoItemsBlock>
        <TodoItemsBlock>
          <TodoSubTitle>Dining</TodoSubTitle>
          <UnderlineLink
            href={'https://www.maunakearesort.com/dine/signature/manta'}
            target={'_blank'}
            rel="noreferrer"
          >
            Manta
          </UnderlineLink>
          <UnderlineLink
            href={'https://www.maunakearesort.com/dine/casual/copper-bar'}
            target={'_blank'}
            rel="noreferrer"
          >
            Copper Bar
          </UnderlineLink>
        </TodoItemsBlock>
      </TodoBlock>
    </>
  );
};

export default Todo;
