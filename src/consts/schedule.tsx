import StarIcon from '@mui/icons-material/Star';
import React from 'react';

import Pickleballimg_0 from '../images/NSImages/Pickleball/img.png';
import Pickleballimg_1 from '../images/NSImages/Pickleball/img_1.png';
import Pickleballimg_2 from '../images/NSImages/Pickleball/img_2.png';
import Pickleballimg_3 from '../images/NSImages/Pickleball/img_3.png';
import Pickleballimg_4 from '../images/NSImages/Pickleball/img_4.png';
import Pickleballimg_5 from '../images/NSImages/Pickleball/img_5.png';
import Pickleballimg_6 from '../images/NSImages/Pickleball/img_6.png';
import Pickleballimg_7 from '../images/NSImages/Pickleball/img_7.png';
import Pickleballimg_8 from '../images/NSImages/Pickleball/img_8.png';
import Rehearsal_1 from '../images/NSImages/Rehearsal/Rehearsal_1.jpeg';
import Rehearsal_2 from '../images/NSImages/Rehearsal/Rehearsal_2.jpeg';
import Rehearsal_3 from '../images/NSImages/Rehearsal/Rehearsal_3.jpeg';
import Rehearsal_4 from '../images/NSImages/Rehearsal/Rehearsal_4.jpeg';
import Rehearsal_5 from '../images/NSImages/Rehearsal/Rehearsal_5.jpeg';
import Rehearsal_6 from '../images/NSImages/Rehearsal/Rehearsal_6.jpeg';
import Rehearsal_7 from '../images/NSImages/Rehearsal/Rehearsal_7.jpeg';
import Rehearsal_8 from '../images/NSImages/Rehearsal/Rehearsal_8.jpeg';
import Rehearsal_9 from '../images/NSImages/Rehearsal/Rehearsal_9.jpeg';
import Rehearsal_10 from '../images/NSImages/Rehearsal/Rehearsal_10.jpeg';
import Rehearsal_11 from '../images/NSImages/Rehearsal/Rehearsal_11.jpeg';
import Rehearsal_12 from '../images/NSImages/Rehearsal/Rehearsal_12.jpeg';
import Weddingimg_0 from '../images/NSImages/Wedding/img.png';
import Weddingimg_1 from '../images/NSImages/Wedding/img_1.png';
import Weddingimg_2 from '../images/NSImages/Wedding/img_2.png';
import Weddingimg_3 from '../images/NSImages/Wedding/img_3.png';
import Weddingimg_4 from '../images/NSImages/Wedding/img_4.png';
import Weddingimg_5 from '../images/NSImages/Wedding/img_5.png';
import Weddingimg_6 from '../images/NSImages/Wedding/img_6.png';
import Weddingimg_7 from '../images/NSImages/Wedding/img_7.png';
import Weddingimg_8 from '../images/NSImages/Wedding/img_8.png';
import Weddingimg_9 from '../images/NSImages/Wedding/img_9.png';
import WelcomePartyimg_0 from '../images/NSImages/WelcomeParty/img_0.png';
import WelcomePartyimg_1 from '../images/NSImages/WelcomeParty/img_1.png';
import WelcomePartyimg_2 from '../images/NSImages/WelcomeParty/img_2.png';
import WelcomePartyimg_3 from '../images/NSImages/WelcomeParty/img_3.png';
import WelcomePartyimg_4 from '../images/NSImages/WelcomeParty/img_4.png';
import WelcomePartyimg_5 from '../images/NSImages/WelcomeParty/img_5.png';
import WelcomePartyimg_6 from '../images/NSImages/WelcomeParty/img_6.png';
import WelcomePartyimg_7 from '../images/NSImages/WelcomeParty/img_7.png';
import WelcomePartyimg_8 from '../images/NSImages/WelcomeParty/img_8.png';
import WelcomePartyimg_9 from '../images/NSImages/WelcomeParty/img_9.png';
import WelcomePartyimg_10 from '../images/NSImages/WelcomeParty/img_10.png';
import WelcomePartyimg_11 from '../images/NSImages/WelcomeParty/img_11.png';
import { Schedule } from '../types';
import Row from '../uiComponents/Row';

export const schedule: Schedule = [
  {
    title: 'Welcome Festivities',
    date: 'Thursday | 10.26.23',
    events: [
      {
        title: 'Love Birds Rehearsal Dinner',
        time: '4 pm',
        startDate: '2023-10-26',
        startTime: '15:30',
        endTime: '19:30',
        location: (
          <a
            href={
              'https://www.google.com/maps/dir/41.6908586,-70.276548/50857+Burns+Canyon+Rd,+Pioneertown,+CA+92268/@32.7962769,-129.6956196,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80db2c321a5919e3:0xf74385197508c08!2m2!1d-116.5557096!2d34.1973745?entry=ttu'
            }
            rel={'noreferrer'}
            target={'_blank'}
          >
            Rimrock Ranch | 50857 Burns Canyon Rd, Pioneertown, CA 92268
          </a>
        ),
        description:
          "For those of you in the wedding, join us at 4 pm to rehearse for the big day. At 5:00 pm, we'll all come together to celebrate Sterling and Nick with a special dinner and toasts to the love birds.",
        whatToWear: (
          <div className={'column'}>
            <div className={'title'}>Romantic Country</div>
            <Row isTopAligned={true}>
              <StarIcon />
              <b>Cowgirls:</b> Think florals and ruffles mixed with your favorite pair of cowboy
              boots.
            </Row>
            <Row isTopAligned={true}>
              <StarIcon />
              <b>Cowboys:</b> Let&apos;s dress up in a button-down paired with cowboy boots and a
              cowboy hat.
            </Row>
          </div>
        ),
        whatToKnow: (
          <div className={'column'}>
            <Row isTopAligned={true}>
              <StarIcon />
              After dinner, we will be going to the Red Dog Saloon to say, &quot;Adios
              Olmstead&quot; before the love birds become Mr. and Mrs. Nick Reynolds. Plan to leave
              Rimrock Ranch at 7:30pm.
            </Row>
            <Row isTopAligned={true}>
              <StarIcon />
              Ubers/Lyfts are limited in the area, so please arrange for a designated driver ahead
              of time.
            </Row>
          </div>
        ),
        images: [
          Rehearsal_1,
          Rehearsal_2,
          Rehearsal_3,
          Rehearsal_4,
          Rehearsal_5,
          Rehearsal_6,
          Rehearsal_7,
          Rehearsal_8,
          Rehearsal_9,
          Rehearsal_10,
          Rehearsal_11,
          Rehearsal_12,
        ],
      },
      {
        title: 'Adios Olmstead Cocktails',
        time: '8 pm',
        startDate: '2023-10-26',
        startTime: '20:00',
        endTime: '22:00',
        location: (
          <a
            href={
              'https://www.google.com/maps/dir/41.6823105,-70.0360165/the+red+dog+saloon+joshua+tree/@32.1492637,-129.6356609,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80db28d8cd747a19:0x7f623b673592ce31!2m2!1d-116.4962467!2d34.1568771?entry=ttu'
            }
            rel={'noreferrer'}
            target={'_blank'}
          >
            The Red Dog Saloon | 53539 Mane St, Pioneertown, CA 92268
          </a>
        ),
        description:
          'Howdy! Sterling & Nick will be meeting at Red Dog Saloon for cocktails starting around 8pm. Next door Pappy & Harriet’s will have live music where some people may end up later in the night!',
        whatToWear: (
          <Row isTopAligned={true}>
            <StarIcon />
            These bars have been serving cowboys and rockstars since 1946, so dig out your denim and
            embrace this staple of the old west. Think rugged ranch mixed with old Hollywood
            western.
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
    events: [
      {
        title: 'Pioneertown Shuttle to Rimrock Ranch',
        time: '2:30 pm',
        startDate: '2023-10-27',
        startTime: '14:00',
        endTime: '14:15',
        location: (
          <a
            href={
              'https://www.google.com/maps/dir//pioneertown+corrals/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80db28df142f225b:0x8eea98090689d1d5?sa=X&ved=2ahUKEwju9dGchoaCAxWRJEQIHa7RBTsQ9Rd6BAhaEAA&ved=2ahUKEwju9dGchoaCAxWRJEQIHa7RBTsQ9Rd6BAhgEAQ'
            }
            rel={'noreferrer'}
            target={'_blank'}
          >
            Pioneertown Corrals | 53626 Mane St, Pioneertown, CA 92268
          </a>
        ),
        description: (
          <div style={{ background: '#f16522', padding: '10px' }}>
            <div>
              {'We have reserved the parking lot at the Pioneertown Corrals. Shuttles will be departing outside the entrance' +
                ' of the Pioneertown Corrals every 10 minutes starting at 2:30pm. The last shuttle will depart at 3:00 pm so' +
                ' PLEASE ARRIVE EARLY. There is very limited parking at the venue and parking on the street is not allowed.' +
                ' Come early, have a beer, and don’t be on the last shuttle!'}
            </div>
            <br />
            <div>
              {'Guests can leave their vehicles at the Pioneertown Corrals overnight but they have to be PICKED UP BY 10 AM the following morning. ' +
                'Please be advised we are not responsible for any lost, stolen or damaged items to or from the vehicle ' +
                'and there is no overnight security.'}
            </div>
          </div>
        ),
      },
      {
        title: 'Love Birds Roundup',
        time: '3:30 - 10 pm',
        location: (
          <a
            href={
              'https://www.google.com/maps/dir/41.6908586,-70.276548/50857+Burns+Canyon+Rd,+Pioneertown,+CA+92268/@32.7962769,-129.6956196,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80db2c321a5919e3:0xf74385197508c08!2m2!1d-116.5557096!2d34.1973745?entry=ttu'
            }
            rel={'noreferrer'}
            target={'_blank'}
          >
            Rimrock Ranch | 50857 Burns Canyon Rd, Pioneertown, CA 92268
          </a>
        ),
        startDate: '2023-10-27',
        startTime: '15:00',
        endTime: '22:00',
        description:
          'Please join us to celebrate the wedding of Nick and Sterling! Arrive at Rimrock Ranch for a welcome cocktail. The ceremony begins at 3:30pm with dinner and dancing following. FORMAL ATTIRE.',
        whatToWear: (
          <div className={'column'}>
            <div className={'title'}>California Cowboy Cocktail</div>
            <div className={'subtitle'}>
              Celebrate Sterling and Nick’s wild romance with your finest FORMAL Western wear.
            </div>
            <Row isTopAligned={true}>
              <StarIcon />
              <div>
                <b>Gals:</b> Pile on turquoise and pair your hat with your cocktail dress.
                Sterling-style, we&apos;re wearing color, sparkles, and fur.
              </div>
            </Row>
            <Row isTopAligned={true}>
              <StarIcon />
              <div>
                <b>Guys:</b> Break out your bolo tie with your suit. Show off your best hat and belt
                buckle.
              </div>
            </Row>
          </div>
        ),
        whatToKnow: (
          <div className={'column'}>
            <Row isTopAligned={true}>
              <StarIcon />
              <div>
                <b>Attire:</b> The venue is entirely outdoors and the nights can get chilly. Please
                bring an extra layer and opt for boots since we will be kicking up dust!
              </div>
            </Row>
            <Row isTopAligned={true}>
              <StarIcon />
              <div>
                <b>Transportation:</b> Rimrock Ranch has limited parking so plan on taking the
                shuttles. Please do not park outside of Rimrock Ranch as it is not allowed.
              </div>
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
    events: [
      {
        title: 'Pickleball Social',
        time: '12:00 pm',
        startDate: '2023-10-28',
        startTime: '12:00',
        endTime: '14:00',
        location: (
          <a
            href={
              'https://www.google.com/maps/dir//55100+Martinez+Trail,+Yucca+Valley,+CA+92284/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80db27d30806d169:0xf236c4978713f69e?sa=X&ved=2ahUKEwjhwuPc94-CAxVMJUQIHcpjCyIQwwV6BAgREAA&ved=2ahUKEwjhwuPc94-CAxVMJUQIHcpjCyIQwwV6BAgTEAQ'
            }
            rel={'noreferrer'}
            target={'_blank'}
          >
            Hawk’s Landing Golf Course | 55100 Martinez Trail, Yucca Valley, CA 92284
          </a>
        ),
        description: (
          <a href="https://www.instagram.com/the_hoopahouse/" target="_blank" rel="noreferrer">
            We reserved the parking lot at Hawk’s Landing Golf Course. Shuttles will take you to the
            Hoopa House starting at 11:30AM. It’s a private property so the shuttles are a must! Get
            dressed in your best white tennis attire for a fun day of games, food, and drinks!
          </a>
        ),
        whatToWear: (
          <div className={'column'}>
            <div className={'title'}>“Country” Club</div>
            <Row isTopAligned={true}>
              <StarIcon />
              If you opt-in for pickleball tennis attire is a must. Think <b>all-white</b> vintage
              country club chic.
            </Row>
          </div>
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
