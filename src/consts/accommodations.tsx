import React from 'react';

import { AccommodationItems } from '../types';

export const accommodations: AccommodationItems = [
  {
    title: 'WHERE',
    description: 'PIONEERTOWN, CA',
    infoItems: [<a key={'airbnb'}>Recommended Air BNBs</a>, <a key={'motel'}>Pioneertown Motel</a>],
  },
  {
    title: 'WHEN',
    description: 'OCTOBER 26 - OCTOBER 29',
    infoItems: ['Wedding on the evening of October 27'],
  },
];
