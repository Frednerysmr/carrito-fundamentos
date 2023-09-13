function darkMode () {
  const btnSwitch = document.querySelector('.switch');
  const header = document.querySelector('.header');
  const productsTitle = document.querySelector('.products__title');
  const footer = document.querySelector('.footer');
  const footerTitle = document.querySelector('.footer__title');
  const footerText = document.querySelector('.footer__text');
  const contactLink = document.querySelector('.contact__link');
  const navLink = document.querySelector('.nav__link');
  const btnShopping = document.querySelector('.bx-shopping-bag');
  const btnAlt = document.querySelector('.bx-grid-alt');
  const navMenu = document.querySelector('.nav__menu');

  const footerTitle2 = document.querySelector('.title-2');
  const footerTitle3 = document.querySelector('.title-3');
  const productImage = document.querySelector('.product__image');
  const productContent = document.querySelector('.product__content');
  const productBtn = document.querySelector('.product__btn');
  const btnCart = document.querySelector('.bx-cart-add');

  const btnCartHder = document.querySelector('.cart__header');
  const cartBody = document.querySelector('.cart__body');
  const cartFooter = document.querySelector('.cart__footer');
  const btnBuy = document.querySelector('.btn--buy');
  const cartTitle = document.querySelector('.cart__title');

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
      navMenu.classList.toggle('dark--Mode')

      footerTitle2.classList.toggle('dark--Mode')
      footerTitle3.classList.toggle('dark--Mode')
      productImage.classList.toggle('dark--Mode')
      productContent.classList.toggle('dark--Mode')
      productBtn.classList.toggle('dark--Mode')
      btnCart.classList.toggle('dark--Mode')
     
      btnCartHder.classList.toggle('dark--Mode')
      cartBody.classList.toggle('dark--Mode')
      cartFooter.classList.toggle('dark--Mode')
      btnBuy.classList.toggle('dark--Mode')
      cartTitle.classList.toggle('dark--Mode')

    })
    
}

export default darkMode