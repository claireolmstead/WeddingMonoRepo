import styled from '@emotion/styled';
import React, { ChangeEvent, useState } from 'react';

import PrimaryButton from '../../uiComponents/PrimaryButton';
import PrimaryInput from '../../uiComponents/PrimaryInput';

const FindRSVPBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

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
    <FindRSVPBlock>
      <PrimaryInput value={name} placeholder={'First Last'} onChange={handleOnChange} />
      <PrimaryButton onClick={onSearch} disabled={name.length < 1}>
        Search
      </PrimaryButton>
    </FindRSVPBlock>
  );
};

export default FindRSVP;
