document.addEventListener("DOMContentLoaded", function () {
    let synthesis = window.speechSynthesis;
    let chatBox = document.getElementById("chat-box");
    let chatMessages = document.getElementById("chat-messages");
    let chatInput = document.getElementById("chat-input");
    let sendBtn = document.getElementById("send-btn");

    function narrar(texto) {
        if (!synthesis.speaking) {
            let msg = new SpeechSynthesisUtterance();
            msg.text = texto;
            msg.lang = "pt-PT";
            synthesis.speak(msg);
        }
    }

    function adicionarMensagem(texto, tipo) {
        let mensagem = document.createElement("div");
        mensagem.classList.add(tipo === "bot" ? "bot-message" : "user-message");
        mensagem.innerText = texto;
        chatMessages.appendChild(mensagem);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        if (tipo === "bot") {
            narrar(texto);
        }
    }

    sendBtn.addEventListener("click", function () {
        let pergunta = chatInput.value.trim();
        if (pergunta === "") return;

        adicionarMensagem(pergunta, "user");
        chatInput.value = "";

        setTimeout(() => {
            let resposta = obterResposta(pergunta);
            adicionarMensagem(resposta, "bot");
        }, 1000);
    });

    function obterResposta(pergunta) {
        pergunta = pergunta.toLowerCase();

        if (pergunta.includes("poupar") || pergunta.includes("reduzir fatura")) {
            return "Pode poupar até 30% mudando para a Endesa. Quer saber mais?";
        } else if (pergunta.includes("adesão") || pergunta.includes("como aderir")) {
            return "Para aderir, basta enviar a sua fatura ou preencher os seus dados no formulário!";
        } else if (pergunta.includes("desconto") || pergunta.includes("promoção")) {
            return "Atualmente temos um desconto de 70€ na sua primeira fatura!";
        } else {
            return "Desculpe, não entendi a sua pergunta. Pode reformular?";
        }
    }

    document.getElementById("lumin-avatar").addEventListener("click", function () {
        chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    });
});

function calcularPoupanca() {
    let valor = document.getElementById("valorFatura").value;
    let poupanca = valor * 0.30;
    document.getElementById("resultado").innerText = `💡 Pode poupar aproximadamente ${poupanca.toFixed(2)}€ na sua fatura!`;
}
