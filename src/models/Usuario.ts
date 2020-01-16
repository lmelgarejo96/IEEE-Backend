import bcrypt from 'bcryptjs';

export class Usuario {

    private IdUsuario: number;
    private Correo: string;
    private Contraseña: string;
    private Pregunta: string;
    private Respuesta: string;
    private Estado: boolean;
    private Eliminado: boolean;
    

    constructor(/* idUsuario: number, correo: String, contraseña: String, pregunta: String, respuesta: String, estado: Boolean */){
        this.IdUsuario = 0;
        this.Correo = '';
        this.Contraseña = '';
        this.Pregunta = '';
        this.Respuesta = '';
        this.Estado = false;
        this.Eliminado = false;
    }
    
    public getIdUsuario(): number {
        return this.IdUsuario;
    }

    public setIdUsuario(id: number): number {
        return this.IdUsuario = id;
    }

    public getCorreo(): String {
        return this.Correo;
    }

    public setCorreo(correo: string): string {
        return this.Correo = correo;
    }

    public getContraseña(): string {
        return this.Contraseña;
    }

    public setContraseña(contraseña: string): string {
        return this.Contraseña = contraseña;
    }
    
    public getPregunta(): string {
        return this.Pregunta;
    }

    public setPregunta(pregunta: string): string {
        return this.Pregunta = pregunta;
    }

    public getRespuesta(): string {
        return this.Respuesta;
    }

    public setRespuesta(respuesta: string): string {
        return this.Respuesta = respuesta;
    }
    
    public getEstado(): Boolean {
        return this.Estado;
    }

    public setEstado(estado: boolean): boolean {
        return this.Estado = estado;
    }

    public getEliminado(): boolean {
        return this.Eliminado;
    }

    public setEliminado(eliminado: boolean): boolean {
        return this.Eliminado = eliminado;
    }

    async encriptarContraseña(contraseña: string): Promise<string> {
        const SALT = await bcrypt.genSalt(10);
        return await bcrypt.hash(contraseña, SALT);
    }

    async validarContraseña(contraseña: string ): Promise<boolean> {
        return await bcrypt.compare(contraseña, this.Contraseña);
    }
}


export interface IUsuario {
    IdUsuario: number,
    Correo: string,
    Contraseña: string,
    Pregunta: string,
    Respuesta: string,
    Estado: boolean,
    Eliminado: boolean
}