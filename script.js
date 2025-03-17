document.addEventListener("DOMContentLoaded", function () {
    // Iniciar narração automática do Lumin ao carregar a página
    falar("Olá! Sou o Lumin, o assistente virtual da Endesa! Quer saber como pode poupar na sua fatura de energia? Envie já a sua fatura e eu faço o diagnóstico para encontrar a melhor oferta!");

    // Evento ao enviar formulário
    document.getElementById("energyForm").addEventListener("submit", function (event) {
        event.preventDefault();
        falar("Obrigado por enviar a sua fatura! Vou analisá-la e já lhe dou uma resposta sobre as melhores condições para si.");
        alert("Fatura enviada com sucesso! Aguarde o nosso contacto.");
    });

    // Simulação de interação com Lumin
    setTimeout(function () {
        falar("Sabia que 80% das pessoas pagam mais do que deviam na conta de energia? Envie a sua fatura e vamos ver se é o seu caso!");
    }, 10000);
});

// Função para narrar com voz
function falar(texto) {
    let speech = new SpeechSynthesisUtterance(texto);
    speech.lang = "pt-PT";
    speech.rate = 1;
    speechSynthesis.speak(speech);
}
