// src/controllers/ActivityController.js

const ScenarioFactory = require("../factory/ScenarioFactory");

class ActivityController {

    static obterAtividade(req, res) {
        const { activityID, inveniraStdID } = req.query;

        // Aqui um dia haverá validação de tokens, BD, etc.
        // ex: // Validar se o aluno tem acesso a este nível

        try {
            const scenario = ScenarioFactory.createScenario(activityID);

            res.json({
                activityID,
                inveniraStdID,
                map: scenario.loadMap(),
                instructions: scenario.getInstructions(),
                learningGoals: scenario.getLearningGoals()
            });

        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    static guardarAnaliticas(req, res) {
        // Aqui há de estar o código que grava analíticas no BD
        // ex: // DB.saveAnalytics(req.body)
        res.json({ msg: "Analíticas guardadas (mock)" });
    }
}

module.exports = ActivityController;
