import inst from '../img/inst.jpeg'


const Footer = () => {
	return (
		<>
		<footer class="footer">
        <section class="footer__inner">
            <div class="footer__item">
                <a href='#' class="footer__inst lounge">
                    <img src={inst} alt="inst-lounge" class="footer__inst-img" />
                    <div class="footer__title">
                        eyva_lounge
                    </div>
                </a>
                <a href='#' class="footer__inst midori">
                    <img  src={inst} alt="inst-midori" class="footer__inst-img" />
                    <div class="footer__title">
                        eyva_midori
                    </div>
                </a>
                <a href='#' class="footer__inst rest">
                    <img src={inst} alt="inst-rest" class="footer__inst-img" />
                    <div class="footer__title">
                        eyva_rest
                    </div>
                </a>
            </div>
            <p class="footer__item name">Все права защищены © 2023</p>
        </section>

    </footer>
		</>
	)
}
export default Footer