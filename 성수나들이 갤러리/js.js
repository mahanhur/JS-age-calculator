let pics = document.getElementsByClassName("pic");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImg");

for(i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
  let bigLocation = this.getAttribute("data-src");
  lightboxImg.setAtrribute("src", bigLocation);
  lightbox.style.display = "block";
}

lightbox.onclick = function() {
  lightbox.style.display = "none";
}
