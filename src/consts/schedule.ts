import NSImg1 from '../images/NSImg1.jpg';
import NSImg2 from '../images/NSImg2.jpg';
import NSImg3 from '../images/NSImg3.jpg';
import { Schedule } from '../types';

export const schedule: Schedule = [
  {
    title: 'Welcome',
    date: 'Thursday, October 26, 2023',
    img: NSImg1,
    events: [
      {
        title: 'Love Birds Rehearsal Dinner',
        subtitle: 'Buckaroos, boots and bubbly.',
        time: '3:30 pm rehearsal and cocktail hour, followed by dinner',
        startDate: '2023-10-26',
        startTime: '15:30',
        endTime: '19:30',
        location: 'Rimrock Ranch | 50857 Burns Canyon Rd, Pioneertown, CA 92268',
        description:
          'After rehearsing for the big day, celebrate Sterling and Nick with a special dinner and toasts to the love birds.',
        whatToWear:
          'Romantic Country. Cowgirls: Tap into your romantic Western side and think florals, ruffles and romantic silhouettes mixed with your favorite pair of cowboy boots. Cowboys: Opt for denim and button-down shirts paired with cowboy boots and a cowboy hat.',
        whatToKnow:
          'After dinner, we will be going to the Red Dog Saloon for a final round to say, “Adios Olmstead’ before the two love birds become Mr. and Mrs. Nick Reynolds. We will plan to leave Rimrock Ranch at 7:30pm. Ubers/Lyfts are limited in the area, so please arrange for a designated driver ahead of time.',
      },
      {
        title: 'Adios Olmstead Cocktails',
        time: '8 pm',
        startDate: '2023-10-26',
        startTime: '20:00',
        endTime: '22:00',
        location: 'The Red Dog Saloon | 53539 Mane St, Pioneertown, CA 92268',
        description:
          'Yee-haw! For those who will already be in town, the bride and groom plan to saddle up at the Red Dog Saloon. Drop in to say howdy to the love birds and say “adios” to Sterling Olmstead before she becomes a rootin’ tootin’ Reynolds.',
        whatToWear:
          'Think rugged ranch hand mixed with old Hollywood western. The Red Dog Saloon is an establishment that has been serving cowboys and rockstars since 1946, which means you need to dig out that denim and embrace this staple of the old west. Denim on denim and cowboy boots are encouraged.',
        whatToKnow:
          'Ubers are scarce in Joshua Tree. Plan on scheduling your ride ahead of time or having a designated driver.',
      },
    ],
  },
  {
    title: 'Wedding Ceremony + Reception',
    date: 'Friday, October 27, 2023',
    img: NSImg2,
    events: [
      {
        title: 'MANDATORY BUS PICKUP FROM PIONEERTOWN',
        time: '2 pm',
        startDate: '2023-10-27',
        startTime: '14:00',
        endTime: '14:15',
        location: 'The Pioneertown Motel',
        description: `You'll be left in the dust!`,
      },
      {
        title: 'Love Birds Roundup at Rimrock Ranch',
        time: '3 pm - 10 pm: Arrive at Rimrock Ranch for a welcome cocktail. The ceremony begins at 3:45pm with dinner and dancing following.',
        location: 'Rimrock Ranch | 50857 Burns Canyon Rd, Pioneertown, CA 92268',
        startDate: '2023-10-27',
        startTime: '15:00',
        endTime: '22:00',
        description: 'Please join us to celebrate the wedding of Nick and Sterling!',
        whatToWear:
          'California Cowboy Cocktail: Celebrate Sterling and Nick’s wild romance at this high desert hideaway with your finest formal Western-inspired wear. Cocktail attire, cowboy boots and cowboy hats are encouraged. We will be stomping our boots in the dirt all night! Cowboys, please put your Wranglers away for the night. Break out your bolo tie with your suit and show off your best belt buckle. For the cowgirls, pile on the turquoise jewelry or pair your favorite cowboy hat with your dress, but make it very Sterling-style and add a little sparkle and a lot color.',
        whatToKnow:
          'The wedding venue is entirely outdoors, and the desert nights can get a little chilly this time of year. Be sure to plan ahead and bring an extra layer. Skip the strappy sandals and opt for cowboy boots since we will be kicking up dust!\nRimrock Ranch has limited parking so please plan on taking advantage of the shuttle. Since we only want love vibes, please do not park on the street outside of Rimrock Ranch. It is not allowed in this neighborhood.',
      },
    ],
  },
  {
    title: 'Play',
    date: 'Saturday, October 28, 2023',
    img: NSImg3,
    events: [
      {
        title: 'The Reynolds Wrap',
        time: '11 am - 2 pm',
        startDate: '2023-10-28',
        startTime: '11:00',
        endTime: '14:00',
        location: 'Hoopa House - Need address - https://www.instagram.com/the_hoopahouse/',
        description:
          "Before Nick and Sterling ride off into the sunset, wrap up the Reynolds love birds' wedding weekend by wishing the new Mr. and Mrs. Nick Reynolds happy trails with a casual BBQ Reynolds-style and pickleball at the Hoopa House.",
        whatToWear:
          '“Country” Club: If you opt-in for pickleball, cowboy hats, bandanas, and tennis attire is a must. For all of the other cowpokes, come country casual. T-shirts and denim are welcome, or wear whatever you feel comfortable in to soak up the views from this special home owned by one of the Reynolds family’s closest friends.',
      },
    ],
  },
];
