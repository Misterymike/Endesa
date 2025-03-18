document.addEventListener("DOMContentLoaded", function() {
    let luminText = document.getElementById("lumin-text");

    // Passo 1: Lumin se apresenta e lê o título
    setTimeout(() => {
        let msg1 = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. 🚀";
        speak(msg1);
        luminText.innerHTML = "💡 " + msg1;

        setTimeout(() => {
            let msg2 = "Descubra quanto pode poupar na sua fatura de energia com a Endesa.";
            speak(msg2);

            setTimeout(() => {
                let msg3 = "Tem a sua fatura à mão? Envie agora para garantir o melhor preço!";
                speak(msg3);
            }, 6000);

        }, 5000);

    }, 2000);
});

// Simulador de poupança atualizado
function calcularPoupanca() {
    let faturaAtual = document.getElementById("fatura-input").value;
    let poupanca = faturaAtual * 0.30;
    let resultado = `💸 Com a Endesa, pode poupar aproximadamente ${poupanca.toFixed(2)}€ na sua fatura!`;

    document.getElementById("resultado-poupanca").innerText = resultado;
    speak(resultado);
}

// Função para o Lumin falar
function speak(text) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "pt-PT";
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
