document.addEventListener('DOMContentLoaded', function () {
	const NAV = document.querySelector('.header');
	const MENU_BUTTON = NAV.querySelector('.menu__burger');
	const LINK = NAV.querySelectorAll('.menu__link');

	MENU_BUTTON.addEventListener('click', function () {
		NAV.classList.toggle('header_active');
		document.body.classList.toggle('no-scroll');
	});
	NAV.querySelectorAll('.menu__link').forEach(item => {
		item.addEventListener('click', function () {
			NAV.classList.remove('header_active');
			document.body.classList.remove('no-scroll');
		})
	})
});
