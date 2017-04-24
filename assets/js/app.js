window.addEventListener('load', function(){

  var icons = document.getElementsByClassName("icon-redes");
  for (var i = 0; i < icons.length; i++) {
    addIcons(icons[i]);
  }

  function addIcons(icons){
    var ulIco = document.createElement("ul");
    icons.appendChild(ulIco);

    addClass("icon-facebook");
    addClass("icon-twitter");
    addClass("icon-share");

    function addClass(clase){
      var liIco = document.createElement("li");
      ulIco.appendChild(liIco);
      var span = document.createElement("span");
      span.setAttribute("class", clase);
      liIco.appendChild(span);
    }
  }

})
