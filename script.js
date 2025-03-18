document.addEventListener("DOMContentLoaded", function() {
    let narracaoAtiva = false;
    let synth = window.speechSynthesis;
    let msg = new SpeechSynthesisUtterance();

    msg.text = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule aqui a sua poupança ou envie a sua fatura para garantir o melhor preço.";

    function iniciarNarracao() {
        if (!narracaoAtiva) {
            synth.speak(msg);
            narracaoAtiva = true;
        }
    }

    document.getElementById("narracaoBotao").addEventListener("click", function() {
        iniciarNarracao();
    });

    function toggleVoice() {
        iniciarNarracao();
    }

    window.calcularPoupanca = function() {
        let valorFatura = document.getElementById("valorFatura").value;
        let poupanca = valorFatura * 0.30;
        document.getElementById("resultado").innerHTML = `💡 Com a Endesa, pode poupar aproximadamente <b>${poupanca.toFixed(2)}€</b> na sua fatura!`;

        let resultadoMsg = new SpeechSynthesisUtterance(`Com a Endesa, pode poupar aproximadamente ${poupanca.toFixed(2)} euros na sua fatura.`);
        synth.speak(resultadoMsg);
    };
});
