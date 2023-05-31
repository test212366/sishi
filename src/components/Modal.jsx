const Modal = () => {
	return (

		<div class="overlay">
		<div class="modal">
			 <div class="modal__inner">
				  <div class="modal__title">
						будем рады вашему отзыву
				  </div>
				  <button class="modal__close">
						✖
				  </button>
				  <div class="modal__info">
						<input type="text" name="text" class="modal__info-1" placeholder="ваш отзыв" />
				  </div>
				  <input type="submit" class="modal__submit" value="Отправить"/>

			 </div>
		</div>
		
  </div>
	)
}
export default Modal