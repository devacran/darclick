function showMarketing(){
redes.style.opacity = "0"
marketing.style.opacity = "1"
desarrollo.style.opacity = "0"
}
function showRedes(){
  redes.style.opacity = "1"
  marketing.style.opacity = "0"
  desarrollo.style.opacity = "0"

}

function showDesarrollo(){
  redes.style.opacity = "0"
  marketing.style.opacity = "0"
  desarrollo.style.opacity = "1"
}

function showMenu(){
    if(menu.classList.contains("is-active")){
      menu.classList.remove("is-active")
    }else{
      menu.classList.add("is-active")
    }
  }

function validation(event){
    if(event.matches){
      menu_button.addEventListener("click", showMenu)

    }else{
      menu_button.removeEventListener("click", showMenu)
}
}


var media1 = window.matchMedia("screen and (max-width: 840px)")


var menu = document.querySelector(".navbar_options")
var desarrollo = document.getElementById('desarrollo-web')
var redes = document.getElementById('redes-sociales')
var marketing = document.getElementById('marketing')

var button_desarrollo = document.getElementById('slider_button-desarrollo')
var button_redes = document.getElementById('slider_button-redes')
var button_marketing = document.getElementById('slider_button-marketing')
var menu_button = document.getElementById('menu-button')

media1.addListener(validation)
button_desarrollo.addEventListener("click", showDesarrollo)
button_redes.addEventListener("click", showRedes)
button_marketing.addEventListener("click", showMarketing)
if(media1.matches){
  menu_button.addEventListener("click", showMenu)
}
