"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class Login {
    constructor(idUsuario, correo, contraseña, estadoConfirmacion, estadoTabla) {
        this.IdUsuario = idUsuario;
        this.Correo = correo;
        this.Contraseña = contraseña;
        this.EstadoConfirmacion = estadoConfirmacion;
        this.EstadoTabla = estadoTabla;
    }
    getIdUsuario() {
        return this.IdUsuario;
    }
    setIdUsuario(idUsuario) {
        return this.IdUsuario = idUsuario;
    }
    getCorreo() {
        return this.Correo;
    }
    setCorreo(correo) {
        return this.Correo = correo;
    }
    getContraseña() {
        return this.Contraseña;
    }
    setContraseña(contraseña) {
        return this.Contraseña = contraseña;
    }
    getEstadoConfirmacion() {
        return this.EstadoConfirmacion;
    }
    setEstadoConfirmacion(estadoConfirmacion) {
        return this.EstadoConfirmacion = estadoConfirmacion;
    }
    getEstadoTabla() {
        return this.EstadoTabla;
    }
    setEstadoTabla(estadoTabla) {
        return this.EstadoTabla = estadoTabla;
    }
    validarContraseña(contraseña) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcryptjs_1.default.compare(contraseña, this.Contraseña);
        });
    }
}
exports.Login = Login;
//# sourceMappingURL=Login.js.map