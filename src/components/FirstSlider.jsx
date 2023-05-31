// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import fsOne from '../img/f1.png'
import fsTwo from '../img/f2.png'
import fsThree from '../img/f3.png'
import fsFour from '../img/f4.png'
import fsFive from '../img/f5.png'
import fsSix from '../img/f6.png'
import ButtonSliderNext from './ButtonSliderNext';
import ButtonSliderPrev from './ButtonSliderPrev';
import { useEffect, useRef, useState } from 'react';
import {
 
	Autoplay,
 
} from 'swiper';
import NavSlider from './NavSlider';

const FirstSlider = () => {
	const slider = useRef(null),
		[indexSlider, setIndexSlider] = useState(0)

 
	// useEffect(() => {
		
	// 	if(slider.current.swiper.realIndex === 0 ) {
	// 		slider.current.swiper.slideTo(1)
	// 	}
	// }, [slider])


	return (
 

		<>
				<section className="first__slider-roll">
			
			<Slider ref={slider} className='fist_slider-target'
			 
				slidesToShow={1}
				infinite
				centerMode
				dots
				nextArrow={<ButtonSliderNext />}
				prevArrow={<ButtonSliderPrev />}
				centerPadding={'24%'}
				responsive={[
					{
					  breakpoint: 530,
					  settings: {
						centerPadding: '15%'
					  }
					},
					{
						breakpoint: 390,
						settings: {
						 centerPadding: '12%'
						}
					 },
					 {
						breakpoint: 1600,
						settings: {
							centerPadding: '20%'
						}
					 }
				 
				 ]
			  }
  
				speed={1000}
					autoplay  
				initialSlide={1}
				onSlideChange={(e) => setIndexSlider(e.realIndex) }
				onSwiper={(swiper) => console.log(swiper)}
			>
				<div className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
					
						<img   src={fsOne} alt="firstI" />
					</div>
				</div>
				<div className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
					
						<img src={fsTwo} alt="firstI" />
					</div>
				</div>
				<div className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
						<img src={fsSix} alt="firstI" />
					</div>
				</div>
				<div className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
						<img src={fsFour} alt="firstI" />
					</div>
				 
				</div>
				<div className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
						<img src={fsFive} alt="firstI" />
					</div>
				</div>
				<div className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
						<img src={fsThree} alt="firstI" />
					</div>
				</div>
			</Slider>
	 
			 
	 

				</section>
			 
		</>
	)
}
export default FirstSlider