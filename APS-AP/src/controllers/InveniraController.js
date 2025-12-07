class InveniraController {

    static configurarAtividade(req, res) {
        res.json({
            titulo: "Configuração da atividade",
            mensagem: "Hello World esta é a página de configuração."
        });
    }

    static enviarParametros(req, res) {
        res.json({
            title: "Desafio de Lógica",
            description: "Hello World esta é a página dos parâmetros da atividade",
            level_id: "L1.1"
        });
    }

    static deployAtividade(req, res) {
        res.send(`
            <html>
                <body>
                    <h1>Activity Provider</h1>
                    <p>Hello World esta é a página da atividade.</p>
                </body>
            </html>
        `);
    }

    static receberAnaliticas(req, res) {
        console.log("Analíticas recebidas:", req.body);
        res.json({ msg: "Hello World Analíticas recebidas" });
    }

    static listarAnaliticas(req, res) {
        res.json({
            atividadeID: "L1.1",
            analiticas: [
                { estudante: "30551", tentativas: 3, tempo: 44 }
            ]
        });
    }
}

module.exports = InveniraController;
