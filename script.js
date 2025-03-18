document.addEventListener("DOMContentLoaded", function() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule a sua poupança ou envie a sua fatura para garantir o melhor preço.";
    msg.lang = "pt-PT";

    // Espera 2 segundos antes de narrar automaticamente
    setTimeout(() => {
        if (!sessionStorage.getItem("narrated")) {
            window.speechSynthesis.speak(msg);
            sessionStorage.setItem("narrated", "true");
        }
    }, 2000);
});

// Função para ativar/desativar a narração
function toggleVoice() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    } else {
        let msg = new SpeechSynthesisUtterance();
        msg.text = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule a sua poupança ou envie a sua fatura para garantir o melhor preço.";
        msg.lang = "pt-PT";
        window.speechSynthesis.speak(msg);
    }
}

// Simulador de poupança
function calcularPoupanca() {
    let valorFatura = document.getElementById("valorFatura").value;
    let poupanca = valorFatura * 0.3; // 30% de poupança
    document.getElementById("resultado").innerHTML = `💡 Com a Endesa, pode poupar aproximadamente <b>${poupanca.toFixed(2)}€</b> na sua fatura!`;
}
