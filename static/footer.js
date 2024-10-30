const footerList = document.querySelectorAll("footer article");


for(let i = 0; i < footerList.length; i++){
	footerList[i].addEventListener('click', function() {
		footerList[i].classList.toggle('focus');
	});
}