const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint para narrar texto
app.post("/narrar", (req, res) => {
    const texto = req.body.texto;
    res.json({ mensagem: `LUMIN AI está a narrar: ${texto}` });
});

// Endpoint para chatbot
app.post("/chat", (req, res) => {
    const mensagem = req.body.mensagem.toLowerCase();
    let resposta = "Ainda estou aprendendo...";
    
    if (mensagem.includes("poupança")) {
        resposta = "Com a Endesa, pode poupar até 30% na sua fatura!";
    } else if (mensagem.includes("endesa")) {
        resposta = "A Endesa oferece tarifas especiais para ajudar a poupar!";
    }

    res.json({ resposta });
});

// Endpoint para receber o formulário
app.post("/enviar-formulario", (req, res) => {
    const { nome, telefone } = req.body;
    console.log(`Novo cliente: ${nome}, Telefone: ${telefone}`);
    res.json({ mensagem: "Formulário enviado com sucesso!" });
});

// Exportar a API para o Vercel
module.exports = app;
