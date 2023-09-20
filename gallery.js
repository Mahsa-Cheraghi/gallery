function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  let slideIndex = 1;
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
    if (n > slides.length) document.getElementById("myModal").style.display = "none";
    // {slideIndex = 1}
    if (n < 1) document.getElementById("myModal").style.display = "none";
    // {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
   
    slides[slideIndex-1].style.display = "block";
    
  }
  let Index = 1;
  show(Index);

  function Slide(n) {
    show((Index = n));
  }

  function show(n) {
    let i;
    let gallery = document.getElementsByClassName("gallery");
    let sub = document.getElementsByClassName("sub");
    if (n > gallery.length) {
      Index = 1;
    }
    if (n < 1) {
      Index = gallery.length;
    }
    for (i = 0; i < gallery.length; i++) {
      gallery[i].style.display = "none";
    }
    for (i = 0; i < sub.length; i++) {
      sub[i].className = sub[i].className.replace(" active", "");
    }
    gallery[Index - 1].style.display = "block";
    sub[Index - 1].className += " active";
  }