// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import Swiper from 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function BannerCarousel() {
 
    return (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='w-1/2'
        >
          <SwiperSlide ><img className='w-3/4 mx-auto h-1/2' src="https://i.postimg.cc/GmKBMywG/masum-ahmed-d-Xj8i-SUCydo-unsplash.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.postimg.cc/GmKBMywG/masum-ahmed-d-Xj8i-SUCydo-unsplash.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.postimg.cc/GmKBMywG/masum-ahmed-d-Xj8i-SUCydo-unsplash.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.postimg.cc/GmKBMywG/masum-ahmed-d-Xj8i-SUCydo-unsplash.jpg" alt="" /></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      );
  

  
}

export default BannerCarousel;