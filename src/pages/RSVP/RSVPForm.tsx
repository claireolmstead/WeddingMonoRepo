import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';

import { Ceremony, Person, Pickleball, Welcome } from '../../types';

interface RSVPFormProps {
  person: Person;
}

const RSVPForm = ({ person }: RSVPFormProps) => {
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = (values: Partial<Person>) => {
    console.log(values);
    setSuccess(true);
    // const personId = (person.first + person.last).toLowerCase();
    // const docRef = doc(db, 'person', `${personId}`);
    // const data = { ...person, isAttending: isAttending };
    // setDoc(docRef, data)
    //   .then(() => {
    //     console.log('Document has been updated successfully');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      {success ? (
        <>
          <div>Successful RSVP!</div>
          <button onClick={() => setSuccess(false)}>Edit RSVP</button>
        </>
      ) : (
        <Form key={person.id} initialValues={person} onSubmit={onSubmit}>
          {({ handleSubmit, form, submitting, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                {person.first} {person.last}
              </div>

              <div>
                <div>
                  Thursday, October 26, 2023: Adios Olmstead! Meet us for cocktails at The Red Dog
                  Saloon
                </div>
                <label>
                  <Field name="welcome" component="input" type="radio" value={Welcome.ATTENDING} />
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
              </div>

              <div>
                <div>
                  Friday, October 27, 2023: Parking spaces limited at ceremony. Please check box if
                  planning to drive to ceremony Shuttles available: please check box if planning to
                  shuttle from downtown Pioneertown.
                </div>
                <label>
                  <Field name="ceremony" component="input" type="radio" value={Ceremony.DRIVING} />
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
              </div>

              <div>
                <div>Saturday, October 28, 2023: Reynolds Wrap: Pickle-ball Social</div>
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
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button type="button" onClick={form.reset as unknown as any} disabled={submitting}>
                  Reset
                </button>
              </div>
              <h3>Values</h3>
              <pre>{JSON.stringify(values, undefined, 2)}</pre>
              <hr />
            </form>
          )}
        </Form>
      )}
    </>
  );
};

export default RSVPForm;
