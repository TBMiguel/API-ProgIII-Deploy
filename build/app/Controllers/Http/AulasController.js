"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AulasController {
    constructor() {
        this.aulas = [{
                id: 1,
                disciplina: "Programação III",
                curso: "ADS"
            },
            {
                id: 2,
                disciplina: "Projeto de Sistemas",
                curso: "ADS"
            },
            {
                id: 3,
                disciplina: "Empreendedorismo",
                curso: "ADS"
            },
        ];
    }
    async index({}) {
        return {
            aulas: this.aulas,
        };
    }
    async show({ params }) {
        for (const aula of this.aulas) {
            if (aula.id == params.id) {
                return {
                    aula: aula
                };
            }
        }
        return {
            message: "ID não encontrado"
        };
    }
}
exports.default = AulasController;
//# sourceMappingURL=AulasController.js.map