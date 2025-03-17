document.addEventListener("DOMContentLoaded", function() {
    let luminText = document.getElementById("lumin-text");

    // Lumin fala automaticamente ao carregar a página
    setTimeout(() => {
        speak("Olá! Seja bem-vindo! Estou aqui para o ajudar a poupar na sua fatura de energia.");
        luminText.innerHTML = "💡 Olá! Seja bem-vindo! Estou aqui para o ajudar a poupar na sua fatura de energia.";
        
        // Pergunta sobre a fatura do cliente
        setTimeout(() => {
            speak("Tem a sua fatura de energia por perto? Posso ajudá-lo a analisá-la.");
            luminText.innerHTML = "📄 Tem a sua fatura de energia por perto? Posso ajudá-lo a analisá-la.";
            
            // Após 5 segundos, incentiva o cliente a usar o simulador
            setTimeout(() => {
                speak("Vamos calcular a sua poupança agora! Insira o valor da sua fatura no simulador abaixo.");
                luminText.innerHTML = "💰 Vamos calcular a sua poupança agora! Insira o valor da sua fatura no simulador abaixo.";
            }, 5000);
            
        }, 5000);

    }, 2000);
});

// Simulador de poupança
function calcularPoupanca() {
    let faturaAtual = document.getElementById("fatura-input").value;
    let poupanca = faturaAtual * 0.30; // Calcula 30% de poupança
    let resultado = `💸 Com a Endesa, pode poupar aproximadamente ${poupanca.toFixed(2)}€ na sua fatura!`;
    
    document.getElementById("resultado-poupanca").innerText = resultado;
    speak(resultado);
}

// Função para o Lumin falar
function speak(text) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "pt-PT"; // Português de Portugal
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
