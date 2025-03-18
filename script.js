document.addEventListener("DOMContentLoaded", function() {
    let synthesis = window.speechSynthesis;
    let audioEnabled = false;

    function falar(texto) {
        if (audioEnabled) {
            let msg = new SpeechSynthesisUtterance(texto);
            msg.lang = "pt-PT";
            msg.rate = 1;  // Velocidade da voz
            msg.pitch = 1; // Tom da voz
            synthesis.speak(msg);
        }
    }

    function toggleVoice() {
        audioEnabled = !audioEnabled;
        let button = document.getElementById("audio-toggle");
        button.innerText = audioEnabled ? "🔇 Desativar Narração" : "🔊 Ativar Narração";

        if (audioEnabled) {
            falar("Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule aqui a sua poupança ou envie a sua fatura para garantir o melhor preço.");
        } else {
            synthesis.cancel();
        }
    }

    window.calcularPoupanca = function() {
        let valor = document.getElementById("valor-fatura").value;
        let poupanca = valor * 0.30;
        let resultadoTexto = `💡 Com a Endesa, pode poupar aproximadamente ${poupanca.toFixed(2)}€ na sua fatura!`;

        document.getElementById("resultado").innerText = resultadoTexto;
        falar(resultadoTexto);
    }
});
