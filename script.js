// funzione clic freccia previous (#left)
function prevClick(){

  var activeElem = $(".active");

  if(activeElem.hasClass("first")){

    var prevElem = $(".last");
    activeElem.removeClass("active");
    prevElem.addClass("active");

  } else {

    var prevElem = activeElem.prev("div");
    activeElem.removeClass("active");
    prevElem.addClass("active");

  }

}

// funzione clic freccia next (#right)
function nextClick(){

  var activeElem = $(".active");

  if(activeElem.hasClass("last")){
    var nextElem = $(".first");
    activeElem.removeClass("active");
    nextElem.addClass("active");

  } else {
    var nextElem = activeElem.next("div");
    activeElem.removeClass("active");
    nextElem.addClass("active");

  }

}

// funzione avviamento
function init(){

  $("#left").click(prevClick);
  $("#right").click(nextClick);

}

$(document).ready(init);
