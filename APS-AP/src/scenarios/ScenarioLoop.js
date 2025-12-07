const BaseScenario = require("./BaseScenario");

class ScenarioLoop extends BaseScenario {
    loadMap() {
        return [
            ["R", ".", ".", ".", ".", "F"]
        ];
    }

    getInstructions() {
        return "Utiliza ciclos WHILE para repetir movimentos automaticamente.";
    }

    getLearningGoals() {
        return ["Ciclos", "Generalização de padrões repetitivos"];
    }
}

module.exports = ScenarioLoop;
