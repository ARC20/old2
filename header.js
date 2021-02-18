const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
	selectElement('header').classList.toggle('active');
	selectElement('body').classList.toggle('lock');
	document.getElementById("BI").classList.toggle('active');
});

