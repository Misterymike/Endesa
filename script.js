document.addEventListener("DOMContentLoaded", function() {
    // Simulador de Poupança
    document.getElementById("calcular").addEventListener("click", function() {
        let valorFatura = parseFloat(document.getElementById("valor-fatura").value);
        let poupanca = valorFatura * 0.30;  // 30% de poupança garantida
        document.getElementById("resultado").innerHTML = `💡 Com a Endesa, pode poupar aproximadamente <strong>${poupanca.toFixed(2)}€</strong> na sua fatura!`;
    });

    // Narração inicial do Lumin AI
    let mensagem = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule aqui no simulador ou envie a sua fatura para garantir o melhor preço.";
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(mensagem);
    utterance.lang = "pt-PT";
    utterance.rate = 1;
    synth.speak(utterance);

    // Envio do formulário para o e-mail
    document.getElementById("fatura-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let formData = new FormData(this);

        fetch("https://formsubmit.co/ajax/miguelferreira@presentiluminado.pt", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert("Fatura enviada com sucesso!");
        })
        .catch(error => {
            alert("Erro ao enviar. Tente novamente.");
        });
    });
});
