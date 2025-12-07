const BaseScenario = require("./BaseScenario");

class ScenarioFuncoes extends BaseScenario {
    loadMap() {
        return [
            ["R", ".", "#", ".", ".", "F"]
        ];
    }

    getInstructions() {
        return "Define funções para modularizar ações repetitivas.";
    }

    getLearningGoals() {
        return ["Modularização", "Reutilização de código"];
    }
}

module.exports = ScenarioFuncoes;
