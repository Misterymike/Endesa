document.addEventListener("DOMContentLoaded", function () {
    let mensagens = [
        "Olá! Sou o Lumin, o assistente virtual da Endesa! 🔥",
        "Está à procura da melhor oferta de energia?",
        "Posso ajudá-lo a poupar! Envie já a sua fatura e descubra a melhor tarifa.",
        "Não perca a oferta de 70€ na primeira fatura! Aproveite! 🎉"
    ];

    let index = 0;
    let elementoMensagem = document.getElementById("lumin-mensagem");

    function falar() {
        if (index < mensagens.length) {
            elementoMensagem.innerText = mensagens[index];
            let fala = new SpeechSynthesisUtterance(mensagens[index]);
            fala.lang = "pt-PT";
            speechSynthesis.speak(fala);
            index++;
            setTimeout(falar, 5000);
        }
    }

    falar();
});
