(function () {
    var controls = document.querySelector(".controls");
    var controlsItems = controls.querySelectorAll(".control");
    var textoDinamico = document.getElementById("texto-dinamico");
  
    controlsItems.forEach(function (button) {
      button.addEventListener("mouseenter", function () {
        var texto = button.getAttribute("data-text");
        textoDinamico.textContent = texto;
        textoDinamico.style.display = "block";
      });
  
      button.addEventListener("mouseleave", function () {
        textoDinamico.style.display = "none";
      });
    });
  
    controls.addEventListener("click", function (event) {
      var clickedBtn = event.target.closest(".control");
      if (clickedBtn) {
        controlsItems.forEach(function (button) {
          button.classList.remove("active-btn");
        });
        clickedBtn.classList.add("active-btn");
        var id = clickedBtn.getAttribute("data-id");
        var activeContent = document.getElementById(id);
        var activeContents = document.querySelectorAll(".active");
        activeContents.forEach(function (content) {
          content.classList.remove("active");
        });
        activeContent.classList.add("active");
      }
    });
  
    document.querySelector(".theme-btn").addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
    });
  })();
  