import styled from '@emotion/styled';
import { East, West } from '@mui/icons-material';
import React from 'react';

import { Person } from '../../../types';
import { NoFillButton } from '../../../uiComponents/NoFillButton';
import Row from '../../../uiComponents/Row';

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextBtn = styled(NoFillButton)<{ disabled: boolean }>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  letter-spacing: 4px;
`;

interface BtnsProps {
  isEditing: boolean;
  handleSubmit: (event?: any) => Promise<any> | undefined;
  submitting: boolean;
  loading: boolean;
  nextDisabled: boolean;
  prevDisabled: boolean;
  prevPerson?: Person;
  nextPerson?: Person;
  goToNext: () => void;
  goToPrev: () => void;
  setIsFinished: () => void;
}

const NextPrevBtns = ({
  isEditing,
  nextDisabled,
  prevDisabled,
  loading,
  prevPerson,
  nextPerson,
  submitting,
  handleSubmit,
  goToNext,
  goToPrev,
  setIsFinished,
}: BtnsProps) => {
  const prevBtnTxt = () => {
    return (
      <Row gap={8}>
        <West />
        {`To ${prevPerson?.first}`}
      </Row>
    );
  };

  const nextBtnTxt = (submitting: boolean) => {
    if (submitting) {
      return 'loading';
    }
    if (!nextPerson) {
      return `Submit RSVP`;
    }
    return (
      <Row gap={8}>
        {`To ${nextPerson?.first}`}
        <East />
      </Row>
    );
  };

  return (
    <Btns>
      {prevPerson && !submitting ? (
        <NextBtn
          className="btn"
          disabled={submitting || loading || prevDisabled}
          onClick={async () => {
            await handleSubmit();
            prevPerson && goToPrev();
          }}
        >
          {prevBtnTxt()}
        </NextBtn>
      ) : (
        <div></div>
      )}
      <NextBtn
        className="btn"
        disabled={submitting || loading || nextDisabled}
        onClick={async () => {
          await handleSubmit();
          nextPerson ? goToNext() : setIsFinished();
        }}
      >
        {nextBtnTxt(loading)}
      </NextBtn>
    </Btns>
  );
};

export default NextPrevBtns;
