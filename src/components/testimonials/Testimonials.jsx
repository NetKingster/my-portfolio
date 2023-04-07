import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.png';
import AVTR2 from '../../assets/avatar2.png';
import AVTR3 from '../../assets/avatar3.png';
import AVTR4 from '../../assets/avatar4.png';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'bdidjsjd hcuwied dtuiaryoi fgewuigfe wegrwu wgqi wqruigqwo'
  },
  {
    avatar: AVTR2,
    name: 'Derrick Chong',
    review: 'ashduofhoahsih asbfashfioaih fjighiey fgiucgui hvncuehi suehiiw'
  },
  {
    avatar: AVTR3,
    name: 'Bernard Benedict',
    review: 'ashduofhoahsih vueowo feurnjc erncn'
  },
  {
    avatar: AVTR4,
    name: 'Rachel Sussana',
    review: 'ashduofhoahsih asbfashfioaih fjighiey fgiucgui hvncuehi suehiiw'
  }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} >  
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='Avatar one' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials