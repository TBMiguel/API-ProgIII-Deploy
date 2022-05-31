"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { hello: 'this is a simple API deploy' };
});
Route_1.default.get('/aula', 'AulasController.index');
Route_1.default.get('/aula/:id', 'AulasController.show');
//# sourceMappingURL=routes.js.map