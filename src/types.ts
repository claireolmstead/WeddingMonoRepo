import { ReactElement } from 'react';

export type Event = {
  title: string;
  subtitle?: string;
  time?: string;
  startDate: string;
  startTime: string;
  endTime: string;
  location?: string;
  description?: string;
  whatToWear?: string;
  whatToKnow?: string;
};

export type DaySchedule = {
  title: string;
  description?: string;
  date: string;
  img: string;
  events: Event[];
};

export type Schedule = DaySchedule[];

export type AccommodationItem = {
  title: string;
  description?: string;
  infoItems: (string | ReactElement)[];
};

export type LodgingItems = AccommodationItem[];

export enum Pickleball {
  ATTENDING = 'ATTENDING',
  PLAYING = 'PLAYING',
  NOT_ATTENDING = 'NOT_ATTENDING',
}

export enum Ceremony {
  DRIVING = 'DRIVING',
  SHUTTLING = 'SHUTTLING',
  NOT_ATTENDING = 'NOT_ATTENDING',
}

export enum Welcome {
  ATTENDING = 'ATTENDING',
  NOT_ATTENDING = 'NOT_ATTENDING',
}

export type Person = {
  id: string;
  first: string;
  last: string;
  partyId: number;
  welcome: Welcome;
  ceremony: Ceremony;
  pickleball: Pickleball;
};

export type NewPerson = {
  id: string;
  first: string;
  last: string;
  partyId: number;
};
