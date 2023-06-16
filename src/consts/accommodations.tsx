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
      <div key={'fly'}>
        Palm Springs International Airport (PSP) is the local airport, and is about a 45-minute
        drive from Pioneertown.
      </div>,
      <div key={'fly2'}>
        For more flight availability, the below airports are each around a 2-2.5 hour drive:
        <ul>
          <li>LAX: Los Angeles International Airport</li>
          <li>SNA: John Wayne Airport</li>
          <li>SAN: San Diego International Airport</li>
        </ul>
      </div>,
      <div key={'car'}>
        We recommend bringing or renting a car, as ubers/lyfts are scarce in the area.
      </div>,
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
      <a
        key={'https://www.lacopinekitchen.com/'}
        href={'https://www.lacopinekitchen.com/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        La Copine
      </a>,
      <a
        key={'https://www.reddogpioneertown.com/'}
        href={'https://www.reddogpioneertown.com/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Red Dog Saloon
      </a>,
      <a
        key={'https://masomenosjt.com/'}
        href={'https://masomenosjt.com/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Más o Menos
      </a>,
      <a
        key={'https://cafefrontier.square.site/'}
        href={'https://cafefrontier.square.site/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Frontier Cafe
      </a>,
      <a
        key={'https://www.giantrockmeetingroom.com/'}
        href={'https://www.giantrockmeetingroom.com/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        Giant Rock Meeting Room
      </a>,
    ],
  },
];
