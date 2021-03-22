// funzione clic freccia previous (#left)
function prevClick(){

  var activeImg = $(".active");
  var nextImg = activeImg.prev(".img-container");

  activeImg.removeClass("active");
  nextImg.addClass("active");

}

// funzione clic freccia next (#right)
function nextClick(){

  var activeImg = $(".active");
  var nextImg = activeImg.next(".img-container");

  activeImg.removeClass("active");
  nextImg.addClass("active");



}

// funzione avviamento
function init(){

  $("#left").click(prevClick);
  $("#right").click(nextClick);

}

$(document).ready(init);
