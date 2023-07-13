import styled from '@emotion/styled';
import { doc, setDoc } from '@firebase/firestore';
import React, { useContext } from 'react';
import { Field, Form } from 'react-final-form';
import { Parallax } from 'react-scroll-parallax';

import { db } from '../../App';
import { ScreenSizes } from '../../consts/vars';
import { CurInvitesContext } from '../../context/CurInvitesContext';
import { ScreenContext } from '../../context/ScreenContext';
import StarBorder from '../../images/StarBorder.png';
import { Ceremony, Person, Pickleball, Welcome } from '../../types';
import PrimaryButton from '../../uiComponents/PrimaryButton';

const RSVPFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin: 30px;
`;

const Date = styled.div`
  //font-size: 14px;
  color: ${(props) => props.theme.colors.orange};
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  ${(props) => props.theme.type.sub_title};
`;

const RSVPFormSectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 600px;
  width: 98vw;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    width: 80vw;
  }

  @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
    width: 600px;
  }
`;

const RSVPFormSection = styled.div`
  align-items: center;
  background-image: url(${StarBorder});
  background-position: center;
  background-repeat: no-repeat;
  background-size: calc(100% - 20px) calc(100% - 20px);
  border-radius: 8px;
  box-shadow: -5px 8px 10px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 220px;
  justify-content: center;
  padding: 50px;
  text-align: center;
`;

const RSVPFormSection1 = styled(RSVPFormSection)`
  background-color: ${(props) => props.theme.colors.pink};
`;

const RSVPFormSection2 = styled(RSVPFormSection)`
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

const RSVPFormSection3 = styled(RSVPFormSection)`
  background-color: ${(props) => props.theme.colors.blue};
`;

const RSVPFormOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
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

interface RSVPFormProps {
  person: Person;
  isFinalPerson: boolean;
  goToNext: () => void;
  setIsFinished: () => void;
}

const RSVPForm = ({ person, isFinalPerson, goToNext, setIsFinished }: RSVPFormProps) => {
  const { isDesktop } = useContext(ScreenContext);
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

  return (
    <RSVPFormContainer>
      <Form
        key={person.id}
        initialValues={person}
        onSubmit={(values) => {
          onSubmit(values as Person);
        }}
      >
        {({ handleSubmit, submitting, values }) => (
          <form style={{ width: '100%' }}>
            <RSVPFormSectionBlock>
              <Parallax rotateY={isDesktop ? [-60, 60] : [0, 0]}>
                <RSVPFormSection1>
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
                </RSVPFormSection1>
              </Parallax>

              <Parallax rotateY={isDesktop ? [-60, 60] : [0, 0]}>
                <RSVPFormSection2>
                  <Date>Friday, October 27, 2023</Date>
                  <Description>Wedding</Description>
                  <RSVPFormOptions>
                    <RSVPFormLabel>
                      <RSVPFormField
                        name="ceremony"
                        component="input"
                        type="radio"
                        value={Ceremony.ATTENDING}
                      />
                      Attending
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
                  {values.ceremony === Ceremony.ATTENDING && (
                    <RSVPFormOptions style={{ marginTop: 20 }}>
                      <RSVPFormLabel>
                        <RSVPFormField
                          name="ceremonyTransportation"
                          component="input"
                          type="radio"
                          value={Ceremony.SHUTTLING}
                        />
                        Shuttling
                      </RSVPFormLabel>
                      <RSVPFormLabel>
                        <RSVPFormField
                          name="ceremonyTransportation"
                          component="input"
                          type="radio"
                          value={Ceremony.DRIVING}
                        />
                        Driving
                      </RSVPFormLabel>
                      <RSVPFormLabel>
                        <RSVPFormField
                          name="ceremonyTransportation"
                          component="input"
                          type="radio"
                          value={Ceremony.OTHER}
                        />
                        Other
                      </RSVPFormLabel>
                    </RSVPFormOptions>
                  )}
                </RSVPFormSection2>
              </Parallax>

              <Parallax rotateY={isDesktop ? [-60, 60] : [0, 0]}>
                <RSVPFormSection3>
                  <Date>Saturday, October 28, 2023</Date>
                  <Description>Pickleball Social</Description>
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
                </RSVPFormSection3>
              </Parallax>
            </RSVPFormSectionBlock>

            <RSVPFormButtons>
              <PrimaryButton disabled={submitting} onClick={handleSubmit}>
                {isFinalPerson ? 'Submit' : 'Next'}
              </PrimaryButton>
            </RSVPFormButtons>
          </form>
        )}
      </Form>
    </RSVPFormContainer>
  );
};

export default RSVPForm;
