// funzione clic freccia previous (#left)
function prevClick(){

  var activeImg = $(".active");

  if(activeImg.hasClass("first")){

    var prevImg = $(".img-container.last");
    activeImg.removeClass("active");
    prevImg.addClass("active");

  } else {

    var prevImg = activeImg.prev(".img-container");
    activeImg.removeClass("active");
    prevImg.addClass("active");

  }

}

// funzione clic freccia next (#right)
function nextClick(){

  var activeImg = $(".active");

  if(activeImg.hasClass("last")){
    var nextImg = $(".img-container.first");
    activeImg.removeClass("active");
    nextImg.addClass("active");

  } else {
    var nextImg = activeImg.next(".img-container");
    activeImg.removeClass("active");
    nextImg.addClass("active");

  }

}

// funzione avviamento
function init(){

  $("#left").click(prevClick);
  $("#right").click(nextClick);

}

$(document).ready(init);
