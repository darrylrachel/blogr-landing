const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function() {
	if(header.classList.contains('open')) {
		header.classList.remove('open');
		// overlay.classList.remove('fade-in');
		// overlay.classList.add('fade-out');
	} else {
		header.classList.add('open');
		// overlay.classList.add('fade-in');
		// overlay.classList.remove('fade-out');
	}
});

// mrAuto.addEventListener('click', function() {
// 	console.log('remove mr-auto');

// 	if(navigation.classList.contains('mr-auto')) {
// 		navigation.classList.remove('mr-auto');
// 	} else {
// 		navigation.classList.add('mr-auto');
// 	}
// });


// btnHamburger.addEventListener('click', function() {
// 	console.log('click hamburger');

// 	if(btnHamburger.classList.contains('open')) {
// 		btnHamburger.classList.remove('open');
// 	} else {
// 		btnHamburger.classList.add('open')
// 	}
// });