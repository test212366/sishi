import inst from '../img/inst-footer.svg'


const Footer = () => {
	return (
		<footer class="footer">
        <div class="footer__inner">
            <div class="footer__item">
                <a href="https://instagram.com/eyva_lounge?igshid=MzRlODBiNWFlZA=="  class="footer__inst lounge">
                    <img src={inst} alt="inst-lounge" class="footer__inst-img" />
                    <div class="footer__title">
                        eyva lounge
                    </div>
                </a>
                <a href="https://instagram.com/midori_eyva?igshid=MzRlODBiNWFlZA==" class="footer__inst midori">
                    <img src={inst} alt="inst-lounge" class="footer__inst-img" />
                    <div class="footer__title">
                        eyva midori
                    </div>
                </a>
                <a href="https://instagram.com/stories/eyva_rest/3112483133626656523?igshid=MTc4MmM1YmI2Ng==" class="footer__inst rest">
                    <img src={inst} alt="inst-lounge" class="footer__inst-img" />
                    <div class="footer__title">
                        eyva rest
                    </div>
                </a>
            </div>
            <footer class="footer__item name">Все права защищены © 2023</footer>
        </div>

    </footer>
	)
}
export default Footer