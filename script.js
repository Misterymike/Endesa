document.addEventListener("DOMContentLoaded", function() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Olá! Seja bem-vindo! Sou o Lumin, o assistente virtual da Endesa. Simule a sua poupança ou envie a sua fatura para garantir o melhor preço.";
    msg.lang = "pt-PT";
    msg.rate = 1.1;
    
    setTimeout(() => {
        speechSynthesis.speak(msg);
    }, 1000);
});

function calcularPoupanca() {
    let valorFatura = document.getElementById("valorFatura").value;
    let poupanca = valorFatura * 0.30; // 30% de desconto
    document.getElementById("resultadoPoupanca").innerHTML = `💡 Com a Endesa, pode poupar aproximadamente <b>${poupanca.toFixed(2)}€</b> na fatura!`;
}
