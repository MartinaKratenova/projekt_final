// Next/previous controls
function plusSlides(n, className) {
    if (n >= 0) {
        showSlides("next", className);
    } else {
        showSlides("prev", className);
    }
}

function showSlides(direction, className) {
  let i;
  let slides = document.getElementsByClassName(className);

  for (i = 0; i < slides.length; i++) {
    if (slides[i].className.includes(" active")) {
        slides[i].className = slides[i].className.replace(" active", "");

        if (direction === "next") {
            if (i < slides.length - 1) {
                slides[i+1].className = slides[i+1].className + " active";
            } else {
                slides[0].className = slides[0].className + " active";
            }
        } else {
            if (i > 0) {
                slides[i-1].className = slides[i-1].className + " active";
            } else {
                slides[slides.length-1].className = slides[slides.length-1].className + " active";
            }
        }

        break;
    }
  }


//     if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slides[slideIndex-1].style.display = "block";


}