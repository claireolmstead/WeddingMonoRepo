import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

import img from '../../images/NSImages/Pioneertown/img.png';
import img_1 from '../../images/NSImages/Pioneertown/img_1.png';
import img_2 from '../../images/NSImages/Pioneertown/img_2.png';
import img_3 from '../../images/NSImages/Pioneertown/img_3.png';
import img_4 from '../../images/NSImages/Pioneertown/img_4.png';
import img_5 from '../../images/NSImages/Pioneertown/img_5.png';
import img_6 from '../../images/NSImages/Pioneertown/img_6.png';
import img_7 from '../../images/NSImages/Pioneertown/img_7.png';

const LodgingImages = () => {
  const images = [img, img_1, img_2, img_3, img_4, img_5, img_6, img_7];

  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={2} gap={8} variant="masonry">
      {images.map((image) => (
        <ImageListItem key={image}>
          <img src={image} alt={image} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default LodgingImages;
