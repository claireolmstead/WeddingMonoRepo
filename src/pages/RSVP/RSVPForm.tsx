import styled from '@emotion/styled';
import { doc, setDoc } from '@firebase/firestore';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';

import { db } from '../../App';
import { ScreenSizes } from '../../consts/vars';
import { Ceremony, Person, Pickleball, Welcome } from '../../types';
import PrimaryButton from '../../uiComponents/PrimaryButton';

const RSVPFormContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.tan};
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  padding: 30px 0;
  width: 100%;
`;

const Name = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 24px;
  font-weight: bold;
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

interface RSVPFormProps {
  person: Person;
  onSuccess: () => Promise<void>;
}

const RSVPForm = ({ person, onSuccess }: RSVPFormProps) => {
  const [success, setSuccess] = useState<boolean>(
    !!person.welcome && !!person.ceremony && !!person.pickleball
  );

  const onSubmit = (values: Person) => {
    setSuccess(true);
    const personId = (person.first + person.last).toLowerCase();
    const docRef = doc(db, 'person', `${personId}`);
    setDoc(docRef, values)
      .then(() => {
        onSuccess();
        console.log('Document has been updated successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <RSVPFormContainer>
      <Name>
        {person.first} {person.last}
      </Name>
      {success ? (
        <>
          <div>Successful RSVP!</div>
          <PrimaryButton colorWay={'secondary'} onClick={() => setSuccess(false)}>
            Edit RSVP
          </PrimaryButton>
        </>
      ) : (
        <Form key={person.id} initialValues={person} onSubmit={onSubmit}>
          {({ handleSubmit, form, submitting }) => (
            <form onSubmit={handleSubmit}>
              <RSVPFormSectionBlock>
                <RSVPFormSection>
                  <Date>Thursday, October 26, 2023</Date>
                  <Description>
                    Adios Olmstead! Meet us for cocktails at The Red Dog Saloon
                  </Description>
                  <RSVPFormOptions>
                    <label>
                      <Field
                        name="welcome"
                        component="input"
                        type="radio"
                        value={Welcome.ATTENDING}
                      />
                      Attending
                    </label>
                    <label>
                      <Field
                        name="welcome"
                        component="input"
                        type="radio"
                        value={Welcome.NOT_ATTENDING}
                      />
                      Not Attending
                    </label>
                  </RSVPFormOptions>
                </RSVPFormSection>

                <RSVPFormSection>
                  <Date>Friday, October 27, 2023</Date>
                  <Description>
                    Parking spaces limited at ceremony. Please check box if planning to drive to
                    ceremony Shuttles available: please check box if planning to shuttle from
                    downtown Pioneertown.
                  </Description>
                  <RSVPFormOptions>
                    <label>
                      <Field
                        name="ceremony"
                        component="input"
                        type="radio"
                        value={Ceremony.DRIVING}
                      />
                      Driving
                    </label>
                    <label>
                      <Field
                        name="ceremony"
                        component="input"
                        type="radio"
                        value={Ceremony.SHUTTLING}
                      />
                      Shuttling
                    </label>
                    <label>
                      <Field
                        name="ceremony"
                        component="input"
                        type="radio"
                        value={Ceremony.NOT_ATTENDING}
                      />
                      Not Attending
                    </label>
                  </RSVPFormOptions>
                </RSVPFormSection>

                <RSVPFormSection>
                  <Date>Saturday, October 28, 2023</Date>
                  <Description>Reynolds Wrap: Pickle-ball Social</Description>
                  <RSVPFormOptions>
                    <label>
                      <Field
                        name="pickleball"
                        component="input"
                        type="radio"
                        value={Pickleball.PLAYING}
                      />
                      Playing
                    </label>
                    <label>
                      <Field
                        name="pickleball"
                        component="input"
                        type="radio"
                        value={Pickleball.ATTENDING}
                      />
                      Attending
                    </label>
                    <label>
                      <Field
                        name="pickleball"
                        component="input"
                        type="radio"
                        value={Pickleball.NOT_ATTENDING}
                      />
                      Not Attending
                    </label>
                  </RSVPFormOptions>
                </RSVPFormSection>
              </RSVPFormSectionBlock>

              <RSVPFormButtons>
                <PrimaryButton type="submit" disabled={submitting}>
                  Submit
                </PrimaryButton>
              </RSVPFormButtons>
            </form>
          )}
        </Form>
      )}
    </RSVPFormContainer>
  );
};

export default RSVPForm;
