import React from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import logo from './../public/main-logo.svg';
import crownIcon from './../public/header-crown.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {

  const settings = {
    dots: false,
    // arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <header>
        <div className="container header-inner">
          <div>
            <figure className="logo">
              <img src={logo} alt="Logo" />
            </figure>
            <nav>
              <ul>
                <li>home</li>
                <li>about us</li>
                <li>explore</li>
                <li>blog</li>
                <li>Contact us</li>
              </ul>
            </nav>
          </div>
          <div>
            <ul className="user-icons">
              <li><CiSearch /></li>
              <li><CiHeart /></li>
              <li><FiShoppingBag /></li>
            </ul>
            <div className="buttons">
              <button className="upgrade-button">
                <img src={crownIcon} alt="Crown Icon" />
                <span>Upgrade Pro</span>
              </button>
              <button>Sign in</button>
            </div>
          </div>
        </div>
      </header>
      <section className="hero-section">
        <div className="container">
          <div></div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg'/>
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg'/>
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg'/>
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg'/>
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg'/>
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg'/>
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg'/>
              </div>
              <div className="slider-item">
                <img src='https://d1zoo736173x95.cloudfront.net/uploads/images/sliders/thumb/slider_1669973521_850x750.jpg'/>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
