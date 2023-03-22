


console.log(seletor)

var botao = document.getElementById("modo-escuro");
var body = document.querySelector("body");

botao.addEventListener("click", (event) => {

    if (body.hasAttribute("data-bs-theme") == true) {
        body.removeAttribute("data-bs-theme")
    } else {
        body.setAttribute("data-bs-theme", "dark")
    }

})


var seletor  = document.getElementById("flexSwitchCheckDefault");


seletor.addEventListener("change", (event) => {
    if(event.target.checked == true){
        body.setAttribute("data-bs-theme", "dark")
    }else {
        body.removeAttribute("data-bs-theme")
    }
    
})