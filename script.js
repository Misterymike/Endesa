document.addEventListener("DOMContentLoaded", function() {
    let synthesis = window.speechSynthesis;
    let voiceToggle = document.getElementById("toggle-voice");

    function narrar(texto) {
        let msg = new SpeechSynthesisUtterance();
        msg.text = texto;
        msg.lang = "pt-PT";
        synthesis.speak(msg);
    }

    // Mensagem de boas-vindas
    setTimeout(() => {
        narrar("Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule a sua poupança ou envie a sua fatura para garantir o melhor preço.");
    }, 2000);

    // Ativar/desativar narração
    voiceToggle.addEventListener("click", function() {
        if (synthesis.speaking) {
            synthesis.cancel();
        } else {
            narrar("Olá! Sou o Lumin, pronto para ajudar.");
        }
    });

    // Simulador de Poupança
    document.getElementById("calcular").addEventListener("click", function() {
        let valor = parseFloat(document.getElementById("valorFatura").value);
        let poupanca = (valor * 0.3).toFixed(2);
        document.getElementById("resultado").innerText = `💡 Com a Endesa, pode poupar aproximadamente ${poupanca}€ na sua fatura!`;
        narrar(`Com a Endesa, pode poupar aproximadamente ${poupanca} euros na sua fatura.`);
    });

    // Enviar formulário
    document.getElementById("enviar").addEventListener("click", function() {
        let nome = document.getElementById("nome").value;
        let telefone = document.getElementById("telefone").value;
        let autorizar = document.getElementById("autorizar").checked;

        if (nome === "" || telefone === "" || !autorizar) {
            alert("Por favor, preencha os campos obrigatórios e aceite os termos.");
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
            }
        });
    });

    // WhatsApp Redirecionamento
    document.getElementById("whatsapp").addEventListener("click", function() {
        narrar("Abrindo o WhatsApp para falar connosco.");
    });
});
