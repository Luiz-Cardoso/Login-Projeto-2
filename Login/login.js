document.addEventListener("DOMContentLoaded", function() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    function verificaUsuario(usuario, senha) {
        return usuarios.some(
            (u) => u.email === usuario && u.senha === senha
        );
    }

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const usuario = document.getElementById("username").value;
        const senha = document.getElementById("password").value;

        if (verificaUsuario(usuario, senha)) {
            alert("Login bem-sucedido!");
            //adicionar logica pra permanecer conectado, se necessario
        } else {
            alert("Nome de usuário ou senha incorretos.");
        }
    });

    document.getElementById("register").addEventListener("click", function() {
        alert("Direcionando para a tela de cadastro...");
        //adicionar logica pra direcionar para a tela de cadastro
    });
});
