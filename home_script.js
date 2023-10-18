let usuario = JSON.parse(localStorage.getItem("logado"))
document.getElementById("titulo").innerHTML= "( " + usuario.login+" ) "
function deslogar(){
    window.location.href = "./login.html"
}