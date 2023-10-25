import styled from '@emotion/styled';
import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

import { Person } from '../../types';
import RSVPForm from './RSVPForm';

interface RSVPFormListProps {
  invites: Person[];
  setIsFinished: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const RSVPFormTabs = styled(Tabs)`
  .MuiTabs-scrollButtons.Mui-disabled {
    opacity: 0.3;
  }
`;

const RSVPFormTab = styled(Tab)`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.type.main_body};
  font-size: 20px;
`;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const RSVPFormList = ({ invites, setIsFinished }: RSVPFormListProps) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <RSVPFormTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        {invites?.map((person) => (
          <RSVPFormTab label={`${person.first} ${person.last}`} key={person.id} wrapped />
        ))}
      </RSVPFormTabs>
      {invites?.map((person, index) => (
        <TabPanel value={value} index={index} key={person.id}>
          <RSVPForm
            person={person}
            key={person.id}
            isFinalPerson={index === invites.length - 1}
            goToNext={() => {
              setValue(index + 1);
              window.scrollTo(0, 0);
            }}
            setIsFinished={setIsFinished}
          />
        </TabPanel>
      ))}
    </>
  );
};

export default RSVPFormList;
