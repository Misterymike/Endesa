document.addEventListener("DOMContentLoaded", function() {
    let botaoAtivarAudio = document.getElementById("ativarAudio");
    let luminAvatar = document.getElementById("lumin-avatar");

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

    botaoAtivarAudio.addEventListener("click", function() {
        falarMensagem("Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule a sua poupança ou envie a sua fatura para garantir o melhor preço.");
        botaoAtivarAudio.style.display = "none"; // Oculta o botão depois da ativação
    });

    luminAvatar.addEventListener("click", function() {
        falarMensagem("Posso ajudar com alguma dúvida? Pode simular a sua poupança ou enviar a sua fatura.");
    });

    // Falar automaticamente ao entrar no site (se permitido pelo navegador)
    setTimeout(() => {
        if (!speechSynthesis.speaking) {
            falarMensagem("Bem-vindo à Endesa! Vamos poupar na sua fatura? Simule agora ou envie a sua fatura.");
        }
    }, 2000);
});

function calcularPoupanca() {
    let valorFatura = document.getElementById("valorFatura").value;
    let poupanca = valorFatura * 0.30; // 30% de desconto
    document.getElementById("resultadoPoupanca").innerHTML = `💡 Com a Endesa, pode poupar aproximadamente <b>${poupanca.toFixed(2)}€</b> na fatura!`;

    // O Lumin responde dinamicamente após o cálculo
    falarMensagem(`Se mudar para a Endesa, pode poupar cerca de ${poupanca.toFixed(2)} euros na sua fatura.`);
}
