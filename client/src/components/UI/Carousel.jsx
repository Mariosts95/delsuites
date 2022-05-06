// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Carousel = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay, EffectCoverflow]}
      autoplay={{
        delay: 2500,
      }}
      speed={1000}
      effect='coverflow'
      loop
      style={{ borderRadius: '4px' }}
    >
      {images.map((image) => (
        <SwiperSlide key={image._id}>
          <img
            src={image.url}
            alt={image.alt}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              height: '100%',
              margin: '0 auto',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
