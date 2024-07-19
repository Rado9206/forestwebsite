const navMobile = document.querySelector('.nav-mobile')
const burgerBtn = document.querySelector('.hamburger')
const barsIcon = document.querySelector('.burger-icon')
const xIcon = document.querySelector('.cross-icon')
const allNavLinks = document.querySelectorAll('.nav-mobile')

const handleNav = () => {
	setTimeout(() => {
		barsIcon.classList.toggle('hide')
	}, 400)

	setTimeout(() => {
		xIcon.classList.toggle('hide')
	}, 400)
	navMobile.classList.toggle('nav-mobile--active')

	allNavLinks.forEach(item => {
		item.addEventListener('click', () => {
			xIcon.classList.add('hide')
			barsIcon.classList.remove('hide')
			navMobile.classList.remove('nav-mobile--active')
		})
	})
}

burgerBtn.addEventListener('click', handleNav)
