import { collection, doc, getDocs, orderBy, query, setDoc } from '@firebase/firestore';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';

import { db } from '../../App';
import { doesPersonExist } from '../../hooks/doesPersonExist';
import { getPersonId } from '../../hooks/getPersonId';
import { Person } from '../../types';
import PrimaryButton from '../../uiComponents/PrimaryButton';

const FileUpload = () => {
  const inputRef = useRef<any>();
  const [uploadData, setUploadData] = useState<any[]>();
  const [people, setPeople] = useState<any[]>([]);

  const handleFile = (e: any) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const workbook = XLSX.read(e.target?.result, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      setUploadData(json);
    };
    reader.readAsArrayBuffer(file);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.addEventListener(
        'change',
        (e: unknown) => handleFile(e as unknown as ChangeEvent<HTMLInputElement>),
        false
      );
    }
  }, [inputRef]);

  const saveDataFromFile = () => {
    const createInvite = async (newPerson: {
      first: string;
      last: string;
      partyId: string;
      rehearsal: string;
    }) => {
      const personId = getPersonId(newPerson.first, newPerson.last);
      const docRef = doc(db, 'person', `${personId}`);
      await doesPersonExist(docRef);
      const data = { ...newPerson, id: personId };
      setPeople([...people, data]);
      return data;
    };

    const writeInvite = (person: {
      first: string;
      last: string;
      partyId: string;
      id: string;
      rehearsal: string;
    }) => {
      const docRef = doc(db, 'person', `${person.id}`);
      setDoc(docRef, person)
        .then(() => {
          console.log('Document has been added successfully: ', person);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (uploadData && uploadData?.length > 0) {
      uploadData?.map(async (data) => {
        const person = await createInvite(data).catch(console.error);
        person && writeInvite(person);
      });
    }
  };

  const getPeople = async (orderKey?: string) => {
    const q = query(collection(db, 'person'), orderBy(orderKey || 'partyId'));
    const querySnapshot = await getDocs(q);
    let people: Person[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      people = [...people, data as Person];
    });
    return people;
  };

  const exportDataToFile = async () => {
    const people = await getPeople();
    const worksheet = XLSX.utils.json_to_sheet(people);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Reynolds_Rsvps');
    XLSX.writeFile(workbook, 'Reynolds_Rsvps.xlsx', { compression: true });
  };

  return (
    <>
      <input type="file" ref={inputRef} />
      {uploadData && uploadData?.length > 0 && (
        <PrimaryButton onClick={saveDataFromFile}>Save Data</PrimaryButton>
      )}
      <PrimaryButton colorWay={'secondary'} onClick={exportDataToFile}>
        Export Responses
      </PrimaryButton>
    </>
  );
};

export default FileUpload;
