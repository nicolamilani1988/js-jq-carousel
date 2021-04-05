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

// funzione per colorare quadratino cliccato
function viewPic(){
  const clickedBox = $(this);
  // console.log(clickedBox);
  $(".point").removeClass("active");
  clickedBox.addClass("active");
  const activeElement = $(".point.active");
  const classList = ["pic-1","pic-2","pic-3","pic-4"];

  showPic(activeElement,classList);

}

// funzione per mostrare foto corrispondente
function showPic(elem,array){

  $(".img-container").removeClass("active");

  for(let i = 0;i<array.length;i++){
    let myClass = array[i];
    if(elem.hasClass(myClass)){
      $(`.${myClass}`).addClass("active");
    }
  
  }

}
  

// funzione avviamento
function init(){

  $("#left").click(prevClick);
  $("#right").click(nextClick);
  $(".point").click(viewPic);
  
}

$(init);