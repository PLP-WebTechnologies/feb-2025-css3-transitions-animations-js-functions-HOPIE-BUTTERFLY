let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function setTheme(theme) {
    localStorage.setItem('preferredTheme', theme);
    document.body.className = theme;
  }

  // Retrieve theme on page load
  window.onload = () => {
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
      document.body.className = savedTheme;
    }
  };

  