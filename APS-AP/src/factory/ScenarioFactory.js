const ScenarioSequencia = require("../scenarios/ScenarioSequencia");
const ScenarioCondicional = require("../scenarios/ScenarioCondicional");
const ScenarioLoop = require("../scenarios/ScenarioLoop");
const ScenarioFuncoes = require("../scenarios/ScenarioFuncoes");

class ScenarioFactory {

    static createScenario(activityID) {
        // Escolha do cenário com base na atividade
        // Aqui há de estar lógica mais completa (ex: configs guardadas no BD)
        switch (activityID) {
            case "L1.1":
            case "L1.2":
                return new ScenarioSequencia();

            case "L2.1":
                return new ScenarioCondicional();

            case "L3.1":
                return new ScenarioLoop();

            case "L4.1":
                return new ScenarioFuncoes();

            default:
                throw new Error("Cenário não definido.");
        }
    }
}

module.exports = ScenarioFactory;
