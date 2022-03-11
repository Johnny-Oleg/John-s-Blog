const $body = document.body;
const $headerTop = document.querySelector('.header__top');
const $menu = document.querySelector('.mobile__menu');
const $list = document.querySelector('.menu')

$headerTop.addEventListener('click', () => {
	$menu.classList.toggle('active');
	$list.classList.toggle('active');
	$body.classList.toggle('lock');
})