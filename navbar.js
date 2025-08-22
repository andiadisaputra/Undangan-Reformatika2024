
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".mynavbar");
    if (window.scrollY > 50) { // kalau sudah geser 50px
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
