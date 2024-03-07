import styled from '@emotion/styled';
import { doc, setDoc } from '@firebase/firestore';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/lab';
import { Snackbar } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Field, Form } from 'react-final-form';

import { db } from '../../../App';
import { CurInvitesContext } from '../../../context/CurInvitesContext';
import { Ceremony, Person, Welcome } from '../../../types';
import Toast from '../../../uiComponents/Toast';
import NextPrevBtns from './NextPrevBtns';

const RSVPForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
`;

const RSVPFormOptions = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`;

const RSVPFormField = styled(Field)`
  align-items: center;
  appearance: none;
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font: inherit;
  height: 1.15em;
  margin: 0;
  transition: background-color 0.25s ease-in;
  width: 1.15em;

  &:checked {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

const RSVPFormLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 5px;
`;

const Date = styled.div`
  margin-bottom: 8px;
  ${(props) => props.theme.type.cb_small_body};
`;

const Description = styled.div`
  color: ${(props) => props.theme.colors.orange};
  font-size: 20px;
  margin-bottom: 8px;
  ${(props) => props.theme.type.cb_sub_title};
`;

interface EditInviteFormProps {
  isEditing: boolean;
  person: Person;
  prevPerson?: Person;
  nextPerson?: Person;
  goToNext: () => void;
  goToPrev: () => void;
  setIsFinished: () => void;
  setHasSuccess: () => void;
}

const EditInviteForm = ({
  setHasSuccess,
  isEditing,
  person,
  prevPerson,
  nextPerson,
  goToNext,
  goToPrev,
  setIsFinished,
}: EditInviteFormProps) => {
  const { invites, setInvites } = useContext(CurInvitesContext);

  const [hasError, setHasError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (values: Person) => {
    setLoading(true);
    const personId = (person.first + person.last).toLowerCase();
    const docRef = doc(db, 'person', `${personId}`);
    setDoc(docRef, values)
      .then(() => {
        setLoading(false);
        if (!invites) return;
        const updatedInvites: Person[] = invites.map((person) => {
          if (person.id === values.id) {
            return { ...person, ...values };
          }
          return person;
        });
        setInvites(updatedInvites);
        setHasSuccess();
        console.log('Document has been updated successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isNotComplete = (values: Person) => !values.welcome || !values.ceremony || !values.beachDay;

  const validate = (values: Person) => {
    const notComplete = isNotComplete(values);
    setHasError(notComplete);
    return !notComplete;
  };

  return (
    <div>
      <Form
        initialValues={person}
        onSubmit={(values: Person) => {
          const hasNoErrors = validate(values);
          hasNoErrors && onSubmit(values);
        }}
      >
        {({ handleSubmit, submitting, values, pristine }) => (
          <RSVPForm style={{ width: '100%' }}>
            <div>
              <Date>01.17.25</Date>
              <Description>Welcome Party</Description>
              <RSVPFormOptions>
                <RSVPFormLabel>
                  <RSVPFormField
                    className="btn"
                    name="welcome"
                    component="input"
                    type="radio"
                    value={Welcome.ATTENDING}
                  />
                  Attending
                </RSVPFormLabel>
                <RSVPFormLabel>
                  <RSVPFormField
                    name="welcome"
                    component="input"
                    type="radio"
                    value={Welcome.NOT_ATTENDING}
                  />
                  Not Attending
                </RSVPFormLabel>
              </RSVPFormOptions>
            </div>
            <div>
              <Date>01.18.25</Date>
              <Description>Wedding Ceremony & Reception</Description>
              <RSVPFormOptions>
                <RSVPFormLabel>
                  <RSVPFormField
                    className="btn"
                    name="ceremony"
                    component="input"
                    type="radio"
                    value={Welcome.ATTENDING}
                  />
                  Attending
                </RSVPFormLabel>
                <RSVPFormLabel>
                  <RSVPFormField
                    name="ceremony"
                    component="input"
                    type="radio"
                    value={Welcome.NOT_ATTENDING}
                  />
                  Not Attending
                </RSVPFormLabel>
              </RSVPFormOptions>
            </div>
            <div>
              <Date>01.19.25</Date>
              <Description>Beach Day</Description>
              <RSVPFormOptions>
                <RSVPFormLabel>
                  <RSVPFormField
                    className="btn"
                    name="beachDay"
                    component="input"
                    type="radio"
                    value={Ceremony.ATTENDING}
                  />
                  Attending
                </RSVPFormLabel>
                <RSVPFormLabel>
                  <RSVPFormField
                    className="btn"
                    name="beachDay"
                    component="input"
                    type="radio"
                    value={Ceremony.NOT_ATTENDING}
                  />
                  Not Attending
                </RSVPFormLabel>
              </RSVPFormOptions>
            </div>
            <NextPrevBtns
              isEditing={isEditing}
              disabled={isNotComplete(person) && pristine}
              loading={loading}
              prevPerson={prevPerson}
              goToPrev={goToPrev}
              nextPerson={nextPerson}
              goToNext={goToNext}
              handleSubmit={handleSubmit}
              setIsFinished={setIsFinished}
              submitting={submitting}
            />
          </RSVPForm>
        )}
      </Form>
      <Toast
        isOpen={hasError}
        close={() => setHasError(false)}
        severity={'error'}
        message={'Must complete each field'}
      />
    </div>
  );
};

export default EditInviteForm;
