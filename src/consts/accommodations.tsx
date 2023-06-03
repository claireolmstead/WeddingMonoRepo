import React from 'react';

import { LodgingItems } from '../types';

export const lodging: LodgingItems = [
  {
    title: 'LODGING',
    description:
      '*PLEASE BOOK ACCOMMODATION AS SOON AS POSSIBLE AS THERE IS NO GUARANTEE OF AVAILABILITY.',
    infoItems: [
      <a
        key={'airbnb'}
        href={
          'https://www.airbnb.com/s/Pioneertown--CA/homes?adults=1&place_id=ChIJOcg-Lqcu24ARvMOr7gwKMVE&refinement_paths%5B%5D=%2Fhomes&checkin=2023-10-26&checkout=2023-10-29'
        }
        rel={'noreferrer'}
        target={'_blank'}
      >
        Air BNB
      </a>,
      <a
        key={'vrbo'}
        href={
          'https://www.vrbo.com/search/keywords:pioneertown-california-united-states-of-america/arrival:2023-10-26/departure:2023-10-29?petIncluded=false&filterByTotalPrice=true'
        }
        rel={'noreferrer'}
        target={'_blank'}
      >
        VRBO
      </a>,
      <a
        key={'motel'}
        href={'https://www.pioneertown-motel.com/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Pioneertown Motel
      </a>,
      <a
        key={'autocamp'}
        href={
          'https://autocamp.com/joshua-tree/?gclid=CjwKCAjw67ajBhAVEiwA2g_jELcyvWL08-SgtWrMDf6qKAQcHctlC6h4RBIE_gK6dMG8QtQAQkNiHBoCyvcQAvD_BwE'
        }
        rel={'noreferrer'}
        target={'_blank'}
      >
        Autocamp Joshua Tree
      </a>,
      <a
        key={'stayfieldtrip'}
        href={'https://www.stayfieldtrip.com/joshua-tree/?sort_by=rotation&location_area_id=13513'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Fieldtrip
      </a>,
      <a
        key={'stayfieldtrip'}
        href={'https://www.stayfieldtrip.com/joshua-tree/?sort_by=rotation&location_area_id=13513'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Fieldtrip
      </a>,
      <a
        key={'homesteadmodern'}
        href={'https://book.homesteadmodern.com/properties'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Homestead Modern
      </a>,
    ],
  },
  {
    title: 'TRAVEL',
    infoItems: [
      <div key={'fly'}>Fly into this airport</div>,
      <div key={'fly'}>Other fun facts</div>,
    ],
  },
  {
    title: 'RESTAURANTS',
    infoItems: [
      <a
        key={'pappyandharriets'}
        href={'https://pappyandharriets.com/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Pappy And Harriet&apos;s
      </a>,
    ],
  },
];
