listaAnotacoes = []
listaNumero = []
listaData = []
listaImagem = []

function create(){
    let texto = document.getElementById("anotacoes").value 
    let img = document.getElementById("imagem").value 
    let dat = document.getElementById("dia").value 
    let num = document.getElementById("numero").value 

    localStorage.setItem(listaAnotacoes, texto);
    listaNumero.push(num);
    listaImagem.push(img);
    listaData.push(dat)
    document.getElementById("anot").innerHTML = texto
}
function update(){

}
function del(){
     
}
