const BaseScenario = require("./BaseScenario");

class ScenarioCondicional extends BaseScenario {
    loadMap() {
        return [
            ["R", ".", "#", ".", "F"]
        ];
    }

    getInstructions() {
        return "Utiliza condições IF para contornar obstáculos.";
    }

    getLearningGoals() {
        return ["Estruturas condicionais", "Tomada de decisão"];
    }
}

module.exports = ScenarioCondicional;
