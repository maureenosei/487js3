var slideIndex = 1;
var htmlBuilder = "";

function plusSlides(n) {
  showSlides((slideIndex += n));
  //console.log("inside plusSlides with a value of " + n);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  //console.log(n);
}

function showSlides(n) {
  // console.log("inside showSlides witha value of " + n);

  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");
  //console.log(slides);

  //resets it end node
  if (n < 1) {
    // console.log("inside the if ");
    slideIndex = slides.length;
  }

  if (n > slides.length) {
    slideIndex = 1;
  }

  //hides the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //changes the dots

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

htmlBuilder += "<div>";
htmlBuilder += "<span class='dot' onclick ='currentSlide(1)'></span>";
htmlBuilder += "<span class='dot' onclick ='currentSlide(2)'></span>";
htmlBuilder += "<span class='dot' onclick ='currentSlide(3)'></span>";
htmlBuilder += "</div>";

document.getElementById("dotdiv").innerHTML = htmlBuilder;

showSlides(slideIndex);
