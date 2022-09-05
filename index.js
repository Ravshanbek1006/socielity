var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


let swiperSlide=document.querySelectorAll(".swiper-slide");
let tabContents=document.querySelectorAll(".tab-content")


swiperSlide.forEach(element=>{
  element.addEventListener("click", function(){
    tabContents.forEach(el=>el.classList.remove("active"))
    let dataAt = element.getAttribute("data-openTab")
    let activeTab=document.querySelector(dataAt)
    activeTab.classList.add("active")

  })
})