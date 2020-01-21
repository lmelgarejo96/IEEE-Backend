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
Object.defineProperty(exports, "__esModule", { value: true });
const Login_1 = require("../models/Login");
const database_1 = require("../connections/database");
class LoginController {
    constructor() {
        this.query1 = 'SELECT * FROM Usuario where Correo = @correo and Contraseña = @contraseña and Estado = 1';
        this.query2 = 'select IdUsuario, Correo, Contraseña, EstadoConfirmacion, EstadoTabla from Usuario where Correo = @correo';
    }
    buscarPorCorreo(correo) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield database_1.connection();
            try {
                let response = yield conn.request()
                    .input('correo', database_1.sql.NVarChar, correo)
                    .query(this.query2);
                const usuarios = response.recordset;
                if (usuarios.length >= 1) {
                    const usuario = new Login_1.Login(usuarios[0].IdUsuario, usuarios[0].Correo, usuarios[0].Contraseña, usuarios[0].EstadoConfirmacion, usuarios[0].EstadoTabla);
                    conn.close();
                    return usuario;
                }
                return null;
            }
            catch (error) {
                conn.close();
                console.log(error);
                return null;
            }
        });
    }
    login(login) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield database_1.connection();
            try {
                let response = yield conn.request()
                    .input('correo', database_1.sql.NVarChar, login.getCorreo())
                    .input('contraseña', database_1.sql.NVarChar, login.getContraseña())
                    .query(this.query1);
                console.log(response);
                if (response.rowsAffected[0] >= 1) {
                    conn.close();
                    return true;
                }
                else {
                    return false;
                }
                ;
            }
            catch (error) {
                conn.close();
                console.log(error);
                return false;
            }
        });
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map