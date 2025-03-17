document.addEventListener("DOMContentLoaded", function () {
    // Mensagem automática do Lumin ao abrir o site
    const mensagemLumin = "Olá! Seja bem-vindo! Estou aqui para o ajudar a poupar na sua fatura de energia!";
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(mensagemLumin);
    utterance.lang = "pt-PT";

    setTimeout(() => {
        synth.speak(utterance);
    }, 2000);
});
