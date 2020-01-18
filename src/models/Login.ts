import bcrypt from 'bcryptjs';

export class Login {
    
    IdUsuario: number;
    Correo: string;
    Contraseña: string;
    EstadoConfirmacion: boolean;
    EstadoTabla: boolean;
    
    constructor( idUsuario: number, correo: string, contraseña: string, estadoConfirmacion: boolean, estadoTabla: boolean) {
        this.IdUsuario = idUsuario;
        this.Correo = correo;
        this.Contraseña = contraseña;
        this.EstadoConfirmacion = estadoConfirmacion;
        this.EstadoTabla = estadoTabla;
    }
    
    public getIdUsuario(): number {
        return this.IdUsuario;
    }

    public setIdUsuario(idUsuario: number): number {
        return this.IdUsuario = idUsuario;
    }

    public getCorreo(): string {
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

    public getEstadoConfirmacion(): boolean {
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

    async validarContraseña(contraseña: string ): Promise<boolean> {
        return await bcrypt.compare(contraseña, this.Contraseña);
    }

}