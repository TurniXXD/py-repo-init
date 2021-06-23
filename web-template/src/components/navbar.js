import '@css/components/navbar.css';
const logo = require('@img/cloud.png');

class Navbar extends HTMLElement {
	constructor() {
		super();

		// ...Event listeners etc..
	}

	// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
	// https://youtu.be/otCpCn0l4Wo?t=17

	// connectedCallback: Invoked each time the custom element is
	// appended into a document-connected element.
	//This will happen each time the node is moved,
	//and may happen before the element's contents have been fully parsed.

	connectedCallback() {
		this.innerHTML = `
		<div id="navbar">
			<div class="logo">
				<a href="/index.html">
					<div id="nav-logo"></div>
				</a>
			</div>
			<div class="nav-set">
				<div class="nav-links">
					<div>
						<a href="/index.html">
							<span>Úvod</span>
						</a>
					</div>
				</div>
			</div>
			<div class="nav-actions">
				<div>
					<a href="/index.html">
						<span>Button1</span>
					</a>
				</div>
				<div>
				<a href="/index.html">
					<span>Button2</span>
				</a>
			</div>
			</div>
		</div>
		<div id="navbar-mobile">
			<div class="nav-link"></div>
			<a href="/index.html" class="nav-link">
				<span>Úvod</span>
			</a>
			<a href="/about.html" class="nav-link">
				<span>O nás</span>
			</a>
			<a href="/services.html" class="nav-link">
				<span>Služby</span>
			</a>
			<a href="/partnership.html" class="nav-link">
				<span>Partnerství</span>
			</a>
			<a href="/contact.html" class="nav-link">
				<span>Kontakt</span>
			</a>
			<div class="nav-link"></div>
			<div class="nav-link">
				<a href="/console.html" class="fancy-btn-trans">
					Console
				</a>
				<a href="https://www.console.orexin.cz/login" class="fancy-btn-trans">
					Login
				</a>
			</div>
			<div class="nav-link"></div>
			<div class="row">
				<div class="nav-mobile-logo-container">
					<a href="/index.html">
						<div id="nav-mobile-logo">Logo</div>
						<span>Name</span>
					</a>
				</div>
				<div id="menu" class="not-active"></div>
			</div>
		</div>
				`;

		// Nav
		const nav = document.getElementById('navbar');
		const navLogo = document.querySelector('#nav-logo');

		navLogo.innerHTML = logo;

		// Mobile nav
		const menu = document.getElementById('menu')

		menu.addEventListener('click', () => {
			const links = document.getElementsByClassName("nav-link");
			const container = document.getElementById('navbar-mobile')

			if(menu.className == "not-active")
				menu.className = "active"
			else
				menu.className = "not-active"
		})
	}
}

customElements.define('navbar-wrapper', Navbar);