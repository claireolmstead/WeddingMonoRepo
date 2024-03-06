import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import ToDoImg from '../../images/CBImages/ToDo.jpg';
import Container from '../../uiComponents/Container';
import { PageTitle } from '../../uiComponents/PageTitle';

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
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const TodoItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  a {
    letter-spacing: 4px;
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

const Todo = () => {
  return (
    <>
      <ToDoBackground />
      <BlackOverlay />
      <TodoBlock>
        <PageTitle>TO DO</PageTitle>
        <TodoItemsBlock>
          <TodoSubTitle>Activities</TodoSubTitle>
          <a
            href={'https://www.maunakearesort.com/golf/course-overview'}
            target={'_blank'}
            rel="noreferrer"
          >
            Golf
          </a>
          <a
            href="https://www.maunakearesort.com/play/activities/tennis"
            target={'_blank'}
            rel="noreferrer"
          >
            Pickleball & Tennis
          </a>
          <a
            href="https://www.maunakearesort.com/play/activities/kids-programs"
            target={'_blank'}
            rel="noreferrer"
          >
            Kids Programs
          </a>
        </TodoItemsBlock>
        <TodoItemsBlock>
          <TodoSubTitle>Dining</TodoSubTitle>
          <a
            href={'https://www.maunakearesort.com/dine/signature/manta'}
            target={'_blank'}
            rel="noreferrer"
          >
            Manta
          </a>
          <a
            href={'https://www.maunakearesort.com/dine/casual/copper-bar'}
            target={'_blank'}
            rel="noreferrer"
          >
            Copper Bar
          </a>
        </TodoItemsBlock>
      </TodoBlock>
    </>
  );
};

export default Todo;
