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



}