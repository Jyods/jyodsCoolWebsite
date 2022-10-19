/* Header */

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.fontSize = "40px";
    document.getElementById("header").style.paddingTop = "0%";
    document.getElementById("header").style.backgroundColor = "#000000";
    document.getElementById("header-btn").style.height = "0px";
    document.getElementById("header-btn").style.opacity = "0";
    document.getElementById("header-btn").style.transition = "0.5s";
  } else {
    document.getElementById("header").style.fontSize = "70px";
    document.getElementById("header").style.paddingTop = "10%";
    document.getElementById("header").style.backgroundColor = "#00000000";
    document.getElementById("header-btn").style.height = "0px";
    document.getElementById("header-btn").style.opacity = "100";
    document.getElementById("header-btn").style.transition = "0.5s";
  }
}

/* Background Remover */


function compare() {
  var x, i;
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    w = img.offsetWidth;
    h = img.offsetHeight;
    img.style.width = (w / 2) + "px";

    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    img.parentElement.insertBefore(slider, img);
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
 
    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      if (clicked == 0) return false;
      pos = getCursorPos(e)
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}