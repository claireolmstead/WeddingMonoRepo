import React, { ChangeEvent, useState } from 'react';

import PrimaryInput from '../../uiComponents/PrimaryInput';

interface FindRSVPProps {
  getInvites: (searchValue: string) => void;
  resetIsNotFound: () => void;
}

const FindRSVP = ({ getInvites, resetIsNotFound }: FindRSVPProps) => {
  const [name, setName] = useState<string>('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    resetIsNotFound();
  };

  const onSearch = () => {
    const personId = name.toLowerCase().replace(/ /g, '');
    setName('');
    getInvites(personId);
  };
  return (
    <>
      <PrimaryInput value={name} placeholder={'First Last'} onChange={handleOnChange} />
      <button onClick={onSearch}>Search</button>
    </>
  );
};

export default FindRSVP;
