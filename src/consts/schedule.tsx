import StarIcon from '@mui/icons-material/Star';
import React from 'react';

import NSImg1 from '../images/NSImg1.jpg';
import NSImg2 from '../images/NSImg2.jpg';
import NSImg3 from '../images/NSImg3.jpg';
import Pickleballimg_0 from '../images/Pickleball/img.png';
import Pickleballimg_1 from '../images/Pickleball/img_1.png';
import Pickleballimg_2 from '../images/Pickleball/img_2.png';
import Pickleballimg_3 from '../images/Pickleball/img_3.png';
import Pickleballimg_4 from '../images/Pickleball/img_4.png';
import Pickleballimg_5 from '../images/Pickleball/img_5.png';
import Pickleballimg_6 from '../images/Pickleball/img_6.png';
import Pickleballimg_7 from '../images/Pickleball/img_7.png';
import Pickleballimg_8 from '../images/Pickleball/img_8.png';
import Weddingimg_0 from '../images/Wedding/img.png';
import Weddingimg_1 from '../images/Wedding/img_1.png';
import Weddingimg_2 from '../images/Wedding/img_2.png';
import Weddingimg_3 from '../images/Wedding/img_3.png';
import Weddingimg_4 from '../images/Wedding/img_4.png';
import Weddingimg_5 from '../images/Wedding/img_5.png';
import Weddingimg_6 from '../images/Wedding/img_6.png';
import Weddingimg_7 from '../images/Wedding/img_7.png';
import Weddingimg_8 from '../images/Wedding/img_8.png';
import Weddingimg_9 from '../images/Wedding/img_9.png';
import WelcomePartyimg_0 from '../images/WelcomeParty/img_0.png';
import WelcomePartyimg_1 from '../images/WelcomeParty/img_1.png';
import WelcomePartyimg_2 from '../images/WelcomeParty/img_2.png';
import WelcomePartyimg_3 from '../images/WelcomeParty/img_3.png';
import WelcomePartyimg_4 from '../images/WelcomeParty/img_4.png';
import WelcomePartyimg_5 from '../images/WelcomeParty/img_5.png';
import WelcomePartyimg_6 from '../images/WelcomeParty/img_6.png';
import WelcomePartyimg_7 from '../images/WelcomeParty/img_7.png';
import WelcomePartyimg_8 from '../images/WelcomeParty/img_8.png';
import WelcomePartyimg_9 from '../images/WelcomeParty/img_9.png';
import WelcomePartyimg_10 from '../images/WelcomeParty/img_10.png';
import WelcomePartyimg_11 from '../images/WelcomeParty/img_11.png';
import { Schedule } from '../types';
import Row from '../uiComponents/Row';

export const schedule: Schedule = [
  {
    title: 'Welcome Festivities',
    date: 'Thursday | 10.26.23',
    img: NSImg1,
    events: [
      {
        title: 'Love Birds Rehearsal Dinner',
        time: '3:30 pm',
        startDate: '2023-10-26',
        startTime: '15:30',
        endTime: '19:30',
        location: 'Rimrock Ranch | 50857 Burns Canyon Rd, Pioneertown, CA 92268',
        description:
          'After rehearsing for the big day, celebrate Sterling and Nick with a special dinner and toasts to the love birds.',
        whatToWear: (
          <div>
            <div className={'title'}>Romantic Country</div>
            <Row isTopAligned={true}>
              <StarIcon />
              <b>Cowgirls:</b> Think florals and ruffles mixed with your favorite pair of cowboy
              boots.
            </Row>
            <Row isTopAligned={true}>
              <StarIcon />
              <b>Cowboys:</b> Opt for denim and button-down shirts paired with cowboy boots and a
              cowboy hat.
            </Row>
          </div>
        ),
        whatToKnow: (
          <div>
            <Row isTopAligned={true}>
              <StarIcon />
              After dinner, we will be going to the Red Dog Saloon to say, &quot;Adios
              Olmstead&quot; before the love birds become Mr. and Mrs. Nick Reynolds. Plan to leave
              Rimrock Ranch at 7:30pm.
            </Row>
            <br />
            <Row isTopAligned={true}>
              <StarIcon />
              Ubers/Lyfts are limited in the area, so please arrange for a designated driver ahead
              of time.
            </Row>
          </div>
        ),
        images: [
          WelcomePartyimg_0,
          WelcomePartyimg_1,
          WelcomePartyimg_2,
          WelcomePartyimg_3,
          WelcomePartyimg_4,
          WelcomePartyimg_5,
          WelcomePartyimg_6,
          WelcomePartyimg_7,
          WelcomePartyimg_8,
          WelcomePartyimg_9,
          WelcomePartyimg_10,
          WelcomePartyimg_11,
        ],
      },
      {
        title: 'Adios Olmstead Cocktails',
        time: '8 pm',
        startDate: '2023-10-26',
        startTime: '20:00',
        endTime: '22:00',
        location: 'The Red Dog Saloon | 53539 Mane St, Pioneertown, CA 92268',
        description:
          'For those who will already be in town, the bride and groom plan to saddle up at the Red Dog Saloon. Drop in to say howdy to the love birds and say “adios” to Sterling Olmstead before she becomes a Reynolds.',
        whatToWear: (
          <Row isTopAligned={true}>
            <StarIcon />
            The Red Dog Saloon has been serving cowboys and rockstars since 1946, so dig out your
            denim and embrace this staple of the old west. Think rugged ranch mixed with old
            Hollywood western.
          </Row>
        ),
        whatToKnow: (
          <Row isTopAligned={true}>
            <StarIcon />
            Ubers are scarce in Joshua Tree. Plan on scheduling your ride ahead of time or having a
            designated driver.
          </Row>
        ),
        images: [
          WelcomePartyimg_0,
          WelcomePartyimg_1,
          WelcomePartyimg_2,
          WelcomePartyimg_3,
          WelcomePartyimg_4,
          WelcomePartyimg_5,
          WelcomePartyimg_6,
          WelcomePartyimg_7,
          WelcomePartyimg_8,
          WelcomePartyimg_9,
          WelcomePartyimg_10,
          WelcomePartyimg_11,
        ],
      },
    ],
  },
  {
    title: 'Wedding Ceremony + Reception',
    date: 'Friday | 10.27.23',
    img: NSImg2,
    events: [
      {
        title: 'Pioneertown Shuttle to Rimrock Ranch',
        time: '2 pm',
        startDate: '2023-10-27',
        startTime: '14:00',
        endTime: '14:15',
        location: 'The Pioneertown Motel',
        description: `Hitch a ride with us or else you'll be left in the dust! Very limited parking at Rimrock Ranch so please consider using our shuttle!`,
      },
      {
        title: 'Love Birds Roundup',
        time: '3 - 10 pm',
        location: 'Rimrock Ranch | 50857 Burns Canyon Rd, Pioneertown, CA 92268',
        startDate: '2023-10-27',
        startTime: '15:00',
        endTime: '22:00',
        description:
          'Please join us to celebrate the wedding of Nick and Sterling! Arrive at Rimrock Ranch for a welcome cocktail. The ceremony begins at 3:45pm with dinner and dancing following.',
        whatToWear: (
          <div>
            <div className={'title'}>California Cowboy Cocktail</div>
            Celebrate Sterling and Nick’s wild romance with your finest formal Western wear.
            <br />
            <Row isTopAligned={true}>
              <StarIcon />
              <b>Cowgirls:</b> Pile on turquoise jewelry and pair your favorite cowboy hat with your
              cocktail dress. Sterling-style, we&apos;re wearing color, sparkles, and fur.
            </Row>
            <Row isTopAligned={true}>
              <StarIcon />
              <b>Cowboys:</b> Break out your bolo tie with your suit. Show off your best hat and
              belt buckle.
            </Row>
          </div>
        ),
        whatToKnow: (
          <div>
            <Row isTopAligned={true}>
              <StarIcon />
              <b>Attire:</b> The wedding venue is entirely outdoors, and the desert nights can get
              chilly. Please bring an extra layer and opt for cowboy boots since we will be kicking
              up dust!
            </Row>
            <br />
            <Row isTopAligned={true}>
              <StarIcon />
              <b>Transportation:</b> Rimrock Ranch has limited parking so please plan on taking
              advantage of the shuttles. Please do not park on the street outside of Rimrock Ranch
              as it is not allowed.
            </Row>
          </div>
        ),
        images: [
          Weddingimg_0,
          Weddingimg_1,
          Weddingimg_2,
          Weddingimg_3,
          Weddingimg_4,
          Weddingimg_5,
          Weddingimg_6,
          Weddingimg_7,
          Weddingimg_8,
          Weddingimg_9,
        ],
      },
    ],
  },
  {
    title: 'Play - Pickleball Social',
    date: 'Saturday | 10.28.23',
    img: NSImg3,
    events: [
      {
        title: 'The Reynolds Wrap',
        time: '11 - 2 pm',
        startDate: '2023-10-28',
        startTime: '11:00',
        endTime: '14:00',
        location: 'Hoopa House | Need address',
        description: (
          <a href="https://www.instagram.com/the_hoopahouse/" target="_blank" rel="noreferrer">
            Before Nick and Sterling ride off into the sunset, wrap up the wedding weekend with a
            casual BBQ Reynolds-style and pickleball at the Hoopa House.
          </a>
        ),
        whatToWear: (
          <Row isTopAligned={true}>
            <StarIcon />
            <div className={'title'}>“Country” Club</div>
            If you opt-in for pickleball tennis attire is a must. Think vintage country club chic.
          </Row>
        ),
        whatToKnow: (
          <Row isTopAligned={true}>
            <StarIcon /> We look forward to soaking up the views from this special home owned by one
            of the Reynolds family’s closest friends.
          </Row>
        ),
        images: [
          Pickleballimg_0,
          Pickleballimg_1,
          Pickleballimg_2,
          Pickleballimg_3,
          Pickleballimg_4,
          Pickleballimg_5,
          Pickleballimg_6,
          Pickleballimg_7,
          Pickleballimg_8,
        ],
      },
    ],
  },
];
