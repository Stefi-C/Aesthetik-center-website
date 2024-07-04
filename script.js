



document.addEventListener("DOMContentLoaded", function() {



  //side menu
  // Funzione per il toggle dei sub menu
  document.querySelectorAll('.sub-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
          var subMenu = this.nextElementSibling;
          if (subMenu) {
              if (subMenu.style.display === "block") {
                  subMenu.style.display = "none";
              } else {
                  subMenu.style.display = "block";
              }
          }
          var dropdown = this.querySelector('.dropdown');
          if (dropdown) {
              dropdown.classList.toggle('rotate');
          }
      });
  });

  // Funzione per espandere e collassare la sidebar
  var menuBtn = document.querySelector('.menu-btn');
  var sideBar = document.querySelector('.side-bar');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener('click', function() {
      sideBar.classList.add('active');
      menuBtn.style.visibility = 'hidden';
  });

  function closeSidebar() {
      sideBar.classList.remove('active');
      menuBtn.style.visibility = 'visible';
  }

  closeBtn.addEventListener('click', closeSidebar);

  // Funzione per chiudere la sidebar cliccando fuori di essa
  document.addEventListener('click', function(event) {
      if (!sideBar.contains(event.target) && !menuBtn.contains(event.target)) {
          closeSidebar();
      }
  });
});
