burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
logo = document.querySelector('.logo');
navList = document.querySelector('.nav-list');
// rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    logo.classList.toggle('v-class-resp');
    // rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
});


var slideIndex = 1;
      showSlides(slideIndex);
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if(n > slides.length) {
          slideIndex = 1
        }
        if(n < 1) {
          slideIndex = slides.length
        }
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for(i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }



      function myFunction() {
        var x = document.getElementById("hide");
      
        if (x.style.display === "none") {
          x.style.display = "flex";
          
        } else {
          x.style.display = "none";
        

        }
      }