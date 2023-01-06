const headerEl = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if (scrollY > 20){
        headerEl.classList.add('header-bg')
        document.body.classList.add('scroll')
    } else{
        headerEl.classList.remove('header-bg')
        document.body.classList.remove('scroll')
    }
})