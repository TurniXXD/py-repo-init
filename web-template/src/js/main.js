// CSS
import 'oxn.css'
import 'normalize.css';
import 'bulma/css/bulma.min.css';
import '@css/main.css';
import 'typicons.font/src/font/typicons.css';

// COMPONENTS
import '@components/navbar';
import '@components/footer';

//JS
const preloader = document.getElementById('preloader')

window.onload = function () {
	// ✨ aestetic title for SEO ✨
	if (document.title === 'Title-before-loading') document.title = 'Title-after-loading';
	// yeet out preloader
	preloader.style.display = 'none';
	preloader.classList.remove('loading')

};