function shownavFunction() {

const selectElement = (element) => document.querySelector(element);

	selectElement('#ac-localnav').classList.toggle('shownav');
	selectElement('#ac-ln-curtain').classList.toggle('shownav');

selectElement('#ac-ln-curtain').addEventListener('click', () => {
	selectElement('#ac-localnav').classList.remove('shownav');
	selectElement('#ac-ln-curtain').classList.remove('shownav');

});
};

function closenavFunction() {
const selectElement = (element) => document.querySelector(element);

	selectElement('#ac-localnav').classList.remove('shownav');
	selectElement('#ac-ln-curtain').classList.remove('shownav');
};

window.onscroll = function() {xFunction()};
function xFunction() {

  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    selectElement('#ac-localnav').classList.remove('shownav');
	selectElement('#ac-ln-curtain').classList.remove('shownav');
  }
};
