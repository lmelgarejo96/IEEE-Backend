import { Login } from '../models/Login';
import { Usuario, IUsuario } from '../models/Usuario';
import { connection, sql } from '../connections/database';

export class LoginController {
    
    private query1: string = 'SELECT * FROM Usuario where Correo = @correo and Contraseña = @contraseña and Estado = 1';
    private query2: string = 'select IdUsuario, Correo, Contraseña, EstadoConfirmacion, EstadoTabla from Usuario where Correo = @correo';

    async buscarPorCorreo (correo: string): Promise<any> {
        let conn = await connection();
        try {
            let response = await conn.request()
            .input('correo', sql.NVarChar, correo)
            .query(this.query2);

            const usuarios = response.recordset;
            if(usuarios.length >= 1) {
                const usuario: Login = new Login(usuarios[0].IdUsuario, usuarios[0].Correo, usuarios[0].Contraseña, usuarios[0].EstadoConfirmacion, usuarios[0].EstadoTabla);
                conn.close();
                return usuario;
            }
            return null;
        } catch (error) {
            conn.close();
            console.log(error)
            return null;
        }
    }

    async login(login: Login): Promise<Boolean> {
        let conn = await connection();
        try {
            let response = await conn.request()
            .input('correo', sql.NVarChar, login.getCorreo())
            .input('contraseña', sql.NVarChar, login.getContraseña())
            .query(this.query1);
            console.log(response)
            if(response.rowsAffected[0]>=1){
                conn.close();
                return true;
            }else{
                return false;
            };
        } catch (error) {
            conn.close();
            console.log(error)
            return false;
        }
    }

}