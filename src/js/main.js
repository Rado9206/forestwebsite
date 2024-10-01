const sentMsgBtn = document.querySelector('.contact__form-btn button-basic-style')
const msgStatus = document.querySelector('.contact__msg-status')
const footerYear = document.querySelector('.footer__year')

const checkMailStatus = () => {
	if (document.location.search === '?mail_status=sent') {
		msgStatus.classList.add('success')
		msgStatus.textContent = 'Wiadomość została wysłana!'

		setTimeout(() => {
			msgStatus.classList.remove('success')
		}, 3000)
	}
	if (document.location.search === '?mail_status=error') {
		msgStatus.classList.add('error')
		msgStatus.textContent = 'Wiadomość nie została wysłana!'

		setTimeout(() => {
			msgStatus.classList.remove('error')
		}, 3000)
	}
}

//można też to zrobić z URLSearchParams()

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

sentMsgBtn.addEventListener('click', checkMailStatus)
