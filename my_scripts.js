// function myFunction(imgs) {
//     // Get the expanded image
//     var expandImg = document.getElementById("expandedImg");
//     // Get the image text
//     var imgText = document.getElementById("imgtext");
//     // Use the same src in the expanded image as the image being clicked on from the grid
//     expandImg.src = imgs.src;
//     // Use the value of the alt attribute of the clickable image as text inside the expanded image
//     imgText.innerHTML = imgs.alt;
//     // Show the container element (hidden with CSS)
//     expandImg.parentElement.style.display = "block";
//   }


var modal;

function openModal(modalId) {
    // Get the modal
    modal = document.getElementById(modalId);

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
function returnFromModal(event) {
    if (event.target == modal) {
        closeModal()
    }
}

function closeModal() {
    modal.style.display = "none";
}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }