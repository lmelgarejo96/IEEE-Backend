
export class Usuario {

    private IdUsuario: number;
    private Correo: string;
    private Contraseña: string;
    private Pregunta: string;
    private Respuesta: string;
    private EstadoConfirmacion: boolean;
    private EstadoTabla: boolean;

    private IdTipoUsuario: any;
    private IdPersona: any;

    

    constructor(/* idUsuario: number, correo: String, contraseña: String, pregunta: String, respuesta: String, estado: Boolean */){
        this.IdUsuario = 0;
        this.Correo = '';
        this.Contraseña = '';
        this.Pregunta = '';
        this.Respuesta = '';
        this.EstadoConfirmacion = false;
        this.EstadoTabla = false;
        this.IdTipoUsuario = null;
        this.IdPersona =  null;
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
    
    public getEstadoConfirmacion(): Boolean {
        return this.EstadoConfirmacion;
    }

    public setEstadoConfirmacion(estadoConfirmacion: boolean): boolean {
        return this.EstadoConfirmacion = estadoConfirmacion;
    }

    public getEstadoTabla(): boolean {
        return this.EstadoTabla;
    }

    public setEstadoTabla(estadoTabla: boolean): boolean {
        return this.EstadoTabla = estadoTabla;
    }

    public getIdTipoUsuario(){
        return this.IdTipoUsuario;
    }

    public setIdTipoUsuario ( idTipoUsuario: any ){
        return this.IdTipoUsuario = idTipoUsuario;
    }

    public getIdPersona(){
        return this.IdPersona;
    }

    public setIdPersona ( idPersona: any ){
        return this.IdPersona = idPersona;
    }

   /*  async encriptarContraseña(contraseña: string): Promise<string> {
        const SALT = await bcrypt.genSalt(10);
        return await bcrypt.hash(contraseña, SALT);
    }

    async validarContraseña(contraseña: string ): Promise<boolean> {
        return await bcrypt.compare(contraseña, this.Contraseña);
    } */
}


export interface IUsuario {
    IdUsuario: number,
    Correo: string,
    Contraseña: string,
    Pregunta: string,
    Respuesta: string,
    EstadoConfirmacion: boolean,
    EstadoTabla: boolean,
    IdTipoUsuario: boolean,
    IdPersona: boolean,
}