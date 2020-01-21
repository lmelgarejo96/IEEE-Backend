"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Mongo DB
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    Correo: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    Contraseña: {
        type: String,
        required: true,
        min: 4
    },
    Pregunta: {
        type: String,
        required: true,
        lowercase: true,
        min: 4,
    },
    Respuesta: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    }
});
exports.default = mongoose_1.model('User', userSchema);
// SQL
//# sourceMappingURL=Users.js.map