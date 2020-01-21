"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor( /* idUsuario: number, correo: String, contraseña: String, pregunta: String, respuesta: String, estado: Boolean */) {
        this.IdUsuario = 0;
        this.Correo = '';
        this.Contraseña = '';
        this.Pregunta = '';
        this.Respuesta = '';
        this.EstadoConfirmacion = false;
        this.EstadoTabla = false;
        this.IdTipoUsuario = null;
        this.IdPersona = null;
    }
    getIdUsuario() {
        return this.IdUsuario;
    }
    setIdUsuario(id) {
        return this.IdUsuario = id;
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
    getPregunta() {
        return this.Pregunta;
    }
    setPregunta(pregunta) {
        return this.Pregunta = pregunta;
    }
    getRespuesta() {
        return this.Respuesta;
    }
    setRespuesta(respuesta) {
        return this.Respuesta = respuesta;
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
    getIdTipoUsuario() {
        return this.IdTipoUsuario;
    }
    setIdTipoUsuario(idTipoUsuario) {
        return this.IdTipoUsuario = idTipoUsuario;
    }
    getIdPersona() {
        return this.IdPersona;
    }
    setIdPersona(idPersona) {
        return this.IdPersona = idPersona;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map