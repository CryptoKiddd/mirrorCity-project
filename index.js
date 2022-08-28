

   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay:{
        delay:3000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  let forms = [...document.querySelectorAll('input[name=wre]')]
  console.log(forms)
  forms.forEach((form)=>{
    form.addEventListener('click',(e)=>{
       let userChoise = form.textContent
       console.log(userChoise)
      

    })
  })

  


 