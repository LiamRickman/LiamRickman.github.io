// ------------------ Copyright Year ------------------
const copyrightYear = document.querySelector("#copyright-year");
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;



// ------------------ Modal Images ------------------
function initializeModal(modalID, modalPopupID) {
  //Sets modals
  var modalPopup = document.getElementById(modalPopupID);
  var modal = document.getElementById(modalID)

  //Gets various sections of modal
  var img = modal.querySelector('#modal_img');
  var modalImg = modalPopup.querySelector('#modal_img_popup');
  var captionText = modalPopup.querySelector('#modal_caption');

  //Opens Modal
  img.onclick = function() {
    modalPopup.style.display = "block";
    modalPopup.style.zIndex = 998;
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  //Gets close button
  var span = modalPopup.querySelector('.modal_close');

  //Closes Modal
  span.onclick = function() {
    modalPopup.style.display = "none";
  }

  window.addEventListener('click', function(event) {
    if (event.target == modalPopup) {
      modalPopup.style.display = "none";
    }
  });
}

//Template modals
window.addEventListener('load', function() {
  initializeModal('modal1', 'modal_popup');
  initializeModal('modal2', 'modal_popup');
  initializeModal('modal3', 'modal_popup');
  initializeModal('modal4', 'modal_popup');
  initializeModal('modal5', 'modal_popup');
  initializeModal('modal6', 'modal_popup');
  initializeModal('modal7', 'modal_popup');
});
 
function initializeSlideshow(slideshowID) {

  var slideshow = document.getElementById(slideshowID);

  var prev = slideshow.querySelector('.slideshow_prev');
  var next = slideshow.querySelector('.slideshow_next');

  prev.onclick = function() {
    moveSlides(-1);
  }

  next.onclick = function() {
    moveSlides(1);
  }

  let slideIndex = 1;
  showSlides(slideIndex);

  function moveSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = slideshow.querySelectorAll('.slide')
    
    if (n > slides.length) {slideIndex = 1}
    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
  }
}

window.addEventListener('load', function() {
  initializeSlideshow('slideshow1');
  initializeSlideshow('slideshow2');
  initializeSlideshow('slideshow3');
});