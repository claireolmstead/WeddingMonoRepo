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
`;

const TodoItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`;

const TodoSubTitle = styled.div`
  ${(props) => props.theme.type.cb_sub_title};
  color: ${(props) => props.theme.colors.orange};
`;

const Todo = () => {
  return (
    <>
      <ToDoBackground />
      <BlackOverlay />
      <TodoBlock>
        <PageTitle>TODO</PageTitle>
        <TodoItemsBlock>
          <TodoSubTitle>Activities</TodoSubTitle>
          <a>Golf</a>
          <a>Pickleball</a>
          <a>Tennis</a>
          <a>Spa & Salon</a>
          <a>Boccee Ball</a>
          <a>Hiking</a>
        </TodoItemsBlock>
        <TodoItemsBlock>
          <TodoSubTitle>Dining</TodoSubTitle>
          <a>Dining Option 1</a>
          <a>Dining Option 2</a>
          <a>Dining Option 3</a>
        </TodoItemsBlock>
      </TodoBlock>
    </>
  );
};

export default Todo;
