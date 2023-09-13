function darkMode () {
  const btnSwitch = document.querySelector('.switch');
  const header = document.querySelector('.header');
  const productsTitle = document.querySelector('.products__title');
  const footer = document.querySelector('.footer');
  const footerTitle = document.querySelector('.footer__title');
  const footerText = document.querySelector('.footer__text');
  const contactLink = document.querySelector('.contact__link');
  const navLink = document.querySelector(' .nav__link');
  const btnShopping = document.querySelector('.bx-shopping-bag');
  const btnAlt = document.querySelector('.bx-grid-alt');

   btnSwitch.addEventListener('click', (e) => {
      document.body.classList.toggle('dark')
      btnSwitch.classList.toggle('active')
      header.classList.toggle('dark--Mode')
      productsTitle.classList.toggle('dark--Mode')
      footer.classList.toggle('dark--Mode')
      footerTitle.classList.toggle('dark--Mode')
      footerText.classList.toggle('dark--Mode')
      contactLink.classList.toggle('dark--Mode')
      navLink.classList.toggle('dark--Mode')
      btnShopping.classList.toggle('dark--Mode')
      btnAlt.classList.toggle('dark--Mode')

    })

}

export default darkMode