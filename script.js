document.addEventListener("DOMContentLoaded", function() {
    let botaoAudio = document.getElementById("toggleAudio");
    let luminAvatar = document.getElementById("lumin-avatar");
    let audioAtivado = false;

    function falarMensagem(texto) {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
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
            
            // Narração automática a cada 20 segundos se ativado
            setInterval(() => {
                if (audioAtivado) {
                    falarMensagem("Precisa de ajuda? Pode simular a poupança ou enviar a sua fatura.");
                }
            }, 20000);

        } else {
            botaoAudio.innerText = "🔊 Ativar Lumin";
            speechSynthesis.cancel();
        }
    });

    // O Lumin fala ao ser clicado se o áudio estiver ativado
    luminAvatar.addEventListener("click", function() {
        if (audioAtivado) {
            falarMensagem("Posso ajudar? Simule a poupança ou envie a sua fatura.");
        }
    });

    // Garantir que o Lumin fala ao ativar a narração
    setTimeout(() => {
        if (audioAtivado) {
            falarMensagem("Bem-vindo à Endesa! Vamos poupar na sua fatura? Simule agora ou envie a sua fatura.");
        }
    }, 3000);
});
