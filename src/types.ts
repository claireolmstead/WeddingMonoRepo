import { ReactElement } from 'react';

export type Event = {
  title: string;
  subtitle?: string;
  time?: string;
  startDate: string;
  startTime: string;
  endTime: string;
  location?: ReactElement;
  description?: string | ReactElement;
  whatToWear?: ReactElement;
  whatToKnow?: ReactElement;
  images?: string[];
};

export type DaySchedule = {
  title: string;
  description?: string;
  date: string;
  events: Event[];
};

export type Schedule = DaySchedule[];

export type LodgingItem = {
  title: string;
  description?: string;
  infoItems: (string | ReactElement)[];
};

export type LodgingItems = LodgingItem[];

export enum Pickleball {
  ATTENDING = 'ATTENDING',
  PLAYING = 'PLAYING',
  NOT_ATTENDING = 'NOT_ATTENDING',
}

export enum BeachDay {
  ATTENDING = 'ATTENDING',
  NOT_ATTENDING = 'NOT_ATTENDING',
}

export enum Ceremony {
  DRIVING = 'DRIVING',
  SHUTTLING = 'SHUTTLING',
  OTHER = 'OTHER',
  ATTENDING = 'ATTENDING',
  NOT_ATTENDING = 'NOT_ATTENDING',
}

export enum Welcome {
  ATTENDING = 'ATTENDING',
  NOT_ATTENDING = 'NOT_ATTENDING',
}

export enum Rehearsal {
  YES = 'Yes',
  NO = 'No',
  ATTENDING = 'ATTENDING',
  NOT_ATTENDING = 'NOT_ATTENDING',
}

export type Person = {
  id: string;
  first: string;
  last: string;
  partyId: string;
  rehearsal: Rehearsal;
  welcome: Welcome;
  ceremony: Ceremony;
  ceremonyTransportation: Ceremony;
  pickleball: Pickleball;
  beachDay: BeachDay;
  email?: string;
};

export type NewPerson = {
  id: string;
  first: string;
  last: string;
  partyId: number;
};

export type RSVPState = 'UNDEFINED' | 'PENDING' | 'EMAIL' | 'EDITING' | 'RESPONDED';
