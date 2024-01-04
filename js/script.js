let menu = document.querySelector('i');

menu.onclick = () =>{
	menu.classList.toggle('bi-x')
};
// navbar-after-scroll
window.addEventListener('scroll', function() {
	let color = document.querySelector('.nav');
	let windowPosition = window.scrollY > 0
	color.classList.toggle('scrolling-active', windowPosition);
});
// end