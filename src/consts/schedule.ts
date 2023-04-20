import { Schedule } from '../types';

export const schedule: Schedule = [
  {
    title: 'Welcome',
    description: 'Thursday, October 26, 2023',
    events: [
      { name: 'Check in.' },
      { time: '8 pm', name: 'Adios Olmstead! Meet us for cocktails at The Red Dog Saloon.' },
    ],
  },
  {
    title: 'Wedding',
    description: 'Friday, October 27, 2023',
    events: [
      { time: '1:30 pm', name: 'MANDATORY BUS PICKUP FROM PIONEERTOWN.' },
      {
        time: '2 pm',
        name: 'Meet the Reynolds at the Ranch: Wedding + Reception',
        comments: ['Rimrock Ranch in Pioneertown, California'],
      },
    ],
  },
  {
    title: 'Play',
    description: 'Saturday, October 28, 2023',
    events: [
      {
        time: '11 am',
        name: 'Reynolds Wrap: Pickle-ball Social',
        comments: ['Lunch provided.'],
      },
    ],
  },
  {
    title: 'Farewell',
    description: 'Sunday, October 29, 2023',
    events: [{ name: 'Check out.' }],
  },
];
