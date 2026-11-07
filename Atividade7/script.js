let pontosUsuario = 0;
let pontosComputador = 0;

function jogar(usuario) {

    let opcoes = ["pedra", "papel", "tesoura"];

    let computador = opcoes[Math.floor(Math.random() * 3)];

    if (usuario == computador) {

        document.getElementById("resultado").innerHTML =
            "🤝 Empate! Computador escolheu " + computador;

    }

    else if (
        (usuario == "pedra" && computador == "tesoura") ||
        (usuario == "papel" && computador == "pedra") ||
        (usuario == "tesoura" && computador == "papel")
    ) {

        document.getElementById("resultado").innerHTML =
            "🎉 Você venceu! Computador escolheu " + computador;

        pontosUsuario++;

    }

    else {

        document.getElementById("resultado").innerHTML =
            "😢 Você perdeu! Computador escolheu " + computador;

        pontosComputador++;

    }

    document.getElementById("pontosUsuario").innerHTML = pontosUsuario;

    document.getElementById("pontosComputador").innerHTML = pontosComputador;

    document.getElementById("botoes").style.display = "none";

    document.getElementById("novamente").style.display = "inline-block";

}

function reiniciar() {

    document.getElementById("resultado").innerHTML =
        "Faça sua escolha!";

    document.getElementById("botoes").style.display = "flex";

    document.getElementById("novamente").style.display = "none";

}