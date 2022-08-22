var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //email
  let UserEmail = document.getElementById('email').value
function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "avaliani2002@gmail.com",
    Password : "avala2002",
    To : 'avaliani2002@gmail.com"',
    From : `${UserEmail}`,
    Subject : "mirrocity.com",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

 