import { ReactElement } from 'react';

export type Event = {
  time?: string;
  name: string;
  comments?: string[];
};

export type DaySchedule = {
  title: string;
  description: string;
  events: Event[];
};

export type Schedule = DaySchedule[];

export type AccommodationItem = {
  title: string;
  description: string;
  infoItems: (string | ReactElement)[];
};

export type AccommodationItems = AccommodationItem[];

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
