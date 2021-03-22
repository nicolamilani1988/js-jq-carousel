// funzione clic freccia previous (#left)
function prevClick(){

  console.log("previous");
}

// funzione clic freccia next (#right)
function nextClick(){

console.log("next");
}

// funzione avviamento
function init(){

  $("#left").click(prevClick);
  $("#right").click(nextClick);

}

$(document).ready(init);
