"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor() {
        this.IdPersona = 0;
        this.Dni = '',
            this.NombrePersona = '',
            this.ApellidoPersona = '',
            this.FechaNacimiento = '',
            this.Celular = '',
            this.Trabaja = false;
        this.EstadoTabla = false;
    }
    getIdPersona() {
        return this.IdPersona;
    }
    setIdPersona(IdPersona) {
        this.IdPersona = IdPersona;
    }
    getDni() {
        return this.Dni;
    }
    setDni(Dni) {
        this.Dni = Dni;
    }
    getNombrePersona() {
        return this.NombrePersona;
    }
    setNombrePersona(NombrePersona) {
        this.NombrePersona = NombrePersona;
    }
    getApellidoPersona() {
        return this.ApellidoPersona;
    }
    setApellidoPersona(ApellidoPersona) {
        this.ApellidoPersona = ApellidoPersona;
    }
    getFechaNacimiento() {
        return this.FechaNacimiento;
    }
    setFechaNacimiento(FechaNacimiento) {
        this.FechaNacimiento = FechaNacimiento;
    }
    getCelular() {
        return this.Celular;
    }
    setCelular(Celular) {
        this.Celular = Celular;
    }
    getTrabaja() {
        return this.Trabaja;
    }
    setTrabaja(Trabaja) {
        this.Trabaja = Trabaja;
    }
    getEstadoTabla() {
        return this.EstadoTabla;
    }
    setEstadoTabla(EstadoTabla) {
        this.EstadoTabla = EstadoTabla;
    }
}
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map