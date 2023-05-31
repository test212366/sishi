import { useRef } from 'react';
import inst from '../img/inst.svg'
const Header = () => {

	const menuBtn = useRef(null) //menu-btn
	const mobileMenu = useRef(null) //mobile-menu
 

	// Функция для открытия меню бургера
	function openMenu() {
		mobileMenu.current.classList.add('active');
		menuBtn.current.classList.add('active');
	}
	const onScrollDown = () => {
		window.scrollTo({
			top: 750,
			behavior: "smooth"
	  })
	  if(mobileMenu.current.classList.contains('active')) {
		closeMenu()
	  }
	}
 
	// Функция для закрытия меню бургера
	function closeMenu() {
		mobileMenu.current.classList.remove('active');
		menuBtn.current.classList.remove('active')
	}

	// Добавляем обработчик события для кнопки меню бургера
	const onClickBurg = () => {
		if (mobileMenu.current.classList.contains('active')) {
			closeMenu();
		} else {
			openMenu();
		}
	}
 

	// Добавляем обработчик события для каждого элемента списка меню
 




	return (
		<>
			<header class="header__top">
				<div class="header__logo" id="header__logo">
					<a href="https://instagram.com/midori_eyva?igshid=MzRlODBiNWFlZA==" class="inst" >
						<img src={inst} height={20} width={20} alt="inst" class="inst__img" />
						<div class="inst__title">
								MIDORI
						</div>
					</a>
				</div>
				<div class="header__inner">
						<button class="header__phone header__item">Заказать</button>
						<button class="header__phone header__item" onClick={onScrollDown}>Меню</button>
						<button class="header__btn header__item">Ваши отзывы</button>
				</div>
				
				<button class="menu-btn" ref={menuBtn} onClick={onClickBurg}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</button>
			 

		</header>
		<div class="mobile-menu" ref={mobileMenu}>
						
						<div class="mobile-menu__list">
							<button class="mobile-menu__item"  onClick={closeMenu}>Заказать</button>
							<button class="mobile-menu__item"  onClick={closeMenu} onClick={onScrollDown}>Меню</button>
							 <button class="mobile-menu__item"  onClick={closeMenu}>Ваши отзывы</button> 
						</div>
					</div>
		</>
	 
		
		


 
	)
}


export default Header