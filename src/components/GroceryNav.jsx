const GroceryNav = ({realIndex, slider}) => {
 
	return (	
		<section className="grocery__nav-second-slider">
			<button onClick={() => slider.current.swiper.slideTo(0)} className={`${realIndex === 0 ? 'activeButton' : ''}`}>
				Жареные Маки-Роллы
			</button>
			<button onClick={() => slider.current.swiper.slideTo(3)} className={`${realIndex === 3 || window.innerWidth < 450 &&  realIndex === 2  ? 'activeButton' : ''}`}>
				Маки-Роллы
			</button>
			<button onClick={() => slider.current.swiper.slideTo(6)} className={`${realIndex === 6 || window.innerWidth < 450 && realIndex === 4 ? 'activeButton' : ''}`}>
				Холодные Маки-Роллы
			</button>
			<button onClick={() => slider.current.swiper.slideTo(9)} className={`${realIndex === 9 || window.innerWidth < 450 &&  realIndex === 6 ? 'activeButton' : ''}`}>
				Роллы
			</button>
			<button onClick={() => slider.current.swiper.slideTo(12)} className={`${realIndex === 12 || window.innerWidth < 450 &&  realIndex === 8 ? 'activeButton' : ''}`}>
				Еще Раздел
			</button>
		</section>
	)
}
export default GroceryNav