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
const Usuario_1 = require("../models/Usuario");
const database_1 = require("../connections/database");
/* CRUD USERS */
class UsuarioController {
    constructor() {
        this.query1 = 'select u.IdUsuario, u.Correo, u.Contraseña, u.Pregunta, u.Respuesta, u.EstadoConfirmacion, u.EstadoTabla, u.IdTipoUsuario, u.IdPersona from Usuario u, TipoUsuario t';
        this.query2 = 'select * from Usuario where Correo = @correo';
        this.query3 = 'INSERT INTO Usuario values(@correo, @contraseña, @pregunta, @respuesta, @estado, @eliminado)';
        this.query4 = 'UPDATE Usuario SET Correo = @correo, Contraseña = @contraseña, Pregunta = @pregunta, Respuesta = @respuesta, Estado = @estado WHERE IdUsuario = @id_usuario;';
        this.query5 = 'SELECT * FROM Usuario WHERE IdUsuario = @id';
        this.query6 = 'UPDATE Usuario set Eliminado = 1 WHERE IdUsuario = @id;';
    }
    listarUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield database_1.connection();
            try {
                let response = yield conn.request()
                    .query(this.query1);
                let lista_usuario = [];
                const usuarios = response.recordset;
                if (usuarios.length >= 1) {
                    for (let i = 0; i < usuarios.length; i++) {
                        const usuario = new Usuario_1.Usuario();
                        usuario.setIdUsuario(usuarios[i].IdUsuario);
                        usuario.setCorreo(usuarios[i].Correo);
                        usuario.setContraseña(usuarios[i].Contraseña);
                        usuario.setPregunta(usuarios[i].Pregunta);
                        usuario.setRespuesta(usuarios[i].Respuesta);
                        usuario.setEstadoConfirmacion(usuarios[i].EstadoConfirmacion);
                        usuario.setEstadoTabla(usuarios[i].EstadoTabla);
                        usuario.setIdTipoUsuario(usuarios[i].IdTipoUsuario);
                        usuario.setIdPersona(usuarios[i].IdPersona);
                        lista_usuario.push(usuario);
                    }
                }
                conn.close();
                return lista_usuario;
            }
            catch (error) {
                conn.close();
                console.log(error);
                throw error;
            }
        });
    }
    buscarPorCorreo(correo) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield database_1.connection();
            try {
                let response = yield conn.request()
                    .input('correo', database_1.sql.NVarChar, correo)
                    .query(this.query2);
                const usuarios = response.recordset;
                const usuario = new Usuario_1.Usuario();
                if (usuarios.length >= 1) {
                    usuario.setIdUsuario(usuarios[0].IdUsuario);
                    usuario.setCorreo(usuarios[0].Correo);
                    usuario.setContraseña(usuarios[0].Contraseña);
                    usuario.setPregunta(usuarios[0].Pregunta);
                    usuario.setRespuesta(usuarios[0].Respuesta);
                    usuario.setEstadoConfirmacion(usuarios[0].EstadoConfirmacion);
                    usuario.setEstadoTabla(usuarios[0].EstadoTabla);
                }
                conn.close();
                return usuario;
            }
            catch (error) {
                conn.close();
                console.log(error);
                return null;
            }
        });
    }
    agregarUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield database_1.connection();
            try {
                let response = yield conn.request()
                    .input('correo', database_1.sql.NVarChar, usuario.getCorreo())
                    .input('contraseña', database_1.sql.NVarChar, usuario.getContraseña())
                    .input('pregunta', database_1.sql.NVarChar, usuario.getPregunta())
                    .input('respuesta', database_1.sql.NVarChar, usuario.getRespuesta())
                    .input('estado', database_1.sql.Bit, usuario.getEstadoConfirmacion())
                    .input('eliminado', database_1.sql.Bit, usuario.getEstadoTabla())
                    .query(this.query3);
                if (response) {
                    conn.close();
                    return true;
                }
                else {
                    conn.close();
                    return false;
                }
                ;
            }
            catch (error) {
                conn.close();
                return false;
            }
        });
    }
    editarUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield database_1.connection();
            try {
                let response = yield conn.request()
                    .input('correo', database_1.sql.NVarChar, usuario.getCorreo())
                    .input('contraseña', database_1.sql.NVarChar, usuario.getContraseña())
                    .input('pregunta', database_1.sql.NVarChar, usuario.getPregunta())
                    .input('respuesta', database_1.sql.NVarChar, usuario.getRespuesta())
                    .input('estado', database_1.sql.Bit, usuario.getEstadoConfirmacion())
                    .input('id_usuario', database_1.sql.Int, usuario.getIdUsuario())
                    .query(this.query4);
                if (response) {
                    conn.close();
                    return true;
                }
                else {
                    conn.close();
                    return false;
                }
                ;
            }
            catch (error) {
                conn.close();
                return false;
            }
        });
    }
    usuarioPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield database_1.connection();
            try {
                let response = yield conn.request()
                    .input('id', database_1.sql.Int, id)
                    .query(this.query5);
                const usuarios = response.recordset;
                const usuario = new Usuario_1.Usuario();
                if (usuarios.length === 1) {
                    usuario.setIdUsuario(usuarios[0].IdUsuario);
                    usuario.setCorreo(usuarios[0].Correo);
                    usuario.setContraseña(usuarios[0].Contraseña);
                    usuario.setPregunta(usuarios[0].Pregunta);
                    usuario.setRespuesta(usuarios[0].Respuesta);
                    usuario.setEstadoConfirmacion(usuarios[0].EstadoConfirmacion);
                }
                conn.close();
                return usuario;
            }
            catch (error) {
                conn.close();
                console.log(error);
                let obj = {};
                return obj;
            }
        });
    }
    eliminarUsuario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = yield database_1.connection();
            try {
                let response = yield conn.request()
                    .input('id', database_1.sql.Int, id)
                    .query(this.query6);
                if (response) {
                    conn.close();
                    return true;
                }
                else {
                    conn.close();
                    return false;
                }
                ;
            }
            catch (error) {
                conn.close();
                return false;
            }
        });
    }
    encriptarContraseña(contraseña) {
        return __awaiter(this, void 0, void 0, function* () {
            const SALT = yield bcryptjs_1.default.genSalt(5);
            return yield bcryptjs_1.default.hash(contraseña, SALT);
        });
    }
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map