const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const scrollUpBtn = document.querySelector('.scroll-up')
const scrollUpIcon = document.querySelector('.fa-circle-up')
const allRoomTitles = document.querySelectorAll('.rooms__title')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	navBtnBars.classList.remove('black-bars-color')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}
const handleObserver = () => {
	const currentSection = window.scrollY
	const otherSection = window.innerHeight
	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection - 60) {
			navBtnBars.classList.remove('black-bars-color')
		}

		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + otherSection - 40) {
			scrollUpBtn.classList.add('scroll-up-color')
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + otherSection - 40
		) {
			scrollUpBtn.classList.remove('scroll-up-color')
		}
	})
	// allRoomTitles.forEach(title => {
	// 	if (title.offsetTop <= otherSection * 0.5) {
	// 		title.classList.add('rooms__title--underline')
	// 	}
	// })
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
scrollUpBtn.addEventListener('mouseover', event => {
	scrollUpIcon.classList.add('fa-bounce')
})
scrollUpBtn.addEventListener('mouseout', event => {
	scrollUpIcon.classList.remove('fa-bounce')
})
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
