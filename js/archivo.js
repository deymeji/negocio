document.addEventListener("DOMContentLoaded", function() {
    var submenuToggles = document.querySelectorAll('.submenu-toggle');
    submenuToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('submenu-open');
      });
    });
  });



