window.document.onkeydown = function (e) {
  if (!e) {
    e = event.preventDefault();
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
};

function lightbox_open() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  lightBoxVideo.pause();
}

window.document.onkeydown = function (e) {
  if (!e) {
    e = event.preventDefault();
  }
  if (e.keyCode == 27) {
    lightbox_close1();
    lightbox_close2();
    lightbox_close3();
    lightbox_close4();
  }
};

function lightbox_open1() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo1");
  window.scrollTo(0, 0);
  document.getElementById("light1").style.display = "block";
  document.getElementById("this-is-big-video-slider-fade").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close1() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo1");
  document.getElementById("light1").style.display = "none";
  document.getElementById("this-is-big-video-slider-fade").style.display = "none";
  lightBoxVideo.pause();
}
function lightbox_open2() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo2");
  window.scrollTo(0, 0);
  document.getElementById("light2").style.display = "block";
  document.getElementById("this-is-big-video-slider-fade").style.display ="block";
  lightBoxVideo.play();
}

function lightbox_close2() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo2");
  document.getElementById("light2").style.display = "none";
  document.getElementById("this-is-big-video-slider-fade").style.display ="none";
  lightBoxVideo.pause();
}
function lightbox_open3() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo3");
  window.scrollTo(0, 0);
  document.getElementById("light3").style.display = "block";
  document.getElementById("this-is-big-video-slider-fade").style.display ="block";
  lightBoxVideo.play();
}

function lightbox_close3() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo3");
  document.getElementById("light3").style.display = "none";
  document.getElementById("this-is-big-video-slider-fade").style.display ="none";
  lightBoxVideo.pause();
}
function lightbox_open4() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo4");
  window.scrollTo(0, 0);
  document.getElementById("light4").style.display = "block";
  document.getElementById("this-is-big-video-slider-fade").style.display ="block";
  lightBoxVideo.play();
}

function lightbox_close4() {
  let lightBoxVideo = document.getElementById("VisaChipCardVideo4");
  document.getElementById("light4").style.display = "none";
  document.getElementById("this-is-big-video-slider-fade").style.display ="none";
  lightBoxVideo.pause();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName(
    "this-is-big-video-slider-mySlides"
  );
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}




