class BaseScenario {
    constructor() {
        if (new.target === BaseScenario) {
            throw new Error("Classe abstrata.");
        }
    }

    loadMap() {
        return [];
    }

    getInstructions() {
        return "Instruções não definidas.";
    }

    getLearningGoals() {
        return [];
    }
}

module.exports = BaseScenario;
