import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImg01 from '../../assets/images/gallery-01.jpg';
import galleryImg02 from '../../assets/images/gallery-02.jpg';
import galleryImg03 from '../../assets/images/gallery-03.jpg';
import galleryImg04 from '../../assets/images/gallery-04.jpg';
import galleryImg05 from '../../assets/images/gallery-05.jpg';
import galleryImg06 from '../../assets/images/gallery-06.jpg';
import galleryImg07 from '../../assets/images/gallery-07.jpg';

const galleryImages = [
  galleryImg01,
  galleryImg02,
  galleryImg03,
  galleryImg04,
  galleryImg05,
  galleryImg06,
  galleryImg07,
];

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter='1rem'>
        {galleryImages.map((item, index) => (
          <img
            className='masonry_img'
            src={item}
            key={index}
            alt=''
            style={{ width: '100%', display: 'block', borderRadius: '10px' }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;

