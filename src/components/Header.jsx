const Header = () => {
	return (
		<header class="header">
			<section class="header__top">
				<div class="header__inner">
					<button class="header__phone">+89188244115</button>
					<div class="header__logo" id="header__logo">
							<a href="https://instagram.com/midori_eyva?igshid=MzRlODBiNWFlZA==" class="inst" >
								<img src="" alt="inst" class="inst__img" />
								<div class="inst__title">
									MIDORI
								</div>
							</a>
					</div>
					<button class="header__btn">связаться с нами</button>
					
				</div>
			</section>
			<section class="overlay">
				<div class="modal">
					<div class="modal__title">
							Наша почта:
					</div>
					<button class="modal__close">
							✖
					</button>
					<div class="modal__info">
						<input type="text" name="text" class="modal__info-1" placeholder="ваше сообщение" />
					</div>
					<input type="submit" class="modal__submit" value="Отправить" />

				</div>
				
				
			</section>
 	 </header>
	)
}


export default Header