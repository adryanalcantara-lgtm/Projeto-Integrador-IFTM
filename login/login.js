function loginUsuario() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const aviso = document.querySelector(".aviso");

    if (email == "narutosayajin@gmail" && senha == "1234") {
        window.location.href = "/home/home.html";
    }

    else if (email == "admfoda@gmail" && senha == "1234") {
        window.location.href = "/adm/adm.html";
    }

    else if (email == "christophernolan@gmail" && senha == "1234") {
        window.location.href = "/prod/prod.html";
    }

    else {
        aviso.textContent = "E-mail ou senha incorretos!";
    }
}