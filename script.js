document.addEventListener("DOMContentLoaded", function() {
    let synthesis = window.speechSynthesis;
    let audioEnabled = false;

    function falar(texto) {
        if (audioEnabled) {
            let msg = new SpeechSynthesisUtterance(texto);
            msg.lang = "pt-PT";
            synthesis.speak(msg);
        }
    }

    function toggleVoice() {
        audioEnabled = !audioEnabled;
        let button = document.getElementById("audio-toggle");
        button.innerText = audioEnabled ? "🔇 Desativar Narração" : "🔊 Ativar Narração";
        if (audioEnabled) {
            falar("Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule aqui a sua poupança ou envie a sua fatura para garantir o melhor preço.");
        }
    }

    function toggleChatbot() {
        let chat = document.getElementById("lumin-chat");
        chat.classList.toggle("hidden");
    }

    function enviarPergunta() {
        let input = document.getElementById("user-input").value.trim();
        if (input === "") return;

        adicionarMensagem("Você: " + input, "user");

        setTimeout(() => {
            let resposta = gerarResposta(input);
            adicionarMensagem("Lumin: " + resposta, "bot");
            falar(resposta);
        }, 1000);

        document.getElementById("user-input").value = "";
    }

    function adicionarMensagem(texto, tipo) {
        let chatBox = document.getElementById("chat-box");
        let mensagem = document.createElement("div");
        mensagem.classList.add(tipo === "bot" ? "bot-message" : "user-message");
        mensagem.innerText = texto;
        chatBox.appendChild(mensagem);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function gerarResposta(pergunta) {
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

    window.calcularPoupanca = function() {
        let valor = document.getElementById("valor-fatura").value;
        let poupanca = valor * 0.30;
        document.getElementById("resultado").innerText = `💡 Com a Endesa, pode poupar aproximadamente ${poupanca.toFixed(2)}€ na sua fatura!`;
        falar(`Com a Endesa, pode poupar aproximadamente ${poupanca.toFixed(2)} euros na sua fatura!`);
    }
});
