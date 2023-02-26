import { Schedule } from '../types';

export const schedule: Schedule = [
  {
    title: 'Welcome',
    description: 'Thursday October 26',
    events: [{ name: 'Check in.' }, { time: '8 pm', name: 'Meet us at A Restaurant for drinks!' }],
  },
  {
    title: 'Wedding',
    description: 'Friday October 27',
    events: [
      { time: '3:30 pm', name: 'MANDATORY BUS PICKUP AT A PLACE.' },
      { time: '4 pm', name: 'Arrive at Rimrock Ranch for the ceremony.' },
      { time: '5 pm', name: 'Cocktail hour.' },
      { time: '6 pm', name: 'Reception.' },
    ],
  },
  {
    title: 'Play',
    description: 'Saturday October 28',
    events: [
      {
        time: '11 am',
        name: 'First annual Reynolds At The Ranch Pickle Ball Tournament.',
        comments: ['Lunch provided.'],
      },
    ],
  },
  {
    title: 'Farewell',
    description: 'Sunday October 29',
    events: [{ name: 'Check out.' }],
  },
];
