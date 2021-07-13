//------(бургер)-----------
window.onload = function () {
	document.querySelector('.js-header__burger').onclick = function () {
		const html = document.querySelector('html');
		const body = document.querySelector('body');
		const burger = document.querySelector('.js-header__burger');
		const nav = document.querySelector('.js-header__nav');
		html.classList.toggle('lock');
		body.classList.toggle('lock');
		burger.classList.toggle('active');
		nav.classList.toggle('active');
	}
};
// ---------------


//------(Плавные якоря)--------------------------------
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		
		const blockID = anchor.getAttribute('href').substr(1);

		if (blockID !== '') {
			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}

	})
}
// ---------------

//-------(Валидация e-mail)------------------------------
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

document.getElementById('bottom__button-text').onclick = function(e) {
	e.preventDefault();
	const email = document.getElementById("bottom__mail-2");

	if (validateEmail(email.value)) {
		email.classList.remove('error');
		email.classList.add('ok');
	} else {
		email.classList.remove('ok');
		email.classList.add('error');
	}
	
	return false;
}
// ------------------
