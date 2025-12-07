const express = require("express");
const InveniraController = require("../controllers/InveniraController");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Activity Provider - Rotas Disponíveis</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 40px;
                        background: #f7f7f7;
                    }
                    h1 {
                        color: #1a237e;
                    }
                    .info {
                        background: #e8eaf6;
                        padding: 15px;
                        border-left: 5px solid #303f9f;
                        margin-bottom: 30px;
                    }
                    ul {
                        font-size: 18px;
                    }
                    li {
                        margin-bottom: 10px;
                    }
                    code {
                        background: #eee;
                        padding: 4px 6px;
                        border-radius: 4px;
                    }
                    footer {
                        margin-top: 40px;
                        font-size: 14px;
                        color: #666;
                    }
                </style>
            </head>

            <body>
                <h1>Activity Provider - Lógica de Programação</h1>

                <div class="info">
                    <p><strong>Aluno:</strong> <span style="color:#000;">Frederico Jamisse</span></p>
                    <p><strong>UC:</strong> Arquitetura e Padrões de Software (APS)</p>
                </div>

                <h2>Rotas Disponíveis</h2>
                <ul>
                    <li><code>GET /config_url</code> – Página de configuração da atividade</li>
                    <li><code>GET /json_params_url</code> – Parâmetros da atividade (JSON)</li>
                    <li><code>GET /deploy_url</code> – Página HTML da atividade</li>
                    <li><code>POST /analytics_url</code> – Receber analíticas do aluno</li>
                    <li><code>GET /analytics_list_url</code> – Listar analíticas guardadas</li>
                </ul>

                <footer>
                    Activity Provider desenvolvido para a UC APS – Universidade Aberta
                </footer>
            </body>
        </html>
    `);
});


// 1) Configuração
app.get("/config_url", InveniraController.configurarAtividade);

// 2) Parâmetros da atividade
app.get("/json_params_url", InveniraController.enviarParametros);

// 3) Deploy da atividade
app.get("/deploy_url", InveniraController.deployAtividade);

// 4) Receber analytics
app.post("/analytics_url", InveniraController.receberAnaliticas);

// 5) Listar analytics
app.get("/analytics_list_url", InveniraController.listarAnaliticas);

app.listen(3000, () => {
    console.log("Servidor do Activity Provider a correr na porta 3000");
});
