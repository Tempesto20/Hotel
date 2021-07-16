import $ from '../libs/jquery.min.js';



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

// -------(Валидация e-mail)------------------------------
// function validateEmail(email) {
// 	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(email);
// }

// document.getElementById('bottom__button-text').onclick = function(e) {
// 	e.preventDefault();
// 	const email = document.getElementById("bottom__mail-2");

// 	if (validateEmail(email.value)) {
// 		email.classList.remove('error');
// 		email.classList.add('ok');
// 	} else {
// 		email.classList.remove('ok');
// 		email.classList.add('error');
// 	}
	
// 	return false;
// }
// ------------------


//----------(модальное окно)---------------------------

// var modal = document.getElementById('myModal');


// var btn = document.getElementById("myBtn");


// var span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
//     modal.style.display = "block";
// }


// span.onclick = function() {
//     modal.style.display = "none";
// }


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

//-----------------------------------------------------


//------------(календарь)--------------------------
setTimeout(function(){
	var calIn = jQuery( "#date-in" ).datepicker({ disabled: false, firstDay: 0, altField: "#us-date-in", altFormat: 'mm/dd/yy', minDate:0, onSelect: checkCalendarDates, dateFormat: 'mm/dd/yy'});
			calIn.datepicker('setDate', new Date());
			
			var calOut = jQuery( "#date-out" ).datepicker({ disabled: false, firstDay: 0, altField: "#us-date-out", altFormat: 'mm/dd/yy', minDate:1, onSelect: checkCalendarDates, dateFormat: 'mm/dd/yy'});
			calOut.datepicker('setDate', new Date());
	
	function checkCalendarDates(date, datePickerO)
			{
				var dateIn = calIn.datepicker("getDate");
				var dateOut = calOut.datepicker("getDate");
				
				if(dateIn >= dateOut && calIn.attr("id") === datePickerO.id)
					calOut.datepicker('setDate', new Date( dateIn.getTime() + (24 * 60 * 60 * 1000) ));
				
				if(dateOut <= dateIn && calOut.attr("id") === datePickerO.id)
					calIn.datepicker('setDate', new Date( dateOut.getTime() - (24 * 60 * 60 * 1000) ));
			}
	},9);    
	
	jQuery("#adults").spinner({
			max : 10,
			min : 1	});
	jQuery("#children").spinner({
		 max : 10,
		 min : 0	});


		 //-------------------------------------------