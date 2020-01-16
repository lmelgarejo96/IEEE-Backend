import { Usuario, IUsuario } from '../models/Usuario';
import { connection, sql } from '../connections/database';




/* CRUD USERS */
export class UsuarioController {
    
    private query1: string = 'select * from Usuarios';
    private query2: string = 'select * from Usuarios where Correo = @correo';
    private query3: string = 'INSERT INTO Usuarios values(@correo, @contraseña, @pregunta, @respuesta, @estado, @eliminado)';
    private query4: string = 'UPDATE Usuarios SET Correo = @correo, Contraseña = @contraseña, Pregunta = @pregunta, Respuesta = @respuesta, Estado = @estado WHERE IdUsuario = @id_usuario;';
    private query5: string = 'SELECT * FROM Usuarios WHERE IdUsuario = @id';
    private query6: string = 'UPDATE Usuarios set Eliminado = 1 WHERE IdUsuario = @id;';

    

    async listarUsuarios(): Promise<Usuario[]> {
        let conn = await connection();
        try {
            let response = await conn.request()
            .query(this.query1);
            let lista_usuario: Usuario[] = [];
            const usuarios: IUsuario[] = response.recordset;
            if(usuarios.length >= 1) {
                for(let i = 0; i < usuarios.length; i++){
                    const usuario: Usuario = new Usuario();
                    usuario.setIdUsuario(usuarios[i].IdUsuario);
                    usuario.setCorreo(usuarios[i].Correo);
                    usuario.setContraseña(usuarios[i].Contraseña);
                    usuario.setPregunta(usuarios[i].Pregunta,);
                    usuario.setRespuesta(usuarios[i].Respuesta,);
                    usuario.setEstado(usuarios[i].Estado,);
                    usuario.setEliminado(usuarios[i].Eliminado);
                    lista_usuario.push(usuario);
                }
            }
            conn.close();
            return lista_usuario;
        } catch (error) {
            conn.close();
            console.log(error)
            throw error
        }
    }
    
    async buscarPorCorreo (correo: string): Promise<any> {
        let conn = await connection();
        try {
            let response = await conn.request()
            .input('correo', sql.NVarChar, correo)
            .query(this.query2);

            const usuarios: IUsuario[] = response.recordset;
            const usuario: Usuario = new Usuario();

            if(usuarios.length >= 1) {
                usuario.setIdUsuario(usuarios[0].IdUsuario);
                usuario.setCorreo(usuarios[0].Correo);
                usuario.setContraseña(usuarios[0].Contraseña);
                usuario.setPregunta(usuarios[0].Pregunta);
                usuario.setRespuesta(usuarios[0].Respuesta);
                usuario.setEstado(usuarios[0].Estado);
                usuario.setEliminado(usuarios[0].Eliminado);
            }
            conn.close();
            return usuario;
        } catch (error) {
            conn.close();
            console.log(error)
            return null;
        }
    }
    

    async agregarUsuario(usuario: Usuario): Promise<Boolean> {
        let conn = await connection();
        try {
            let response = await conn.request()
            .input('correo', sql.NVarChar, usuario.getCorreo())
            .input('contraseña', sql.NVarChar, usuario.getContraseña())
            .input('pregunta', sql.NVarChar, usuario.getPregunta())
            .input('respuesta', sql.NVarChar, usuario.getRespuesta())
            .input('estado', sql.Bit, usuario.getEstado())
            .input('eliminado', sql.Bit, usuario.getEliminado())
            .query(this.query3);
            if(response){
                conn.close();
                return true;
            }else{
                conn.close();
                return false;
            };
        } catch (error) {
            conn.close();
            return false;
        }
    }

    async editarUsuario(usuario: Usuario): Promise<Boolean>{
        let conn = await connection();
        try {
            let response = await conn.request()
            .input('correo', sql.NVarChar, usuario.getCorreo())
            .input('contraseña', sql.NVarChar, usuario.getContraseña())
            .input('pregunta', sql.NVarChar, usuario.getPregunta())
            .input('respuesta', sql.NVarChar, usuario.getRespuesta())
            .input('estado', sql.Bit, usuario.getEstado())
            .input('id_usuario', sql.Int, usuario.getIdUsuario())
            .query(this.query4);
            if(response){
                conn.close();
                return true;
            }else{
                conn.close();
                return false;
            };
        } catch (error) {
            conn.close();
            return false;
        }
    }
    
    async usuarioPorId(id: number): Promise<Usuario>{
        let conn = await connection();
        try {
            let response = await conn.request()
            .input('id', sql.Int, id)
            .query(this.query5);
            
            const usuarios: IUsuario[] = response.recordset;
            const usuario: Usuario = new Usuario();

            if(usuarios.length === 1) {
                usuario.setIdUsuario(usuarios[0].IdUsuario);
                usuario.setCorreo(usuarios[0].Correo);
                usuario.setContraseña(usuarios[0].Contraseña);
                usuario.setPregunta(usuarios[0].Pregunta,);
                usuario.setRespuesta(usuarios[0].Respuesta,);
                usuario.setEstado(usuarios[0].Estado,);
            }

            conn.close();
            return usuario;
            
        } catch (error) {
            conn.close();
            console.log(error)
            let obj: any = {};
            return obj;
        }
    }
    
    async eliminarUsuario(id: number): Promise<Boolean> {
        let conn = await connection();
        try {
            let response = await conn.request()
            .input('id', sql.Int, id)
            .query(this.query6);
            if(response){
                conn.close();
                return true;
            }else{
                conn.close();
                return false;
            };
        } catch (error) {
            conn.close();
            return false;
        }
    }

    

}