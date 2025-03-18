document.addEventListener("DOMContentLoaded", function() {
    // Lumin fala ao abrir o site
    let luminText = document.getElementById("lumin-text");
    let mensagem = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. 🚀 Simule aqui no simulador ou envie a sua fatura para garantir o melhor preço.";
    let i = 0;

    function digitarTexto() {
        if (i < mensagem.length) {
            luminText.textContent += mensagem.charAt(i);
            i++;
            setTimeout(digitarTexto, 50);
        } else {
            narrarTexto(mensagem);
        }
    }

    function narrarTexto(texto) {
        let synth = window.speechSynthesis;
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = "pt-PT";
        synth.speak(utterance);
    }

    digitarTexto();
});

// Simulador de Poupança
function calcularPoupanca() {
    let valor = document.getElementById("valorFatura").value;
    let poupanca = valor * 0.30;
    document.getElementById("resultado").innerHTML = `🎉 Com a Endesa, pode poupar aproximadamente <strong>${poupanca.toFixed(2)}€</strong> por mês!`;
}
