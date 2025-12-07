const BaseScenario = require("./BaseScenario");

class ScenarioSequencia extends BaseScenario {
    loadMap() {
        // Aqui há de estar uma matriz ou tabuleiro
        return [
            ["R", ".", ".", ".", "F"]
        ];
    }

    getInstructions() {
        return "Constrói uma sequência de passos que leve o robot até à bandeira.";
    }

    getLearningGoals() {
        return ["Sequenciação de instruções", "Ordem de execução"];
    }
}

module.exports = ScenarioSequencia;
