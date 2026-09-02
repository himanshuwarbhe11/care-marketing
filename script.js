function toggleMenu() {

  const nav = document.getElementById("navLinks");

  nav.classList.toggle("active");

}


document.querySelectorAll(".nav-links a").forEach(function(link) {

  link.addEventListener("click", function() {

    document.getElementById("navLinks").classList.remove("active");

  });

});
