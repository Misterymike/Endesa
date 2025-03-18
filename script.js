document.addEventListener("DOMContentLoaded", function() {
    let luminText = document.getElementById("lumin-text");
    let luminBox = document.getElementById("lumin-box");

    // Passo 1: Apresentação inicial
    setTimeout(() => {
        let msg1 = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. 🚀";
        speak(msg1);
        luminText.innerHTML = "💡 " + msg1;

        // Passo 2: Criar conexão com o cliente
        setTimeout(() => {
            let msg2 = "Diga-me, tem ideia de quanto está a pagar na sua fatura atual?";
            speak(msg2);
            luminText.innerHTML = "❓ " + msg2;

            // Passo 3: Incentivo ao simulador
            setTimeout(() => {
                let msg3 = "Vamos calcular a sua poupança agora! Insira o valor da sua fatura abaixo.";
                speak(msg3);
                luminText.innerHTML = "💰 " + msg3;

                // Passo 4: Após o simulador, pede a fatura
                setTimeout(() => {
                    let msg4 = "Agora só falta uma coisa! Envie a sua fatura para garantirmos o melhor preço para si!";
                    speak(msg4);
                    luminText.innerHTML = "📄 " + msg4;
                }, 7000);

            }, 7000);

        }, 5000);

    }, 2000);
});

// Simulador de poupança
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
