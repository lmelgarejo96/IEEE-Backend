import bcrypt from 'bcryptjs';

export class Login {
    
    IdUsuario: number;
    Correo: string;
    Contraseña: string;
    Estado: boolean;
    
    constructor( idUsuario: number, correo: string, contraseña: string, estado: boolean) {
        this.IdUsuario = idUsuario;
        this.Correo = correo;
        this.Contraseña = contraseña;
        this.Estado = estado;
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

    public getEstado(): boolean {
        return this.Estado;
    }

    public setEstado(estado: boolean): boolean {
        return this.Estado = estado;
    }

    async validarContraseña(contraseña: string ): Promise<boolean> {
        return await bcrypt.compare(contraseña, this.Contraseña);
    }

}