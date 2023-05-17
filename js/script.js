  // const { default: Swal } = require("sweetalert2");

  // document.getElementById('follow').addEventListener('click', function(){
  //   Swal.fire('Any fool can use a computer')
  // })
  const { value: url } = await Swal.fire({
    input: 'url',
    inputLabel: 'URL address',
    inputPlaceholder: 'Enter the URL'
  })
  
  if (url) {
    Swal.fire(`Entered URL: ${url}`)
  }
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