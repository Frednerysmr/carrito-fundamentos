function contactDarkMode () {
    const btnSwitch = document.querySelector('.switch');
    const form = document.querySelector('.contact-form');
    const wrapper = document.querySelector('.contact-wrapper');

     btnSwitch.addEventListener('click', (e) => {
        document.body.classList.toggle('dark')
        btnSwitch.classList.toggle('active')
        form.classList.toggle('darkMon')
        wrapper.classList.toggle('darkMon')
      })
  
  }
  
  export default contactDarkMode 