require('../css/index.pcss');

//this is just to test color scheme switching
window.addEventListener('keypress', event => {
	document.body.classList.toggle('inverted')
});
