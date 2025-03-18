document.addEventListener("DOMContentLoaded", function() {
    iniciarNarracao();
});

// Função para iniciar a narração do Lumin
function iniciarNarracao() {
    let mensagem = [
        "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa.",
        "Estou aqui para o ajudar a poupar na sua fatura de energia.",
        "Pode utilizar o simulador para calcular quanto pode poupar.",
        "Ou então, basta enviar a sua fatura e encontraremos o melhor plano para si.",
        "Se precisar de ajuda, fale comigo no WhatsApp!"
    ];

    let i = 0;
    function narrarTexto() {
        if (i < mensagem.length) {
            let msg = new SpeechSynthesisUtterance(mensagem[i]);
            msg.lang = "pt-PT";
            msg.rate = 1;
            msg.onend = function() {
                i++;
                setTimeout(narrarTexto, 1200); // Pequena pausa entre frases
            };
            speechSynthesis.speak(msg);
        }
    }

    narrarTexto();
}

// Simulador de Poupança
function calcularPoupanca() {
    let valor = document.getElementById("valorFatura").value;
    let poupanca = (valor * 0.30).toFixed(2);
    let mensagemPoupanca = `💡 Com a Endesa, pode poupar aproximadamente ${poupanca}€ na sua fatura!`;
    
    document.getElementById("resultado").innerHTML = mensagemPoupanca;

    // Lumin responde dinamicamente após o cálculo
    let msg = new SpeechSynthesisUtterance(`Se mudar para a Endesa, pode poupar cerca de ${poupanca} euros na sua fatura!`);
    msg.lang = "pt-PT";
    speechSynthesis.speak(msg);
}

// Envio de formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    let nome = formData.get("nome");

    fetch("https://formsubmit.co/miguelferreira@presentiluminado.pt", {
        method: "POST",
        body: formData
    }).then(response => {
        if (response.ok) {
            alert(`Obrigado, ${nome}! Em breve entraremos em contacto.`);
            let msg = new SpeechSynthesisUtterance(`Obrigado, ${nome}! Em breve entraremos em contacto.`);
            msg.lang = "pt-PT";
            speechSynthesis.speak(msg);
            this.reset();
        } else {
            alert("Erro ao enviar. Tente novamente.");
        }
    });
});
