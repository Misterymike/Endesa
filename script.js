document.addEventListener("DOMContentLoaded", function() {
    function falarMensagem(texto) {
        let msg = new SpeechSynthesisUtterance();
        msg.text = texto;
        msg.lang = "pt-PT";
        msg.rate = 1.1;
        msg.pitch = 1;
        speechSynthesis.speak(msg);
    }

    // Criar um botão invisível para ativar o áudio no primeiro clique
    let botaoAtivarAudio = document.createElement("button");
    botaoAtivarAudio.innerText = "Ativar Áudio";
    botaoAtivarAudio.style.position = "absolute";
    botaoAtivarAudio.style.top = "-9999px";
    document.body.appendChild(botaoAtivarAudio);

    botaoAtivarAudio.addEventListener("click", function() {
        falarMensagem("Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule a sua poupança ou envie a sua fatura para garantir o melhor preço.");
        botaoAtivarAudio.remove(); // Remove o botão após o primeiro clique
    });

    // Ativar o áudio ao clicar no avatar do Lumin
    document.getElementById("lumin-avatar").addEventListener("click", function() {
        falarMensagem("Posso ajudar com alguma dúvida? Pode simular a sua poupança ou enviar a sua fatura.");
    });
});

function calcularPoupanca() {
    let valorFatura = document.getElementById("valorFatura").value;
    let poupanca = valorFatura * 0.30; // 30% de desconto
    document.getElementById("resultadoPoupanca").innerHTML = `💡 Com a Endesa, pode poupar aproximadamente <b>${poupanca.toFixed(2)}€</b> na fatura!`;
}
