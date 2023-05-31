const NavSlider = ({slider, index}) => {
	 
 
	return (

		<section className="nav__slider">
			<div className={`navSlider-item ${index === 0 ? 'activeDot' : ""}`} onClick={() => slider.current.swiper.slideTo(0)}></div>
			<div className={`navSlider-item ${index === 1 ? 'activeDot' : ""}`} onClick={() => slider.current.swiper.slideTo(1)}></div>
			<div className={`navSlider-item ${index === 2 ? 'activeDot' : ""}`} onClick={() => slider.current.swiper.slideTo(2)}></div>
			<div className={`navSlider-item ${index === 3 ? 'activeDot' : ""}`} onClick={() => slider.current.swiper.slideTo(3)}></div>
			<div className={`navSlider-item ${index === 4 ? 'activeDot' : ""}`} onClick={() => slider.current.swiper.slideTo(4)}></div>
			<div className={`navSlider-item ${index === 5 ? 'activeDot' : ""}`} onClick={() => slider.current.swiper.slideTo(5)}></div>
	 

		</section>
	)
}
export default NavSlider