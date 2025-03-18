document.addEventListener("DOMContentLoaded", function () {
    let audioEnabled = false;

    // Mensagem do Lumin AI
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule aqui a sua poupança ou envie a sua fatura para garantir o melhor preço.";

    // Ativar narração automaticamente ao carregar a página
    setTimeout(function() {
        if (audioEnabled) {
            window.speechSynthesis.speak(msg);
        }
    }, 2000); // Pequeno atraso para garantir carregamento correto

    // Alternar áudio
    window.toggleAudio = function () {
        audioEnabled = !audioEnabled;
        if (audioEnabled) {
            speechSynthesis.speak(msg);
            document.getElementById("audio-toggle").textContent = "🔇 Desativar Narração";
        } else {
            speechSynthesis.cancel();
            document.getElementById("audio-toggle").textContent = "🔊 Ativar Narração";
        }
    };

    // Simulador de Poupança
    window.calcularPoupanca = function () {
        let valorFatura = document.getElementById("valorFatura").value;
        let poupanca = (valorFatura * 0.3).toFixed(2);
        document.getElementById("poupancaValor").textContent = poupanca + "€";
        document.getElementById("resultadoPoupanca").textContent = "💡 Com a Endesa, pode poupar aproximadamente " + poupanca + "€ na fatura!";

        // Narração do resultado
        if (audioEnabled) {
            let resultadoMsg = new SpeechSynthesisUtterance();
            resultadoMsg.text = "Com a Endesa, pode poupar aproximadamente " + poupanca + " euros na fatura!";
            speechSynthesis.speak(resultadoMsg);
        }
    };
});
