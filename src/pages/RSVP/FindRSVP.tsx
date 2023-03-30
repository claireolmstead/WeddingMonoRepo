import React, { useState } from 'react';

import PrimaryInput from '../../uiComponents/PrimaryInput';

interface FindRSVPProps {
  getInvites: (searchValue: string) => void;
  resetIsNotFound: () => void;
}

const FindRSVP = ({ getInvites, resetIsNotFound }: FindRSVPProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onSearch = () => {
    setSearchValue('');
    getInvites(searchValue);
  };
  return (
    <>
      <PrimaryInput
        value={searchValue}
        placeholder={'First Last'}
        onChange={(e) => {
          setSearchValue(e.target.value);
          resetIsNotFound();
        }}
      />
      <button onClick={onSearch}>Search</button>
    </>
  );
};

export default FindRSVP;
