const ButtonSliderPrev = ({onClick, second }) => {

 
 

	return (
		<button className="buttonSlider  "   onClick={onClick}>
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M27.845 32.155L15.69 20L27.845 7.84501L25.4883 5.48834L10.9767 20L25.4883 34.5117L27.845 32.155Z" fill={second ? '#000' : "#ADADAD" }/>   
			</svg>
		</button>
	)
}
export default ButtonSliderPrev