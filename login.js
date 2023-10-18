const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("senha")
const campoNovoLogin = document.getElementById("login-cad")
const campoSenhaLogin = document.getElementById("senha-cad")
const campoSenhaConfirme = document.getElementById("senha-rep")


function cadastrar() {

    if (campoSenhaLogin.value == campoSenhaConfirme.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoSenhaLogin.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "login.html"
    } else {
        alert("As senhas são diferentes!");
    }



}

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    let mensagem = "Usuário ou senha incorreta!"

    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login & usuario.senha == senha) {
                localStorage.setItem("logado", JSON.stringify(usuario))
                mensagem = "Parabéns, você logou!";
                window.location.href = "./home.html"
                break;
            }
        }

    }
    alert(mensagem)


}
