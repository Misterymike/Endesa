document.addEventListener("DOMContentLoaded", function() {
    let luminText = document.getElementById("lumin-text");
    
    let mensagens = [
        "👋 Olá! Eu sou o Lumin, o assistente da Endesa.",
        "Vou ajudá-lo a reduzir a sua fatura de energia e ganhar 70€ de oferta! 🎉",
        "Analisamos a sua fatura e encontramos as melhores soluções para si!",
        "Envie agora a sua fatura e descubra o que podemos poupar juntos!"
    ];
    
    let i = 0;
    
    function escreverMensagem() {
        if (i < mensagens.length) {
            luminText.innerHTML = mensagens[i];
            i++;
            setTimeout(escreverMensagem, 3000);
        }
    }
    
    escreverMensagem();
});
