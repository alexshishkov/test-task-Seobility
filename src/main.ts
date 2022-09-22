import './style.sass';

//carusel strat

const buttonRight = document.querySelectorAll('.button__right')
const buttonLeft = document.querySelectorAll('.button__left')

buttonRight.forEach((el) => {
	el.addEventListener('click', () => {
		createScrollRight(); сreateAnimationClotnes()
	});
})

buttonLeft.forEach((el) => {
	el.addEventListener('click', createScrollLeft);
})

function createScrollRight() {
	window.scrollTo(
		{
			left: window.screen.width,
			behavior: 'smooth'
		}
	)
	document.body.classList.add('clotnes__animation__body')
	document.body.classList.remove('amkodor__animation_body')
}

function createScrollLeft() {
	window.scrollTo(
		{
			left: 0,
			behavior: 'smooth'
		}
	)
	document.body.classList.add('amkodor__animation_body')
	document.body.classList.remove('clotnes__animation__body')
}

// carusel end

// animation text block start

const amkodorDiscriptionBlock = document.querySelector('.amkodor__content-description') as HTMLElement
const clotnesDiscriptionBlock = document.querySelector('.clotnes__content-description') as HTMLElement

window.onload = сreateAnimationAmcodor;

function сreateAnimationAmcodor() {
	amkodorDiscriptionBlock.classList.add('active')
	amkodorDiscriptionBlock.classList.remove('not_active')
}

function сreateAnimationClotnes() {
	clotnesDiscriptionBlock.classList.add('active')
	clotnesDiscriptionBlock.classList.remove('not_active')
}

// animation text block end

// paralacs start

const balls = document.querySelectorAll('.mouse-parallax');
balls.forEach((el) => {
	window.addEventListener('mousemove', function (e) {
		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;
		(el as HTMLElement).style.transform = 'translate(+' + x * 50 + '%, +' + y * 50 + '%)';
	})
})


// paralacs end