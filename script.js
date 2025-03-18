document.addEventListener("DOMContentLoaded", function() {
    let botaoAudio = document.getElementById("toggleAudio");
    let luminAvatar = document.getElementById("lumin-avatar");
    let audioAtivado = false;

    function falarMensagem(texto) {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel(); // Para a fala anterior antes de iniciar uma nova
        }
        let msg = new SpeechSynthesisUtterance();
        msg.text = texto;
        msg.lang = "pt-PT";
        msg.rate = 1.1;
        msg.pitch = 1;
        speechSynthesis.speak(msg);
    }

    // Ativar/desativar a narração
    botaoAudio.addEventListener("click", function() {
        audioAtivado = !audioAtivado;

        if (audioAtivado) {
            botaoAudio.innerText = "❌ Desativar Lumin";
            falarMensagem("Olá! Sou o Lumin, o assistente virtual da Endesa. Simule a sua poupança ou envie a sua fatura.");
        } else {
            botaoAudio.innerText = "🔊 Ativar Lumin";
            speechSynthesis.cancel(); // Para qualquer fala ativa
        }
    });

    // O Lumin fala ao ser clicado (se o áudio estiver ativado)
    luminAvatar.addEventListener("click", function() {
        if (audioAtivado) {
            falarMensagem("Posso ajudar com alguma dúvida? Pode simular a sua poupança ou enviar a sua fatura.");
        }
    });

    // Narração automática ao entrar no site (se o utilizador ativar o áudio)
    setTimeout(() => {
        if (audioAtivado) {
            falarMensagem("Bem-vindo à Endesa! Vamos poupar na sua fatura? Simule agora ou envie a sua fatura.");
        }
    }, 2000);
});

function calcularPoupanca() {
    let valorFatura = document.getElementById("valorFatura").value;
    let poupanca = valorFatura * 0.30; // 30% de desconto
    document.getElementById("resultadoPoupanca").innerHTML = `💡 Com a Endesa, pode poupar aproximadamente <b>${poupanca.toFixed(2)}€</b> na fatura!`;

    // O Lumin responde dinamicamente após o cálculo (se o áudio estiver ativado)
    if (audioAtivado) {
        falarMensagem(`Se mudar para a Endesa, pode poupar cerca de ${poupanca.toFixed(2)} euros na sua fatura.`);
    }
}
