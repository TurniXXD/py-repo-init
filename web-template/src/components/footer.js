import '@css/components/footer.css';

class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<div class="footer-content">
			<div class="socials">
			<a href="#" target="_blank" rel="noopener">
				<span class="typcn typcn-social-facebook-circular"></span>
			</a>
			<a href="#" target="_blank" rel="noopener">
				<span class="typcn typcn-social-instagram-circular"></span>
			</a>
			<a href="#" target="_blank" rel="noopener">
				<span class="typcn typcn-social-twitter-circular"></span>
			</a>
		</div>
		<div class="nobody-cares">
			<a href="/faq.html" class="footer-a">Nejčastější dotazy</a>
			<a href="/privacy.html" class="footer-a">Ochrana osobních údajů</a>
			<a href="/terms-and-conditions.html" class="footer-a">Obchodní podmínky</a>
		</div>
	</div>
		`;
	}
}

customElements.define('footer-wrapper', Footer);
