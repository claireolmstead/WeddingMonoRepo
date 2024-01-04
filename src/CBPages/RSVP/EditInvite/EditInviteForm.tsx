import styled from '@emotion/styled';
import { doc, setDoc } from '@firebase/firestore';
import React from 'react';
import { Field, Form } from 'react-final-form';

import { db } from '../../../App';
import { Ceremony, Person, Welcome } from '../../../types';

const RSVPFormOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const RSVPFormField = styled(Field)`
  align-items: center;
  appearance: none;
  background-color: ${(props) => props.theme.colors.clear};
  border: 2px solid ${(props) => props.theme.colors.orange};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.orange};
  cursor: pointer;
  font: inherit;
  height: 1.15em;
  margin: 0;
  transition: background-color 0.25s ease-in;
  width: 1.15em;

  &:checked {
    background-color: ${(props) => props.theme.colors.orange};
  }
`;

const RSVPFormLabel = styled.label`
  align-items: center;
  display: flex;
  gap: 5px;
`;

const Date = styled.div`
  color: ${(props) => props.theme.colors.orange};
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  ${(props) => props.theme.type.cb_sub_title};
`;

interface EditInviteFormProps {
  person: Person;
  isFinalPerson: boolean;
  goToNext: () => void;
  setIsFinished: () => void;
}

const EditInviteForm = ({
  person,
  isFinalPerson,
  goToNext,
  setIsFinished,
}: EditInviteFormProps) => {
  const onSubmit = (values: Person) => {
    const personId = (person.first + person.last).toLowerCase();
    const docRef = doc(db, 'person', `${personId}`);
    if (values.ceremony === Ceremony.NOT_ATTENDING) {
      values.ceremonyTransportation = Ceremony.NOT_ATTENDING;
    }
    setDoc(docRef, values)
      .then(() => {
        !isFinalPerson ? goToNext() : setIsFinished();
        console.log('Document has been updated successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validate = (values: Person) => {
    const errors: Record<string, string> = {};
    if (!values.welcome) {
      errors.welcome = 'Field is required';
    }
    if (!values.ceremony) {
      errors.ceremony = 'Field is required';
    }
    // if (Object.keys(errors).length === 0) {
    //   setIsSnackbarOpen(false);
    // } else setIsSnackbarOpen(true);
    return Object.keys(errors).length === 0;
  };

  return (
    <Form
      initialValues={person}
      onSubmit={(values: Person) => {
        const hasNoErrors = validate(values);
        hasNoErrors && onSubmit(values);
      }}
    >
      {({ handleSubmit, submitting, values }) => (
        <form style={{ width: '100%' }}>
          <div>
            <div>
              <Date>Thursday, October 26, 2023</Date>
              <Description>Welcome Party</Description>
              <RSVPFormOptions>
                <RSVPFormLabel>
                  <RSVPFormField
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
          </div>
        </form>
      )}
    </Form>
  );
};

export default EditInviteForm;
