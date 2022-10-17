// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.fontSize = "40px";
    document.getElementById("header").style.paddingTop = "0%";
  } else {
    document.getElementById("header").style.fontSize = "70px";
    document.getElementById("header").style.paddingTop = "10%";
  }
}

