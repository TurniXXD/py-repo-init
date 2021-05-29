import './../css/components/navbar.css';

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
<div class="logo">
	<a href="index.html">
		<div id="nav-logo"></div>
	</a>
</div>
<div class="nav-set">
	<div class="nav-links">
		<ul>
			<li class="nav-li">
				<a href="/index.html">Úvod</a>
			</li>
		</ul>
	</div>
</div>
<div class="nav-actions">
	<a href="./contact.html" class="fancy-btn-trans" id="fancy-nav-btn">Kontakt</a>
</div>
		`;
	}
}

customElements.define('navbar-wrapper', Navbar);
