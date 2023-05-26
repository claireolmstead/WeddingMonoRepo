import styled from '@emotion/styled';
import { deleteDoc, doc } from '@firebase/firestore';
import { Modal } from '@mui/material';
import React from 'react';

import { db } from '../../App';
import { ScreenSizes } from '../../consts/vars';
import { Person } from '../../types';
import PrimaryButton from '../../uiComponents/PrimaryButton';

const ModalInner = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  left: 50%;
  max-width: 800px;
  outline: none;
  padding: 16px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 94%;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    width: 80%;
    padding: 30px 50px;
  }
`;

interface EditPersonProps {
  isOpen: boolean;
  handleClose: () => void;
  person?: Person;
}

const EditPerson = ({ isOpen, handleClose, person }: EditPersonProps) => {
  if (!person) return <></>;

  const deletePerson = async () => {
    const docRef = doc(db, 'person', person.id);
    await deleteDoc(docRef);
    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <ModalInner>
        <div>Edit</div>
        <div>
          {person.first} {person.last}
        </div>
        <PrimaryButton onClick={deletePerson}>Delete Person</PrimaryButton>
      </ModalInner>
    </Modal>
  );
};

export default EditPerson;
