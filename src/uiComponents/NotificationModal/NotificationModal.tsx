import styled from '@emotion/styled';
import { Close } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { ScreenSizes } from '../../consts/vars';
import PrimaryButton from '../PrimaryButton';

const InnerModal = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  left: 50%;
  max-width: 600px;
  outline: none;
  padding: 40px 16px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 94%;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    width: 80%;
    padding: 30px 50px;
  }
`;

const ExitBtn = styled(Close)`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
  path {
    fill: ${(props) => props.theme.colors.blue};
  }
`;

const ModalBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  text-align: center;
`;

const ModalTitle = styled.div`
  ${(props) => props.theme.type.sub_title};
  color: ${(props) => props.theme.colors.green};
`;

const ModalSubTitle = styled.div`
  color: ${(props) => props.theme.colors.orange};
`;

interface NotificationModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const NotificationModal = ({ isOpen, setIsOpen }: NotificationModalProps) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <InnerModal>
        <ExitBtn onClick={() => setIsOpen(false)} />
        <ModalBlock>
          <ModalTitle>The countdown is on!</ModalTitle>
          <ModalSubTitle>Make sure to checkout our updated schedule!</ModalSubTitle>
          <Link to={'/schedule'} onClick={() => setIsOpen(false)}>
            <PrimaryButton>Schedule</PrimaryButton>
          </Link>
        </ModalBlock>
      </InnerModal>
    </Modal>
  );
};

export default NotificationModal;
