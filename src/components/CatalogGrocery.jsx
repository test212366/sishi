import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import fsOne from '../img/s1.jpg'
import fsTwo from '../img/s2.jpg'
import fsTree from '../img/s3.png'
import fsFour from '../img/s4.png'


import fsFive from '../img/s5.png'
import fsSix from '../img/s6.png'
import fsSeven from '../img/s7.png'
import fsEight from '../img/s8.png'

import fsNine from '../img/s9.png'
import fsTen from '../img/s10.png'
import fsEl from '../img/s11.png'
import fsTw from '../img/s12.png'

import fsTrt from '../img/s13.png'
import fsFrt from '../img/s14.png'
import fsFit from '../img/s15.png'
import fsSixt from '../img/s16.png'

import fsSevT from '../img/s17.png'
import fsEigthT from '../img/s18.png'
import fsNineT from '../img/s19.png'
import fsTT from '../img/s20.png'

import fsToT from '../img/s21.png'
import fsTtT from '../img/s22.png'
import fsTtrT from '../img/s23.png'
import fsTFoT from '../img/s24.png'
 
import fsTFT from '../img/s25.png'
import fsTsT from '../img/s26.png'
import fsTseT from '../img/s27.png'
import fsTEIT from '../img/s28.png'

import fff2 from '../img/s29.png'
import fff3 from '../img/s31.png'

import fff from '../img/s30.png'



import { useRef, useState } from 'react';

import treeOne from '../img/2026102 1.svg'
import treeTwo from '../img/701968 1.svg'
import treeTree from '../img/990857.svg'
import { Autoplay } from 'swiper';
import ButtonSliderPrev from './ButtonSliderPrev';
import ButtonSliderNext from './ButtonSliderNext';
import GroceryNav from './GroceryNav';


const CatalogGrocery = () => {
	const [catOpen, setCatOpen] = useState(false),
		slider = useRef(null),
		[realIndex, setRealIndex] = useState(0)


	return (
		<section className="grocery">	
			<img className='groceryTreeOne' src={treeOne} alt="groceryThreeOne" />
			<img className='groceryTreeTwo' src={treeTwo} alt="groceryThreeOne" />

			<GroceryNav slider={slider} realIndex={realIndex} />


			<section className="second__slider">
				<Swiper  ref={slider}
			
					slidesPerView={ 2}
					initialSlide={4}
					// loop
					breakpoints={{
						300: {
					 
								slidesPerView: 2,
								centeredSlides: false,
								slidesPerGroup: 2,
	
				 
						},
						395: {
							slidesPerView: 2.2,
							centeredSlides: false,
							slidesPerGroup: 2,

						},
						442: {
							slidesPerView: 2.5,
							centeredSlides: false,
							slidesPerGroup: 2,
						},
						540: {
							slidesPerView: 3
			 
						},
						560: {
							slidesPerView: 3.2

						},
						640: {
							slidesPerView: 3

						},
						670: {
							slidesPerView: 3.2
						},
						750: {
							slidesPerView: 3
						},
						820: {
							slidesPerView: 3.2
						},
						900: {
							slidesPerView: 3.6
						},
						1050: {
							slidesPerView: 4
						},
						1160: {
							slidesPerView: 3.5
						},
						1340: {
							slidesPerView: 4
						},
						1780: {
							 slidesPerView: 5.2,

						}
					}}
					slidesPerGroup={3}
					modules={[
						Autoplay,
					]}
					onSlideChange={(e) => setRealIndex(e.realIndex) }
					speed={1500}
					centeredSlides
					className='slider__init'
					onSwiper={(swiper) => console.log(swiper)}
				>
	 
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsOne} alt="item" />
					

							<p className='slide__grocery-title'>Калифорния жареная с криветками</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTree} alt="item" />
					

							<p className='slide__grocery-title'>Жареные Маки-Роллы с Крабом</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTwo} alt="item" />
					

							<p className='slide__grocery-title'>Жареные Маки-Роллы с Креветками</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsFour} alt="item" />
					

							<p className='slide__grocery-title'>Жареные Маки-Роллы с Креветками</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsFive} alt="item" />
					

							<p className='slide__grocery-title'>Жареные Маки-Роллы с Лососем</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsSix} alt="item" />
					

							<p className='slide__grocery-title'>Жареные Маки-Роллы с Угрём</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsSeven} alt="item" />
					

							<p className='slide__grocery-title'>Запеченые Маки-Роллы с Угрём</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsEight} alt="item" />
					

							<p className='slide__grocery-title'>Запеченые Маки-Роллы с Крабом</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsNine} alt="item" />
					

							<p className='slide__grocery-title'>Запеченые Маки-Роллы с Лососем</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTen} alt="item" />
					

							<p className='slide__grocery-title'>Калифорния с Лососем и Сыром</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
					</SwiperSlide>  

					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsEl} alt="item" />
					

							<p className='slide__grocery-title'>Калифорния жареная</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTw} alt="item" />
					

							<p className='slide__grocery-title'>Запеченые с Креветкой</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
					</SwiperSlide> 
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTrt} alt="item" />
					

							<p className='slide__grocery-title'>Калифорния с Крабом</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsFrt} alt="item" />
					

							<p className='slide__grocery-title'>Маки с Авокадо</p>

							<div className='info__slide'>
								<p>150 р.</p>
					 
							</div>
						
						</div>
					</SwiperSlide> 
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsSixt} alt="item" />
					

							<p className='slide__grocery-title'>Маки с крабом</p>

							<div className='info__slide'>
								<p>150 р.</p>
						 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsFit} alt="item" />
					

							<p className='slide__grocery-title'>Калифорния с Креветками</p>

							<div className='info__slide'>
								<p>150 р.</p>
					 
							</div>
						
						</div>
					</SwiperSlide> 

					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsSevT} alt="item" />
					

							<p className='slide__grocery-title'>Маки с Угрём</p>

							<div className='info__slide'>
								<p>150 р.</p>
						 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsEigthT} alt="item" />
					

							<p className='slide__grocery-title'>Маки с Лососем</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
					</SwiperSlide> 
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsNineT} alt="item" />
					

							<p className='slide__grocery-title'>Маки с Огурцом</p>

							<div className='info__slide'>
								<p>150 р.</p>
						 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTT} alt="item" />
					

							<p className='slide__grocery-title'>Маки с Креветкой</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
					</SwiperSlide> 
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fff} alt="item" />
					

							<p className='slide__grocery-title'>Маки Унаги Кани</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fff2} alt="item" />
					

							<p className='slide__grocery-title'>Филадельфия с Огурцом</p>

							<div className='info__slide'>
								<p>150 р.</p>
						 
							</div>
						
						</div>
					</SwiperSlide> 

					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fff3} alt="item" />
					

							<p className='slide__grocery-title'>Филадельфия с Икрой</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTFoT} alt="item" />
					

							<p className='slide__grocery-title'>Маки Спайси с Лососем</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
					</SwiperSlide> 
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTFT} alt="item" />
					

							<p className='slide__grocery-title'>Филадельфия классическая</p>

							<div className='info__slide'>
								<p>150 р.</p>
						 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTsT} alt="item" />
					

							<p className='slide__grocery-title'>Маки Спайси с Угрём</p>

							<div className='info__slide'>
								<p>150 р.</p>
								 
							</div>
						
						</div>
					</SwiperSlide> 
					<SwiperSlide>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTseT} alt="item" />
					

							<p className='slide__grocery-title'>Филадельфия Жареная</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
						<div className="slide__grocery-item">
							<div className="overlay"></div>		
							<img src={fsTEIT} alt="item" />
					

							<p className='slide__grocery-title'>Филадельфия с Крабом</p>

							<div className='info__slide'>
								<p>150 р.</p>
							 
							</div>
						
						</div>
					</SwiperSlide>

 


				</Swiper>

				<ButtonSliderPrev second={true} slider={slider} />
				<ButtonSliderNext second={true} slider={slider} />
	 
			</section>
 
 
			 
			
		</section>
	)
}
export default CatalogGrocery