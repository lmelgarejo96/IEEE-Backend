
export class Persona {
    
    private IdPersona: number;
    private Dni: string;
    private NombrePersona: string;
    private ApellidoPersona: string;
    private FechaNacimiento: string;
    private Celular: string;
    private Trabaja: boolean;
    private EstadoTabla: boolean;

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
    
	public getIdPersona(): number {
		return this.IdPersona;
	}

	public setIdPersona(IdPersona: number) {
		this.IdPersona = IdPersona;
	}

	public getDni(): string {
		return this.Dni;
	}

	public setDni(Dni: string) {
		this.Dni = Dni;
	}

	public getNombrePersona(): string {
		return this.NombrePersona;
	}

	public setNombrePersona(NombrePersona: string) {
		this.NombrePersona = NombrePersona;
	}

	public getApellidoPersona(): string {
		return this.ApellidoPersona;
	}

	public setApellidoPersona(ApellidoPersona: string) {
		this.ApellidoPersona = ApellidoPersona;
	}

	public getFechaNacimiento(): string {
		return this.FechaNacimiento;
	}

	public setFechaNacimiento(FechaNacimiento: string) {
		this.FechaNacimiento = FechaNacimiento;
	}

	public getCelular(): string {
		return this.Celular;
	}

	public setCelular(Celular: string) {
		this.Celular = Celular;
	}

	public getTrabaja(): boolean {
		return this.Trabaja;
	}

	public setTrabaja(Trabaja: boolean) {
		this.Trabaja = Trabaja;
	}

	public getEstadoTabla(): boolean {
		return this.EstadoTabla;
	}

	public setEstadoTabla(EstadoTabla: boolean) {
		this.EstadoTabla = EstadoTabla;
	}


    
}