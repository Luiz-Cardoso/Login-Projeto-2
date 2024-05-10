document.addEventListener("DOMContentLoaded", function() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    function verificaUsuario(email, senha) {
        return usuarios.some(
            (u) => u.email === email && u.senha === senha
        );
    }

    //adicionando evento de login
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("password").value;
        const permanecerConectado = document.getElementById("permanecer-conectado").checked;

        if (verificaUsuario(email, senha)) {
            alert("Login bem-sucedido!");

            if(permanecerConectado){
                //armazena o usuario pra manter conectado
                localStorage.setItem("usuario_logado", JSON.stringify({email}));
            }else{
                localStorage.removeItem("usuario_logado");
            }
            //redirecionando pra pagina de lista
            window.location.href = "pagina.lista.html"
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });

    if (localStorage.getItem("usuario_logado")) {
        window.location.href = "pagina_lista.html";
    }

    //adicionando evento de cadastro
    document.getElementById("register").addEventListener("click", function() {
        alert("Direcionando para a tela de cadastro...");
        //redirecionando pra pagina de cadastro
        window.location.href = "cadastro.html"
    });
});
