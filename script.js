document.addEventListener("DOMContentLoaded", function() {
    verificarPermissaoFala();
});

// Verifica se o navegador suporta fala
function verificarPermissaoFala() {
    if ('speechSynthesis' in window) {
        // Adiciona um pequeno delay para garantir que a voz está pronta
        setTimeout(iniciarNarracao, 2000);
    } else {
        console.warn("O seu navegador não suporta síntese de voz.");
    }
}

// Função para iniciar a narração do Lumin
function iniciarNarracao() {
    let mensagens = [
        "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa.",
        "Estou aqui para o ajudar a poupar na sua fatura de energia.",
        "Utilize o simulador abaixo para calcular a sua poupança.",
        "Ou então, envie a sua fatura e encontramos o melhor plano para si!",
        "Se precisar de ajuda, fale comigo no WhatsApp!"
    ];

    falarMensagens(mensagens);
}

// Função para narrar mensagens em sequência
function falarMensagens(mensagens) {
    let i = 0;
    
    function narrarTexto() {
        if (i < mensagens.length) {
            let msg = new SpeechSynthesisUtterance(mensagens[i]);
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

// Função para calcular a poupança
function calcularPoupanca() {
    let valor = document.getElementById("valorFatura").value;
    let poupanca = (valor * 0.30).toFixed(2);
    let mensagemPoupanca = `💡 Com a Endesa, pode poupar aproximadamente ${poupanca}€ na sua fatura!`;
    
    document.getElementById("resultado").innerHTML = mensagemPoupanca;

    // Lumin responde dinamicamente após o cálculo
    falarMensagens([`Se mudar para a Endesa, pode poupar cerca de ${poupanca} euros na sua fatura!`]);
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
            falarMensagens([`Obrigado, ${nome}! Em breve entraremos em contacto.`]);
            this.reset();
        } else {
            alert("Erro ao enviar. Tente novamente.");
        }
    });
});
