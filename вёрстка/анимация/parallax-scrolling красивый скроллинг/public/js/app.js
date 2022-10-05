console.log(`i am here`);

// window.addEventListener(`scroll`, (e) => {
//     // console.log(this)
//     // перезаписываем стили для тега body. В них мы прописываем переменную --scrollTop, которую сможем использовать потом в стилях transform: translate
//   document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
// })

// функция для эффекта параллакса.
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})

// регистрируем в gsap плагины ScrollTrigger и ScrollSmoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


ScrollSmoother.create({
    wrapper: '.wrapper', // назначаем класс wrapper для враппера
    content: '.content',
})


