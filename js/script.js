document.querySelector('.header__button').addEventListener('click', function(){
  (async () => {

    const { value: email } = await Swal.fire({
      title: 'Fill in your email address',
      input: 'email',
      inputLabel: 'We will send you information about payment and shipping',
      inputPlaceholder: 'Enter your email address'
    })
    
    if (email) {
      Swal.fire(`Check ur mailbox, we send information for you`)
    }
    
    })()
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  }
});