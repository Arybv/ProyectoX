window.addEventListener('load', addIcons);
  //function addPrincipal(){}
  var icons = document.getElementsByClassName("icon-redes");
  for (var i = 0; i < icons.length; i++) {
    addIcons(icons[i]);


  function addIcons(icons){
    var ulIco = document.createElement("ul");
    icons.appendChild(ulIco);

    var clasesIcon = ["icon-facebook", "icon-share"];
    for (var j = 0; j < clasesIcon.length; j++) {

    function addClass(array){
    var liIco = document.createElement("li");
    ulIco.appendChild(liIco);

    var span = document.createElement("span");
    span.setAttribute("class", array[j]);
    liIco.appendChild(span);
    } addClass(clasesIcon);
  }
}
}
