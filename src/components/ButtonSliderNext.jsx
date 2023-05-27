const ButtonSliderNext = ({slider, second}) => {
	return (
		<button className="buttonSlider next-button" onClick={() => slider.current.swiper.slideNext(1000)}>
			<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.155 7.84499L24.31 20L12.155 32.155L14.5117 34.5117L29.0234 20L14.5117 5.48833L12.155 7.84499Z" fill={second ? '#000' : "#ADADAD" }/>
			</svg>

		</button>
	)
}
export default ButtonSliderNext