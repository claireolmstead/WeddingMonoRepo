export type Event = {
  time?: string;
  name: string;
  comments?: string[];
};

export type DaySchedule = {
  title: string;
  date: string;
  events: Event[];
};

export type Schedule = DaySchedule[];
