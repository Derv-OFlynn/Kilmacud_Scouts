/*
Student name: Dervla O'Flynn C22344363
*/

//Badge Image Orientation functions
function Badge62()
{
    let TroopBadgeSrc1 = document.getElementById("TroopRotate");
    TroopBadgeSrc1.src = "SiteImages/62nd_KilmacudTroopBadgeNO_BG.png";
}

function Badge71()
{
    let TroopBadgeSrc2 = document.getElementById("TroopRotate");
    TroopBadgeSrc2.src = "SiteImages/71st_KilmacudTroopBadgeNO_BG.png";
}

function Badge90()
{
    let TroopBadgeSrc3 = document.getElementById("TroopRotate");
    TroopBadgeSrc3.src = "SiteImages/90th_KilmacudTroopBadgeNo_BG.png";
}
//End of Badge Image Orientation functions

//Contact form Validation Functions
function validateForm1()
{
    let k = document.form["fname"].value;
    if (k == "")
    {
        alert("Please fill out field <3");
        console.log("Hello World");
        return false;
    }
}

function validateForm2()
{
    let k = document.form["lname"].value;
    if (k == "")
    {
        alert("Please fill out field <3");
        return false;
    }
}

function validateForm3()
{
    let k = document.form["subject"].value;
    if (k == "")
    {
        alert("Please fill out field <3");
        return false;
    }
}
//End ofContact form Validation Functions


//Slideshow Functions

let slideIndex = 1;
showSlides(slideIndex);

//Arrow function (prev/next)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Current numbertext function
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//mega slideshow function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//End of Slideshow Functions
