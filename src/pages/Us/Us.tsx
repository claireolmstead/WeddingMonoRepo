import styled from '@emotion/styled';
import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

import img1 from '../../images/Us/img1.jpg';
import img2 from '../../images/Us/img2.jpg';
import img3 from '../../images/Us/img3.jpg';
import img4 from '../../images/Us/img4.jpg';
import img5 from '../../images/Us/img5.jpg';
import img6 from '../../images/Us/img6.jpg';
import img7 from '../../images/Us/img7.jpg';
import img8 from '../../images/Us/img8.jpg';
import img9 from '../../images/Us/img9.jpg';
import img10 from '../../images/Us/img10.jpg';
import img11 from '../../images/Us/img11.jpg';

const UsImageList = styled(ImageList)`
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
  padding: 50px 100px;
  position: relative;
`;

const UsImage = styled.img`
  filter: grayscale(100%);
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  transition: filter 0.4s;
  width: 300px;

  &:hover {
    filter: grayscale(0%);
  }
`;

const Us = () => {
  const images = [img1, img10, img2, img3, img4, img5, img6, img7, img8, img9, img11];
  return (
    <>
      <UsImageList sx={{ width: 300 }} cols={1} rowHeight={300} gap={20}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <UsImage src={image} alt={image} loading="lazy" />
          </ImageListItem>
        ))}
      </UsImageList>
    </>
  );
};

export default Us;
