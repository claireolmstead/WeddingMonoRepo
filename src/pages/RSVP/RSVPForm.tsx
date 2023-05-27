import styled from '@emotion/styled';
import { doc, setDoc } from '@firebase/firestore';
import React from 'react';
import { Field, Form } from 'react-final-form';

import { db } from '../../App';
import { ScreenSizes } from '../../consts/vars';
import { Ceremony, Person, Pickleball, Welcome } from '../../types';
import PrimaryButton from '../../uiComponents/PrimaryButton';

const RSVPFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  padding: 30px 0;
  width: 100%;
`;

const Date = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 14px;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

const RSVPFormSectionBlock = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  max-width: 600px;

  @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: none;
  }
`;

const RSVPFormSection = styled.div`
  background-color: ${(props) => props.theme.colors.tan};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.black};
  padding: 30px;
`;

const RSVPFormOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const RSVPFormButtons = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
`;

const RSVPFormLabel = styled.label`
  align-items: center;
  display: flex;
  gap: 5px;
`;

const RSVPFormField = styled(Field)`
  align-items: center;
  appearance: none;
  background-color: ${(props) => props.theme.colors.clear};
  border: 2px solid ${(props) => props.theme.colors.red};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
  font: inherit;
  height: 1.15em;
  margin: 0;
  transition: background-color 0.25s ease-in;
  width: 1.15em;

  &:checked {
    background-color: ${(props) => props.theme.colors.red};
  }
`;

interface RSVPFormProps {
  person: Person;
  isFinalPerson: boolean;
  goToNext: () => void;
}

const RSVPForm = ({ person, isFinalPerson, goToNext }: RSVPFormProps) => {
  const onSubmit = (values: Person) => {
    const personId = (person.first + person.last).toLowerCase();
    const docRef = doc(db, 'person', `${personId}`);
    setDoc(docRef, values)
      .then(() => {
        isFinalPerson && goToNext();
        console.log('Document has been updated successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <RSVPFormContainer>
      <Form
        key={person.id}
        initialValues={person}
        onSubmit={(values) => {
          console.log('here');
          onSubmit(values as Person);
        }}
      >
        {({ handleSubmit, submitting }) => (
          <form>
            <RSVPFormSectionBlock>
              <RSVPFormSection>
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
              </RSVPFormSection>

              <RSVPFormSection>
                <Date>Friday, October 27, 2023</Date>
                <Description>Wedding</Description>
                <RSVPFormOptions>
                  <RSVPFormLabel>
                    <RSVPFormField
                      name="ceremony"
                      component="input"
                      type="radio"
                      value={Ceremony.SHUTTLING}
                    />
                    Shuttling
                  </RSVPFormLabel>
                  <RSVPFormLabel>
                    <RSVPFormField
                      name="ceremony"
                      component="input"
                      type="radio"
                      value={Ceremony.NOT_ATTENDING}
                    />
                    Not Attending
                  </RSVPFormLabel>
                </RSVPFormOptions>
              </RSVPFormSection>

              <RSVPFormSection>
                <Date>Saturday, October 28, 2023</Date>
                <Description>Pickle-ball Social</Description>
                <RSVPFormOptions>
                  <RSVPFormLabel>
                    <RSVPFormField
                      name="pickleball"
                      component="input"
                      type="radio"
                      value={Pickleball.PLAYING}
                    />
                    Playing
                  </RSVPFormLabel>
                  <RSVPFormLabel>
                    <RSVPFormField
                      name="pickleball"
                      component="input"
                      type="radio"
                      value={Pickleball.ATTENDING}
                    />
                    Attending
                  </RSVPFormLabel>
                  <RSVPFormLabel>
                    <RSVPFormField
                      name="pickleball"
                      component="input"
                      type="radio"
                      value={Pickleball.NOT_ATTENDING}
                    />
                    Not Attending
                  </RSVPFormLabel>
                </RSVPFormOptions>
              </RSVPFormSection>
            </RSVPFormSectionBlock>

            <RSVPFormButtons>
              <PrimaryButton disabled={submitting} onClick={handleSubmit}>
                {isFinalPerson ? 'Submit' : 'Next'}
              </PrimaryButton>
              {/*{person.welcome && person.ceremony && person.pickleball && (*/}
              {/*  <PrimaryButton*/}
              {/*    disabled={submitting}*/}
              {/*    onClick={() => setSuccess(true)}*/}
              {/*    colorWay={'secondary'}*/}
              {/*  >*/}
              {/*    Cancel*/}
              {/*  </PrimaryButton>*/}
              {/*)}*/}
            </RSVPFormButtons>
          </form>
        )}
      </Form>
    </RSVPFormContainer>
  );
};

export default RSVPForm;
