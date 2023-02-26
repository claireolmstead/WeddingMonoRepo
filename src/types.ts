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
