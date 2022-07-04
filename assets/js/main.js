const moreBtn = document.querySelector('.more')
const closeBtn = document.querySelector('.btn')
const modal = document.querySelector('.main__modal')

const footer = document.querySelector('.footer')
const mainBlock = document.querySelector('.main__block')


moreBtn.addEventListener('click', () => {
	modal.classList.add('show')
	footer.classList.add('black')
	mainBlock.classList.add('black')
})

closeBtn.addEventListener('click', () => {
	modal.classList.remove('show')
	footer.classList.remove('black')
	mainBlock.classList.remove('black')
})