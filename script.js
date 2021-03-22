// funzione clic freccia previous (#left)
function prevClick(){


}

// funzione clic freccia next (#right)
function nextClick(){


  $(".active").next(".img-container").addClass("active");
  $(".active").removeClass("active");

}

// funzione avviamento
function init(){

  $("#left").click(prevClick);
  $("#right").click(nextClick);

}

$(document).ready(init);
