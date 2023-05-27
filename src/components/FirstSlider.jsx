// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import fsOne from '../img/fs1.png'
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
			
			<Swiper ref={slider} className='fist_slider-target'
				spaceBetween={38}
				slidesPerView={ 1.5}
				breakpoints={{
					330: {
						slidesPerView: 1.6
					},
					370: {
						slidesPerView: 1.5,
					},
					400: {
						slidesPerView: 1.6,

					},
					530: {
						slidesPerView: 1.8,

					},
					880: {
						slidesPerView: 1.7,
					},
					980: {
						slidesPerView: 1.9,
					},
					1390: {	
						slidesPerView: 2.1,
					},
					1510: {
						slidesPerView: 1.9,
						 
					},
					1630: {
						slidesPerView: 2.05,
						 
				  	},
					1860: {
						 slidesPerView: 2.35,
						  
					}
				}}
				
	 	  	 	centeredSlides
			 		modules={[
						Autoplay,
					]}
				speed={1000}
					autoplay  
				initialSlide={1}
				onSlideChange={(e) => setIndexSlider(e.realIndex) }
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
					
						<img src={fsOne} alt="firstI" />
					</div>
				</SwiperSlide>
				<SwiperSlide className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
					
						<img src={fsOne} alt="firstI" />
					</div>
				</SwiperSlide>
				<SwiperSlide className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
						<img src={fsOne} alt="firstI" />
					</div>
				</SwiperSlide>
				<SwiperSlide className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
						<img src={fsOne} alt="firstI" />
					</div>
				 
				</SwiperSlide>
				<SwiperSlide className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
						<img src={fsOne} alt="firstI" />
					</div>
				</SwiperSlide>
				<SwiperSlide className='first__slider-slide'>
					<div className="wrapper-slide">
						<div className="overlay__first-slider"></div>	
						<h4 className='first__title-slider'>Только самые качественные <br/> продукты</h4>
						<p className='first__desc-slider'>Доступные цены на каждый день</p>
						<img src={fsOne} alt="firstI" />
					</div>
				</SwiperSlide>
			</Swiper>
			<ButtonSliderPrev slider={slider} />
			<ButtonSliderNext slider={slider} />
	 

				</section>
				<NavSlider slider={slider} index={indexSlider}/>
		</>
	)
}
export default FirstSlider