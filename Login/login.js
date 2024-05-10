document.addEventListener("DOMContentLoaded", function() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    function verificaUsuario(usuario, senha) {
        return usuarios.some(
            (u) => u.email === usuario && u.senha === senha
        );
    }

    //adicionando evento de login
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const usuario = document.getElementById("username").value;
        const senha = document.getElementById("password").value;

        if (verificaUsuario(usuario, senha)) {
            alert("Login bem-sucedido!");
            //redirecionando pra pagina de lista
            window.location.href = "pagina.lista.html"
        } else {
            alert("Nome de usuário ou senha incorretos.");
        }
    });

    //adicionando evento de cadastro
    document.getElementById("register").addEventListener("click", function() {
        alert("Direcionando para a tela de cadastro...");
        //redirecionando pra pagina de cadastro
        window.location.href = "cadastro.html"
    });
});
