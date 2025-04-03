import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource-variable/inter';
import '@fontsource/merriweather';
import Header from './components/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BenifiteSection from './components/BenifitSection';

const settings = {
  dots: false,
  // arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const data = [
  {
    image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
    icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
    title: ' Many options in all designs',
    buttonContent: 'Explore Designs'
  },
  {
    image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
    icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
    title: ' Many options in all designs',
    buttonContent: 'Explore Designs'
  },
  {
    image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
    icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
    title: ' Many options in all designs',
    buttonContent: 'Explore Designs'
  },
  {
    image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
    icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
    title: ' Many options in all designs',
    buttonContent: 'Explore Designs'
  },
  {
    image: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_1.jpg',
    icon: 'https://d1zoo736173x95.cloudfront.net/uploads/images/configuration/homepage_image/benefits_subimage_icon_11681880477.svg',
    title: ' Many options in all designs',
    buttonContent: 'Explore Designs'
  }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <section className="hero-section">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 lg:px-30 px-10 lg:py-20 py-8 items-center">
        <div className='lg:text-start text-center'>
          <h1 className='capitalize lg:text-[60px] md:text-[30px] text-[22px] font-[700] font-[Merriweather]'>Design your dream home...</h1>
          <h1 className='capitalize lg:text-[60px] md:text-[30px] text-[22px] font-[700] font-[Merriweather]'>at your fingertips</h1>
          <div className='my-10 flex lg:items-start items-center gap-5 lg:justify-start justify-center lg:flex-row flex-col '>
            <button className='font-[Inter_Variable] capitalize rounded-sm text-white hover:text-[#315399] py-3 px-8 text-[18px] font-[700] cursor-pointer  bg-[#315399] hover:bg-white duration-400 border border-[#315399]'>explore more</button>
            <div className='w-[191px]'>
              <img className='w-full' src='https://www.dsigndpo.com/images/google.svg' alt='google' />
              <span>Download Our App</span>
            </div>
          </div>
        </div>
        <div className=''>
          <div className="slider-container m-auto w-full">
            <Slider {...settings}>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg' />
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg' />
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg' />
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg' />
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg' />
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg' />
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg' />
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg' />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='bg-[#FEF1F1] py-[40px]'>
        <div className='text-center'>
          <h1 className='bg-white inline-block p-[20px_40px] rounded-lg lg:text-[35px] text-[22px] font-[700]'>Benifits you get when using</h1>
        </div>
        <div>
          {
            data.map((item, index) => (
              <BenifiteSection item={item} index={index} />
            ))
          }

        </div>
      </div>
    </section>
  </StrictMode>,
)
