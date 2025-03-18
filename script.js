document.addEventListener("DOMContentLoaded", function() {
    let synthesis = window.speechSynthesis;
    let voiceToggle = document.getElementById("toggle-voice");
    let isSpeaking = false;

    function narrar(texto) {
        if (!synthesis.speaking) {
            let msg = new SpeechSynthesisUtterance();
            msg.text = texto;
            msg.lang = "pt-PT";
            msg.rate = 1; // Velocidade normal
            msg.pitch = 1; // Tom neutro
            synthesis.speak(msg);
        }
    }

    // Iniciar narração automática ao carregar a página
    setTimeout(() => {
        narrar("Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule a sua poupança ou envie a sua fatura para garantir o melhor preço.");
    }, 1500);

    // Ativar/desativar narração pelo botão
    voiceToggle.addEventListener("click", function() {
        if (isSpeaking) {
            synthesis.cancel();
            isSpeaking = false;
            voiceToggle.innerText = "🔊"; // Ícone som desligado
        } else {
            narrar("Olá! Sou o Lumin, pronto para ajudar.");
            isSpeaking = true;
            voiceToggle.innerText = "🔇"; // Ícone som ligado
        }
    });

    // Simulador de Poupança
    document.getElementById("calcular").addEventListener("click", function() {
        let valor = parseFloat(document.getElementById("valorFatura").value);
        let poupanca = (valor * 0.3).toFixed(2);
        let resultadoTexto = `💡 Com a Endesa, pode poupar aproximadamente ${poupanca}€ na sua fatura!`;
        document.getElementById("resultado").innerText = resultadoTexto;
        narrar(resultadoTexto);
    });

    // Enviar formulário
    document.getElementById("enviar").addEventListener("click", function() {
        let nome = document.getElementById("nome").value;
        let telefone = document.getElementById("telefone").value;
        let autorizar = document.getElementById("autorizar").checked;

        if (nome === "" || telefone === "" || !autorizar) {
            alert("Por favor, preencha os campos obrigatórios e aceite os termos.");
            narrar("Por favor, preencha os campos obrigatórios e aceite os termos.");
            return;
        }

        let formData = new FormData();
        formData.append("name", nome);
        formData.append("phone", telefone);

        fetch("https://formsubmit.co/miguelferreira@presentiluminado.pt", {
            method: "POST",
            body: formData
        }).then(response => {
            if (response.ok) {
                narrar("Obrigado! O seu pedido foi enviado com sucesso.");
                alert("O seu pedido foi enviado com sucesso!");
            } else {
                alert("Houve um erro ao enviar o formulário. Tente novamente.");
                narrar("Houve um erro ao enviar o formulário. Tente novamente.");
            }
        });
    });

    // WhatsApp Redirecionamento
    document.getElementById("whatsapp").addEventListener("click", function() {
        narrar("Abrindo o WhatsApp para falar connosco.");
    });
});
